FROM node:18 AS build

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install -g pnpm

FROM build as test
RUN pnpm install
COPY . . 
# works locally, error in docker
#RUN pnpm run check
RUN pnpm run test

FROM build as prod
RUN pnpm install
COPY . . 
EXPOSE 5555
ENV HOST=0.0.0.0

CMD ["pnpm", "run", "dev", "--", "--host"]
