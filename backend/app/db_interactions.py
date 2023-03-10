import psycopg2


def add_data_in_db(date_time, s) -> None:
    conn = psycopg2.connect(
        host="db",
        port=5432,
        database="postgres",
        user="postgres",
        password="postgres",
    )
    cur = conn.cursor()
    cur.execute(
        f"INSERT INTO consumer_data (d_create, data) VALUES('{date_time}', '{s}')"
    )

    conn.commit()
    conn.close()
    cur.close()


def get_last_record_from_db() -> dict:
    conn = psycopg2.connect(
        host="db",
        port=5432,
        database="postgres",
        user="postgres",
        password="postgres",
    )
    cur = conn.cursor()
    cur.execute(
        "SELECT d_create, data FROM consumer_data ORDER BY consumer_data.id DESC LIMIT 1"
    )
    data = cur.fetchall()
    conn.close()
    cur.close()

    res = {}
    for element in data:
        res = {"moment": element[0], "data": element[1]}
    return res
