# Uses 14 version of node because 16 produced an "allocate virtual memory" issue
FROM node:14-alpine3.11 AS build

COPY package*.json ./
RUN npm ci
COPY . .
ENV CURRENCY_EXCHANGE_SERVICE_HOST='http://currency-exchange:3000'
RUN npm run build

FROM node:14-alpine3.11 AS production

COPY --from=build package*.json ./
COPY --from=build node_modules ./node_modules
COPY --from=build dist ./dist

RUN npm prune --production

EXPOSE 3100

ENTRYPOINT ["node", "dist/main.js"]