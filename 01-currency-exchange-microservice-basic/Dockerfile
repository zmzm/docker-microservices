FROM alpine:3.11
ENV NODE_VERSION 16.10.0F

WORKDIR /app
COPY package.json /app
RUN npm ci
EXPOSE 5000
COPY . /app
ENTRYPOINT ["node", "src/index.js"]