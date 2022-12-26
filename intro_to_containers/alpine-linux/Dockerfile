FROM alpine:3.10

RUN apk add --update nodejs npm

RUN addgroup -S node && adduser -S node -G node

USER node

RUN mkdir /home/node/code

WORKDIR /home/node/code

COPY --chown=node:node package-lock.json package.json ./

RUN npm ci

COPY --chown=node:node . .

EXPOSE 3000

CMD ["node", "index.js"]