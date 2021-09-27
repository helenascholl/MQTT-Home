FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --no-package-lock

COPY . .

RUN npm run lint && \
    npm run build

CMD [ "npm", "start" ]
