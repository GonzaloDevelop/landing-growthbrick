# ──────────── Build stage ────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npm run build
# Next.js with output: 'export' writes static HTML/CSS/JS to out/

# ──────────── Serve stage ────────────
FROM caddy:2-alpine AS runner

COPY --from=builder /app/out /srv
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
