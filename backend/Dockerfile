FROM node:lts-alpine3.14 AS imagedb_backend_builder
WORKDIR /app
COPY package*.json ./
RUN npm install glob rimraf
RUN npm install --only=development
COPY . .
RUN npm run build


FROM node:lts-alpine3.14 as imagedb_backend
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .
COPY --from=imagedb_backend_builder /app/dist ./dist
EXPOSE 8080
CMD [ "npm","run", "start:prod" ]