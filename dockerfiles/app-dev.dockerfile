FROM node:18

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

WORKDIR /app

RUN npm install -D --force

CMD npm run dev
