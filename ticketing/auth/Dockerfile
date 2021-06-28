FROM node:alpine

ENV JWT_KEY=asdf \
    MONGO_URI=mongodb+srv://nqx:NQXisthe%2321@cluster0-4z3yb.mongodb.net/test?retryWrites=true&w=majority \
    NODE_ENV=test


WORKDIR /app
COPY package.json .
RUN npm install --only=prod
COPY . .

CMD ["npm", "start"]