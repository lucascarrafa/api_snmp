
FROM node:10.16.3

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY /src .

COPY --chown=node:node . .

USER node

EXPOSE 5000

CMD [ "node", "src/server.js" ]
