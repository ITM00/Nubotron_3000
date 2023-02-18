
from fastapi import FastAPI, Request, WebSocket
import json
import psycopg2
import asyncio
from aiokafka import AIOKafkaConsumer
from aiokafka.helpers import create_ssl_context
from .consumer import add_data_in_db


app = FastAPI()

topic = 'zsmk-9433-dev-01'
loop = asyncio.get_event_loop()

context = create_ssl_context(
    cafile="CA.crt"
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


async def consume():
    await consumer.start()
    try:
        async for msg in consumer:
            my_bytes_value = msg.value
            my_json = my_bytes_value.decode('utf8').replace("'", '"')
            data = json.loads(my_json)
            s = json.dumps(data, indent=4, sort_keys=True)
            add_data_in_db(s)
    finally:
        await consumer.stop()


@app.on_event("startup")
async def startup_event():
    loop.create_task(consume())


@app.on_event("shutdown")
async def shutdown_event():
    await consumer.stop()


@app.get("/api/get_all_data")
def get_all_data(request: Request) -> dict[str, int]:
    """Тут отдаем исторические данные"""
    return {"request": 200}


@app.get("/api/get_current_data")
def get_current_data():
    """Тут получаем актуальный последний из кафки и отдаем на фронт"""
    conn = psycopg2.connect(
        host='db',
        port=5432,
        database="postgres",
        user="postgres",
        password="postgres",
    )
    cur = conn.cursor()
    cur.execute("SELECT id, json FROM consumer_data ORDER BY consumer_data.id DESC LIMIT 1")
    data = cur.fetchall()
    conn.close()
    print(data)
    cur.close()
    return {"data": data}
