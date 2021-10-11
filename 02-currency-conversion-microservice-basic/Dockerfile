FROM node:16-alpine3.11

WORKDIR /app
COPY package*.json /app
RUN npm ci
EXPOSE 3100
COPY . /app
ENV CURRENCY_EXCHANGE_URI="http://currency-exchange:3000"
ENTRYPOINT ["node", "src/index.js"]