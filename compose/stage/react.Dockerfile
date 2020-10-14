# pull official base image
FROM node:13.12.0-alpine
ENV https_proxy=http://10.46.0.210:3128
ENV http_proxy=http://10.46.0.210:3128

WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
# RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY /public/ ./public
COPY /src/ ./src

CMD ["yarn", "start"]