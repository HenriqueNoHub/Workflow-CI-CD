FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY src ./src
RUN npm run build

FROM node:22-alpine AS runtime

ENV NODE_ENV=production \
    PORT=3000

WORKDIR /app

COPY --from=build --chown=node:node /app/dist ./dist

USER node

EXPOSE 3000

CMD ["node", "dist/server.js"]