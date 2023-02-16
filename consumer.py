from kafka import KafkaConsumer
import json

consumer = KafkaConsumer(
    'zsmk-9433-dev-01',
    group_id='Nubotron_3000',
    bootstrap_servers='rc1a-b5e65f36lm3an1d5.mdb.yandexcloud.net:9091',
    security_protocol="SASL_SSL",
    sasl_mechanism="SCRAM-SHA-512",
    sasl_plain_username='9433_reader',
    sasl_plain_password='eUIpgWu0PWTJaTrjhjQD3.hoyhntiK',
    ssl_cafile="CA.crt",
)

print("ready")

for msg in consumer:
    value = msg.value
    my_json = value.decode('utf8').replace("'", '"')

    data = json.loads(my_json)
    s = json.dumps(data, indent=4, sort_keys=True)
    print(s)
    # with open('data.txt', 'w') as outfile:
    #     json.dump(data, outfile, indent=4, sort_keys=True)