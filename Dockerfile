FROM node:22-alpine

WORKDIR /app

# Copy dependency files first for better layer caching
COPY package.json yarn.lock ./

# Enable Corepack and prepare Yarn (optional: specify exact version for reproducibility)
RUN corepack enable && \
    corepack prepare yarn@stable --activate

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy configuration files
COPY drizzle.config.ts ./

EXPOSE 4983

CMD ["yarn", "drizzle-kit", "studio", "--host", "0.0.0.0"]
