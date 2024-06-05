# Use an official Node runtime as the base image
FROM node:14 as build

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Build the app
RUN npm run build

# Start a new stage from scratch
FROM node:14

# Install serve
RUN npm install -g serve

# Set the working directory in the container to /app
WORKDIR /app

# Copy the build directory from the previous stage
COPY --from=build /app/build .

# Make port 5000 available to the world outside this container
EXPOSE 4111

# Run the app when the container launches
CMD ["serve", "-s", ".", "-l", "4111"]
