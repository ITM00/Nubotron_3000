FROM python

WORKDIR /usr/src/app

COPY requirements.txt .

RUN apt-get update &&\
    apt-get upgrade -y &&\
    apt-get install -y libsnappy-dev &&\
    apt-get install -y python3-dev libpq-dev &&\
    pip install --no-cache-dir -r requirements.txt

COPY . .

CMD [ "uvicorn", "app.main:app", "--reload", "--host", "0.0.0.0", "--reload-dir", "app" ]


#----------------------
# sudo docker build . -t my_app:0.1
# sudo docker run -it -v ${PWD}:/app -p 8080:8000 --name my_app -d my_app:0.1
# sudo docker exec -it  app bash

# DB
# sudo docker run --name my_db -p 5454:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres -e PGDATA=/var/lib/postgresql/data/pgdata -d -v '/home/itm/Projects/all_in_one/db/backup':/backup -v '/home/itm/Projects/all_in_one/db/db_data':/var/lib/postgresql/data postgres