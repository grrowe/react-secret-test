FROM node:lts

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm i

COPY . /app

COPY .git/ ./.git/

EXPOSE 3000

CMD [ "npm", "start" ]