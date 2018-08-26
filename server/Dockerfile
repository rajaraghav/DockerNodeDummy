# This would use existing docker image.
FROM node:alpine

#Download dependency
WORKDIR /usr/app
COPY ./ ./
RUN npm install

CMD [ "npm","start" ]