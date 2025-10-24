# Use an official Node runtime as the base image
FROM node:24

# Set the working directory in the Docker container
WORKDIR /usr/src/app
# WORKDIR /workspace

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Install the global nx
RUN npm add --global nx

# Copy the app source code to the working directory
COPY . .