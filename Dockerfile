FROM node:buster-slim
WORKDIR /usr/bot
COPY . /usr/bot/
RUN npm ci  --silent
CMD ["npm", "start"]