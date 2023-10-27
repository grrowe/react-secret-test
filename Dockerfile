FROM node:lts

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm i

COPY . /app

COPY .git/ ./.git/

RUN ls -a .git/refs/heads

RUN echo -e "GIT_SHA=$(cat .git/refs/heads/main)"

EXPOSE 3000

CMD [ "npm", "start" ]