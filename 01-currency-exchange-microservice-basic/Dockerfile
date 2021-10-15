FROM node:16-alpine3.11 AS build

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:16-alpine3.11 AS production

EXPOSE 3100

COPY --from=build package*.json ./
COPY --from=build node_modules ./node_modules
COPY --from=build dist ./dist

RUN npm prune --production

ENTRYPOINT ["node", "dist/main.js"]