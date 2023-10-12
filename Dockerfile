FROM node:alt-alpine
LABEL OWNER=siddhantprateek
WORKDIR /app
COPY package.json .
RUN npm install 
COPY . .
ENV PORT=${PORT}
EXPOSE 9000 
CMD ["npm", "start"]
