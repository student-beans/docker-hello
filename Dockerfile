FROM node:10-slim

ENV \
  PORT=4000 \
  MSG=World

WORKDIR /app

COPY package.json package-lock.json index.js /app/

RUN npm ci

CMD ["node", "index.js"]
