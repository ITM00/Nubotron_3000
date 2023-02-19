from fastapi import FastAPI, Request, WebSocket, WebSocketDisconnect
from .connection_manager import ConnectionManager
import json
import asyncio
import psycopg2
from aiokafka import AIOKafkaConsumer
from aiokafka.helpers import create_ssl_context
from .db_interactions import add_data_in_db, get_last_record_from_db
from .mapper import map_exauster_data
from .pull_history import pull_history


app = FastAPI()
manager = ConnectionManager()

topic = 'zsmk-9433-dev-01'
loop = asyncio.get_event_loop()

context = create_ssl_context(
    cafile="app/CA.crt"
)

consumer = AIOKafkaConsumer(
    topic,
    group_id='Nubotron_3000',
    bootstrap_servers='rc1a-b5e65f36lm3an1d5.mdb.yandexcloud.net:9091',
    security_protocol="SASL_SSL",
    sasl_mechanism="SCRAM-SHA-512",
    sasl_plain_username='9433_reader',
    sasl_plain_password='eUIpgWu0PWTJaTrjhjQD3.hoyhntiK',
    ssl_context=context,
)


async def consume() -> None:
    """Читает последнее сообщение из кафки и записывает его в бд"""
    await consumer.start()
    try:
        async for msg in consumer:
            my_bytes_value = msg.value
            my_json = my_bytes_value.decode('utf8').replace("'", '"')
            data = json.loads(my_json)
            date_time = str(data['moment'].replace('T', " ").split(".")[0])
            s = json.dumps(data, indent=4, sort_keys=True)
            add_data_in_db(date_time, s)
    finally:
        await consumer.stop()


@app.on_event("startup")
async def startup() -> None:
    """Ставит задачу на пожирание сообщений из кафки при запуске app"""
    await pull_history(topic)
    loop.create_task(consume())


@app.on_event("shutdown")
async def shutdown() -> None:
    """Закрывает коннект с кафкой при остановке app"""
    await consumer.stop()


"/api/get_all_data/2023-02-18T18:17:31.749Z/2023-02-18T18:17:31.749Z/1h"
@app.get("/api/get_all_data/{start}/{end}/{interval}")
def get_all_data(start: str, end: str, interval: str, request: Request):
    """Тут отдаем исторические данные"""
    conn = psycopg2.connect(
        host='db',
        port=5432,
        database="postgres",
        user="postgres",
        password="postgres",
    )
    json_to_front = 400
    start_id = m_id = None
    start_date = start.replace("T", " ")[:16]
    finish_date = end.replace("T", " ")[:16]
    step = int(interval[:-1]) if interval.endswith("m") else int(interval[:-1]) * 60

    cur = conn.cursor()
    cur.execute(f"SELECT id from consumer_data where d_create::text like '{start_date}%'")
    satrt_id = cur.fetchall()
    if satrt_id and satrt_id[0] and satrt_id[0][0]:
        start_id = satrt_id[0][0]

    cur.execute(f"SELECT id from consumer_data where d_create::text like '{finish_date}%'")
    max_id = cur.fetchall()
    if max_id and max_id[0] and max_id[0][0]:
        m_id = max_id[0][0]
    if start_id and m_id:
        ids = tuple([i for i in range(start_id, m_id+1, step)])
        if len(ids) < 1500:
            cur.execute(f"SELECT d_create, data from consumer_data where id in {ids}")
            result = cur.fetchall()

            to_front = []
            for element in result:
                mapped = map_exauster_data({"moment": element[0], "data":element[1]})
                second_part = mapped['1']['У-171']
                second_part['moment'] = mapped['moment']
                to_front.append(second_part)

            json_to_front = json.dumps(to_front, indent=4, sort_keys=True)

    return {"request": json_to_front}


@app.get("/api/get_current_data")
def get_current_data():
    """Тут получаем актуальный последний из кафки и отдаем на фронт"""
    data = get_last_record_from_db()
    return map_exauster_data(data)


@app.websocket("/api/aglomachines")
async def websocket_endpoint(websocket: WebSocket) -> None:
    """Принимает хук от фронта и отдает ему жсон с последними данными из кафки"""
    await manager.connect(websocket)
    try:
        while True:
            await websocket.receive_text()
            data = get_last_record_from_db()
            resp = map_exauster_data(data)
            await manager.broadcast(resp)
    except WebSocketDisconnect:
        data = get_last_record_from_db()
        resp = map_exauster_data(data)
        manager.disconnect(websocket)
        await manager.broadcast(resp)
