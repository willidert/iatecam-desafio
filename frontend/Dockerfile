FROM node:14.17-alpine AS build
WORKDIR /app
COPY package-lock.json .
COPY package.json .
RUN npm install
COPY . /app
RUN npm run build
# EXPOSE 4200
# CMD ["npm", "run", "docker"]

FROM nginx:alpine
COPY ./default.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/frontend/ /usr/share/nginx/html
EXPOSE 80
