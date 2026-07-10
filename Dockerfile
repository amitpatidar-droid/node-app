# Base Image
FROM node:22-alpine

# Working Directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy application
COPY . .

# Expose Port
EXPOSE 3000

# Start Application
CMD ["npm","start"]
