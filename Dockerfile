FROM node:12.16.3-alpine3.11

# Set working directory. It is apparentlya  good practice
WORKDIR /app

# Given that we need to install express instead of importing it from an image, we're getting everything
COPY . /app/

# And then build it here (WORKDIR)
RUN npm i && npm run build

# EXPOSE express port
EXPOSE 3000

# Start express application
CMD ["npm", "start"]
