FROM node:21-alpine

WORKDIR /app

COPY package*.json ./
COPY package.json.dockerprod ./package.json

RUN npm install --omit=dev
ENV NODE_ENV=production

COPY . .

EXPOSE 3000

COPY package.json.dockerprod ./package.json
COPY tsconfig.json.dockerprod ./tsconfig.json


ENV DOCKER_ENV=true
ENV APP_ENV='prod'

ENV BUILD_STANDALONE true
RUN npm run build
ENV BUILD_STANDALONE false

CMD ["npm","run","start"]