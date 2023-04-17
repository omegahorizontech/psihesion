# <root>/ui/local.Dockerfile
FROM node:18

WORKDIR /app/ui
COPY package.json ./

RUN npm install
CMD npm start