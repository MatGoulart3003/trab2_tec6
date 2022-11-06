FROM node:alpine

WORKDIR /app
COPY ./trab2_tp6/package*.json ./
RUN npm install
COPY ./trab2_tp6 ./
EXPOSE 8087
CMD ["npm", "start"]
