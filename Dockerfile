# FROM node:17-alpine
FROM node:16-alpine

RUN apk update

WORKDIR /usr/src/rybble

COPY package*.json ./

RUN npm install

COPY ./ ./

EXPOSE 3000

CMD ["npm", "run", "dev"]