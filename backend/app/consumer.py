from kafka import KafkaConsumer, TopicPartition
import json
import psycopg2
from datetime import datetime
from dateutil.relativedelta import relativedelta

topic = 'zsmk-9433-dev-01'

consumer1 = KafkaConsumer(
    topic,
    group_id='Nubotron_3000',
    bootstrap_servers='rc1a-b5e65f36lm3an1d5.mdb.yandexcloud.net:9091',
    security_protocol="SASL_SSL",
    sasl_mechanism="SCRAM-SHA-512",
    sasl_plain_username='9433_reader',
    sasl_plain_password='eUIpgWu0PWTJaTrjhjQD3.hoyhntiK',
    ssl_cafile="CA.crt",
)

consumer2 = KafkaConsumer(
    bootstrap_servers='rc1a-b5e65f36lm3an1d5.mdb.yandexcloud.net:9091',
    security_protocol="SASL_SSL",
    sasl_mechanism="SCRAM-SHA-512",
    sasl_plain_username='9433_reader',
    sasl_plain_password='eUIpgWu0PWTJaTrjhjQD3.hoyhntiK',
    ssl_cafile="CA.crt",
)

def add_data_in_db_for_month(json):
    conn = psycopg2.connect(
        host='localhost',
        port=5444,
        database="postgres",
        user="postgres",
        password="postgres",
    )

    cur = conn.cursor()
    cur.execute("INSERT INTO consumer_data_month (d_create, json) VALUES(current_timestamp, (%s))", (json,))

    conn.commit()
    conn.close()
    cur.close()

def add_data_in_db(json):
    conn = psycopg2.connect(
        host='localhost',
        port=5444,
        database="postgres",
        user="postgres",
        password="postgres",
    )

    cur = conn.cursor()
    cur.execute("INSERT INTO consumer_data (d_create, json) VALUES(current_timestamp, (%s))", (json,))

    conn.commit()
    conn.close()
    cur.close()

print("ready")

# python3 consumer.py
for msg in consumer1:
    my_bytes_value = msg.value
    my_json = my_bytes_value.decode('utf8').replace("'", '"')
    data = json.loads(my_json)
    s = json.dumps(data, indent=4, sort_keys=True)
    add_data_in_db(s)

# Что бы извлечь данные за месяц
# month_ago = (datetime.now() - relativedelta(months=1)).timestamp()
# topic_partition = TopicPartition(topic, 0)
# assigned_topic = [topic_partition]
# consumer2.assign(assigned_topic)

# partitions = consumer2.assignment()
# partition_to_timestamp = {part: int(month_ago * 1000) for part in partitions}
# end_offsets = consumer2.end_offsets(list(partition_to_timestamp.keys()))

# mapping = consumer2.offsets_for_times(partition_to_timestamp)
# for partition, ts in mapping.items():
#     end_offset = end_offsets.get(partition)
#     consumer2.seek(partition, ts[0])
#     for msg in consumer2:
#         my_bytes_value = msg.value
#         my_json = my_bytes_value.decode('utf8').replace("'", '"')
#         data = json.loads(my_json)
#         s = json.dumps(data, indent=4, sort_keys=True)
#         add_data_in_db_for_month(s)
#         if msg.offset == end_offset - 1:
#             consumer2.close()
#             break
