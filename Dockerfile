# Use an official Node.js runtime as the base image
FROM node:lts

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

# Define the command to run your application
CMD [ "npm", "run", "dev" ]
