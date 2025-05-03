# Production-ready Dockerfile for Docusaurus
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --prefer-offline --no-audit
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/docusaurus.config.js ./docusaurus.config.js
COPY --from=builder /app/sidebars.js ./sidebars.js
COPY --from=builder /app/src ./src
COPY --from=builder /app/docs ./docs
COPY --from=builder /app/static ./static
EXPOSE 3000
CMD ["npx", "docusaurus", "serve", "--port", "3000", "--host", "0.0.0.0"]
