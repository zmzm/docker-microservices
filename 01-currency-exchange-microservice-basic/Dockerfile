FROM node:16-alpine3.11

WORKDIR /app
COPY package*.json /app
RUN npm ci
EXPOSE 3000
COPY . /app
ENTRYPOINT ["node", "/app/src/index.js"]