from kafka import KafkaConsumer, TopicPartition
import json
import psycopg2
from datetime import datetime
from dateutil.relativedelta import relativedelta


"""" При первом заупске приложения подтягиваем данные из кафки за последний час"""


async def pull_history(topic):
    conn = psycopg2.connect(
        host="db",
        port=5432,
        database="postgres",
        user="postgres",
        password="postgres",
    )

    cur = conn.cursor()
    if conn:
        cur = conn.cursor()
        cur.execute("SELECT EXISTS(SELECT 1 FROM consumer_data WHERE id=12)")
        if cur.fetchall()[0][0]:
            # conn.close()
            cur.close()
            return False

    consumer_history = KafkaConsumer(
        bootstrap_servers='rc1a-b5e65f36lm3an1d5.mdb.yandexcloud.net:9091',
        security_protocol="SASL_SSL",
        sasl_mechanism="SCRAM-SHA-512",
        sasl_plain_username='9433_reader',
        sasl_plain_password='eUIpgWu0PWTJaTrjhjQD3.hoyhntiK',
        ssl_cafile="app/CA.crt",
        api_version=(0, 11, 5),
    )

    if consumer_history and conn:
        time_ago = (datetime.now() - relativedelta(hour=1)).timestamp()
        topic_partition = TopicPartition(topic, 0)
        assigned_topic = [topic_partition]
        consumer_history.assign(assigned_topic)

        partitions = consumer_history.assignment()
        partition_to_timestamp = {part: int(time_ago * 1000) for part in partitions}
        end_offsets = consumer_history.end_offsets(list(partition_to_timestamp.keys()))

        cur = conn.cursor()
        mapping = consumer_history.offsets_for_times(partition_to_timestamp)
        for partition, ts in mapping.items():
            end_offset = end_offsets.get(partition)
            consumer_history.seek(partition, ts[0])
            for msg in consumer_history:
                my_bytes_value = msg.value
                my_json = my_bytes_value.decode('utf8').replace("'", '"')
                data = json.loads(my_json)
                date_time = str(data['moment'].replace('T', " ").split(".")[0])
                s = json.dumps(data, indent=4, sort_keys=True)
                cur.execute(f"INSERT INTO consumer_data (d_create, data) VALUES('{date_time}', '{s}')")
                if msg.offset == end_offset - 1:
                    consumer_history.close()
                    break

            conn.commit()
            conn.close()
            cur.close()
