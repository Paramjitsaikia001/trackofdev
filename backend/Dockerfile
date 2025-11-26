# Use Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application files
COPY . .

# Expose port (default 8000, but can be overridden)
EXPOSE 8000

# Start the application
CMD ["node", "server.js"]

