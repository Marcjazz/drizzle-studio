FROM node:22-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN corepack yarn install

COPY . .

EXPOSE 4983

CMD corepack yarn drizzle-kit studio --host 0.0.0.0