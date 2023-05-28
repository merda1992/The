FROM node:20-alpine AS builder
WORKDIR /app
EXPOSE 3000
COPY package*.json ./
RUN apk add --update python3 make g++\ && rm -rf /var/cache/apk/*
RUN npm install
COPY . .
CMD ["npm", "run", "start"]
RUN npm run build

# FROM nginx:1.17.1-alpine
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY --from=builder /usr/src/dist/front /usr/share/nginx/html