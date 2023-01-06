FROM node:18 AS build

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install -g pnpm
RUN pnpm install

COPY . ./

RUN pnpm run build

EXPOSE 5555
ENV HOST=0.0.0.0

CMD ["pnpm", "run", "dev", "--", "--host"]
