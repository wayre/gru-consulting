FROM node:22-alpine

WORKDIR /app

# Desativa telemetria do Next.js no build e runtime
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Copia os arquivos de dependência
COPY package*.json ./

# Descomente se usar Prisma no projeto:
# COPY prisma ./prisma/

# Instala dependências
RUN npm ci

# Copia o resto do código
COPY . .

# Compila o Next.js
RUN npm run build

# Expõe a porta
EXPOSE 3000

# Comando para iniciar
CMD ["npm", "start"]