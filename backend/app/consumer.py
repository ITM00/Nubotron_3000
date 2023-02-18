import json
import psycopg2
from datetime import datetime
from dateutil.relativedelta import relativedelta



def add_data_in_db(json):
    conn = psycopg2.connect(
            host='db',
            port=5432,
            database="postgres",
            user="postgres",
            password="postgres",
    )
    cur = conn.cursor()
    cur.execute("INSERT INTO consumer_data (d_create, json) VALUES(current_timestamp, (%s))", (json,))

    conn.commit()
    conn.close()
    cur.close()
