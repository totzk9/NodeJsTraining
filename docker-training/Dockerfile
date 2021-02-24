FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

# expose your port
EXPOSE 8005

# command should be in the last part
CMD [ "node", "server.js" ]