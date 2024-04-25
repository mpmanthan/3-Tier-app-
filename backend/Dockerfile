FROM node
WORKDIR /app
COPY . .
RUN npm i
COPY package.json .
COPY package-lock.json .
COPY .env.sample .env
EXPOSE 5000
CMD ["npm", "start"]
