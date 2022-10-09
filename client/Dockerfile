#basic image
FROM node:alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package*.json yarn.lock ./

RUN yarn install
COPY . .
# RUN npm run build

EXPOSE 3000
CMD ["npm","run","dev"]