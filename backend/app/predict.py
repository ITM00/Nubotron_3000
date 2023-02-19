import pandas as pd
import joblib
import json
import uvicorn
# from fastapi import FastAPI
from pydantic import BaseModel
from datetime import datetime, timedelta

# Model loading
# app = FastAPI()
model = joblib.load("./model.joblib")


class NextFailDate(BaseModel):
    """
    Input features validation for the ML model
    """
    hor_vibr_7: float
    ver_vibr_7: float
    hor_vibr_8: float
    ver_vibr_8: float
    av_hor_vibr_7: float
    av_ver_vibr_7: float
    av_hor_vibr_8: float
    av_ver_vibr_8: float
    sd_hor_vibr_7: float
    sd_ver_vibr_7: float
    sd_hor_vibr_8: float
    sd_ver_vibr_8: float


def predict(path: NextFailDate):
    """
    :param: input data from the post request
    :return: predicted date
    """
    data_kafka = pd.DataFrame()
    with open(path, 'r') as f:
        data_json = json.loads(f.read())[0]
        for i in data_json:
            data_i = pd.DataFrame(json.loads(i.replace("'",'"')),  index=[0])
            data_kafka = pd.concat([data_kafka, data_i], ignore_index=True)

    data_kafka['moment'] = pd.to_datetime(data_kafka['moment'])
    data_kafka['moment_new'] =  data_kafka['moment'].dt.date

    # Усреднённые данные
    data_hour = data_kafka.groupby(by=['moment_new']).mean(numeric_only=True).reset_index()

    exgausters = ['Эксгаустер №1','Эксгаустер №2','Эксгаустер №3','Эксгаустер №4','Эксгаустер №5','Эксгаустер №6']
    new_columns = ['moment', 'hor_vibr_7', 'ver_vibr_7', 'hor_vibr_8', 'ver_vibr_8']
    place_comment = {'SM_Exgauster\[0:6]': 'Горизонтал вибрация подшипника №7. Эксгаустер №3',
                    'SM_Exgauster\[0:7]': 'Вертикал вибрация подшипника №7. Эксгаустер №3',
                    'SM_Exgauster\[0:9]': 'Горизонтал вибрация подшипника №8. Эксгаустер №3',
                    'SM_Exgauster\[0:10]': 'Вертикал вибрация подшипника №8. Эксгаустер №3',
                    'SM_Exgauster\[0:18]': 'Горизонтал вибрация подшипника №7. Эксгаустер №4',
                    'SM_Exgauster\[0:19]': 'Вертикал вибрация подшипника №7. Эксгаустер №4',
                    'SM_Exgauster\[0:21]': 'Горизонтал вибрация подшипника №8. Эксгаустер №4',
                    'SM_Exgauster\[0:22]': 'Вертикал вибрация подшипника №8. Эксгаустер №4',
                    'SM_Exgauster\[2:6]': 'Горизонтал вибрация подшипника №7. Эксгаустер №1',
                    'SM_Exgauster\[2:7]': 'Вертикал вибрация подшипника №7. Эксгаустер №1',
                    'SM_Exgauster\[2:9]': 'Горизонтал вибрация подшипника №8. Эксгаустер №1',
                    'SM_Exgauster\[2:10]': 'Вертикал вибрация подшипника №8. Эксгаустер №1',
                    'SM_Exgauster\[2:18]': 'Горизонтал вибрация подшипника №7. Эксгаустер №2',
                    'SM_Exgauster\[2:19]': 'Вертикал вибрация подшипника №7. Эксгаустер №2',
                    'SM_Exgauster\[2:21]': 'Горизонтал вибрация подшипника №8. Эксгаустер №2',
                    'SM_Exgauster\[2:22]': 'Вертикал вибрация подшипника №8. Эксгаустер №2',
                    'SM_Exgauster\[3:6]': 'Горизонтал вибрация подшипника №7. Эксгаустер №5',
                    'SM_Exgauster\[3:7]': 'Вертикал вибрация подшипника №7. Эксгаустер №5',
                    'SM_Exgauster\[3:9]': 'Горизонтал вибрация подшипника №8. Эксгаустер №5',
                    'SM_Exgauster\[3:10]': 'Вертикал вибрация подшипника №8. Эксгаустер №5',
                    'SM_Exgauster\[3:18]': 'Горизонтал вибрация подшипника №7. Эксгаустер №6',
                    'SM_Exgauster\[3:19]': 'Вертикал вибрация подшипника №7. Эксгаустер №6',
                    'SM_Exgauster\[3:21]': 'Горизонтал вибрация подшипника №8. Эксгаустер №6',
                    'SM_Exgauster\[3:22]': 'Вертикал вибрация подшипника №8. Эксгаустер №6'}

    data = pd.DataFrame(columns=['exgauster']+new_columns)
    for exgauster in exgausters:
        data_n = pd.DataFrame(columns=new_columns)
        data_n['moment'] = data_hour['moment_new']
        # Добавления данных о работе подшипниклов
        for k,v in place_comment.items():
            if (v.find(f'Горизонтал вибрация подшипника №7. {exgauster}') != -1):
                data_n['hor_vibr_7'] = data_hour[k]
            elif (v.find(f'Вертикал вибрация подшипника №7. {exgauster}') != -1):
                data_n['ver_vibr_7'] = data_hour[k]
            elif (v.find(f'Горизонтал вибрация подшипника №8. {exgauster}') != -1):
                data_n['hor_vibr_8'] = data_hour[k]
            elif (v.find(f'Вертикал вибрация подшипника №8. {exgauster}') != -1):
                data_n['ver_vibr_8'] = data_hour[k]
        data_n.insert(0, 'exgauster', exgauster)
        data_n.sort_values(by='moment')
        data = pd.concat([data, data_n], ignore_index=True)

    data['exgauster'] = pd.to_numeric(data['exgauster'].str.extract(r"\b(\d+)\b")[0], errors="coerce")

    for col in data.drop(columns='moment').columns:
        if data[col].dtype == 'object':
            data[col] = data[col].astype('float')

    features = ['hor_vibr_7', 'ver_vibr_7', 'hor_vibr_8', 'ver_vibr_8']

    def av_sd_features(df, features, w):
        av_features = ['av_' + f for f in features]
        sd_features = ['sd_' + f for f in features]
        data_av_sd = pd.DataFrame()
        for ex in df['exgauster'].unique():
            data_new = df[df['exgauster'] == ex]
            av_data = data_new[features].rolling(w, min_periods=1).mean()
            av_data.columns = av_features
            sd_data = data_new[features].rolling(w, min_periods=1).std().fillna(0)
            sd_data.columns= sd_features
            data_new = pd.concat([data_new, av_data, sd_data], axis=1)
            data_av_sd = pd.concat([data_av_sd, data_new])
        return data_av_sd

    prediction = {}
    data_new = av_sd_features(data, features, 3)
    features_new = ['hor_vibr_7', 'ver_vibr_7', 'hor_vibr_8', 'ver_vibr_8', 'av_hor_vibr_7', 'av_ver_vibr_7',
                    'av_hor_vibr_8', 'av_ver_vibr_8', 'sd_hor_vibr_7', 'sd_ver_vibr_7', 'sd_hor_vibr_8', 'sd_ver_vibr_8']
    for ex in data_new['exgauster'].unique():
        data_ex = data_new[data_new['exgauster'] == ex]
        moment = data_ex['moment']
        X = data_ex[features_new]
        y_pred = model.predict(X).tolist()[0]
        prediction[ex] = moment.values[0] + timedelta(days = y_pred)
    return {
        "prediction": prediction
    }


# if __name__ == '__main__':
#     # Run server using given host and port
#     uvicorn.run(app, host='127.0.0.1', port=80)
