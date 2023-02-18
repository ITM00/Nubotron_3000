FROM python

WORKDIR /app

COPY requirements.txt .

RUN apt-get update &&\
    apt-get upgrade -y &&\
    apt-get install -y libsnappy-dev &&\
    apt-get install -y python3-dev libpq-dev &&\
    pip install --upgrade pip &&\
    pip install --no-cache-dir -r requirements.txt

COPY . .