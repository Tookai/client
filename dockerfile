FROM node:12.15.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
RUN apk --no-cache upgrade && apk --no-cache add alpine-sdk python2 libtool autoconf automake git

COPY . ./

RUN npm ci

ENV NODE_ENV production
RUN npm run build

FROM node:12.15.0-alpine
WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production
RUN npm install -g serve

COPY --from=build /app/build ./build/

EXPOSE 3000

CMD serve -s build -l 3000