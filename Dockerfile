FROM node:18-alpine
COPY ./.output /app/
RUN npm install -g nuxi@3.4.3
WORKDIR /app
EXPOSE 3000

CMD ["nuxi", "start"]
