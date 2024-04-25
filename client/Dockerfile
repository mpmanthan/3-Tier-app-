FROM node
WORKDIR /app
COPY . .
RUN npm install  
COPY package.json .
COPY package-lock.json .
COPY .env.sample .env.local
EXPOSE 3000
CMD ["npm", "start"]
