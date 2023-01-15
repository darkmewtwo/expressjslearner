FROM node:alpine

RUN apk add --no-cache bash

# Set the working directory
WORKDIR /expressjslearner

# Create the package.json file
RUN npm init -y

# Install express
RUN npm install express

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# EXPOSE 3000

# CMD ["npm", "start"]