FROM node:22-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN corepack yarn install

COPY . .

CMD corepack yarn drizzle-kit studio