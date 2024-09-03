FROM node:21-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 3000

ENV DOCKER_ENV=true
ENV APP_ENV='dev'
