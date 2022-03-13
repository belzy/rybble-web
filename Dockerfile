FROM node:17-alpine

RUN apk update

WORKDIR /usr/src/rybble

COPY client ./client
COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]