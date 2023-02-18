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


def get_last_record_from_db():
    conn = psycopg2.connect(
        host='db',
        port=5432,
        database="postgres",
        user="postgres",
        password="postgres",
    )
    cur = conn.cursor()
    cur.execute("SELECT json FROM consumer_data ORDER BY consumer_data.id DESC LIMIT 1")
    data = cur.fetchall()
    conn.close()
    cur.close()
    return data[0][0]
