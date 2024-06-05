# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle the app source inside the Docker image 
# (Make sure you have a .dockerignore file to avoid copying node_modules)
COPY . .

# Make port 4009 available to the world outside this container
EXPOSE 3111

# Define the command to run the app
CMD [ "node", "index.js" ]