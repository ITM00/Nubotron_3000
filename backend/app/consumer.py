import psycopg2


def add_data_in_db(date_time, s):
    conn = psycopg2.connect(
        host='db',
        port=5432,
        database="postgres",
        user="postgres",
        password="postgres",
    )
    cur = conn.cursor()
    cur.execute(f"INSERT INTO consumer_data (d_create, data) VALUES('{date_time}', '{s}')")

    conn.commit()
    conn.close()
    cur.close()
