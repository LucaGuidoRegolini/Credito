FROM node:alpine

WORKDIR /usr/app/api

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 2000

CMD ["npm", "start"]