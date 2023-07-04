# Use an appropriate base image for your microservice
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install --production

# Copy the source code
COPY ./likes-service/src ./likes-service/src

# Expose the port on which your microservice listens
EXPOSE 3000

# Start the microservice
CMD ["npm", "start"]
