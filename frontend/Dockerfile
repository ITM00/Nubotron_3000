FROM node:19

WORKDIR /frontend

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn run build