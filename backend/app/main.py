from fastapi import FastAPI, Request, WebSocket
import json
import asyncio
import psycopg2
from aiokafka import AIOKafkaConsumer
from aiokafka.helpers import create_ssl_context
from .db_interactions import add_data_in_db, get_last_record_from_db
from .mapper import map_exauster_data
from .pull_history import pull_history


app = FastAPI()


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


"/api/get_all_data/2023-02-18T18:17:31.749Z&2023-02-18T18:17:31.749Z&1h"
@app.get("/api/get_all_data/{start}{end}{interval}")
def get_all_data(start: str, end: str, interval: str, request: Request) -> dict[str, float]:
    """Тут отдаем исторические данные"""
    conn = psycopg2.connect(
        host='db',
        port=5432,
        database="postgres",
        user="postgres",
        password="postgres",
    )
    start_date = start.replace("T", " ")[:16]
    finish_date = end.replace("T", " ")[:16]
    step = int(interval) if interval.endswith("m") else int(interval) * 60
    cur = conn.cursor()
    cur.execute(f"SELECT id from consumer_data where d_create::text like {start_date}")
    satrt_id = cur.fetchall()[0][0]
    cur.execute(f"SELECT id from consumer_data where d_create::text like {finish_date}")
    max_id = cur.fetchall()[0][0]
    ids = [range(satrt_id, max_id+1, step)]
    cur.execute(f"SELECT data from consumer_data where id in {ids}")
    result = cur.fetchall()[0]
    # TODO подключить парсер для фронта
    return {"request": 200}


@app.get("/api/get_current_data")
def get_current_data():
    """Тут получаем актуальный последний из кафки и отдаем на фронт"""
    data = get_last_record_from_db()
    return map_exauster_data(data)
@app.get("/api/aglomachines")
async def websocket_endpoint(websocket: WebSocket) -> None:
    """Принимает хук от фронта и отдает ему жсон с последними данными из кафки"""
    await websocket.accept()
    while True:
        try:
            # Send message to the client
            data = get_last_record_from_db()
            resp = map_exauster_data(data)
            await websocket.send_json(resp)
        except Exception as e:
            print('error:', e)
            break
