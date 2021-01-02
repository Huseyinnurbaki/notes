# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

# Name the node stage "builder"
FROM node:13 AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN yarn install && yarn build

# nginx state for serving content
FROM nginx:alpine
# rm current nginx.conf (actual config includes the *.conf file under /etc/nginx/conf.d)
RUN rm /etc/nginx/conf.d/default.conf 
# copy apps conf file
COPY --from=builder ./app/app/.nginx.conf /etc/nginx/conf.d/nginx.conf
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
