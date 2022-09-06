FROM node:18-alpine as base

RUN mkdir /src
WORKDIR /src
COPY package*.json /
EXPOSE 4200


FROM base as dev
RUN npm install -g @angular/cli && npm install 
COPY . .
