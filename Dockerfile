FROM node:21.0.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV NEXT_DISABLE_ESLINT=1
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]