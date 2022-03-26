FROM node:lts-alpine3.14 AS imagedb_frontend_builder
ENV NODE_ENV production
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . ./
RUN npm run build


FROM nginx:1.21.0-alpine as imagedb_frontend
COPY --from=imagedb_frontend_builder /app/build/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]