# CORREÇÃO 1: Atualizado para Node 22 (LTS mais recente) para suportar Next 16 e Vite 7
FROM node:22-alpine

WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# CORREÇÃO 2: Copia a pasta do Prisma ANTES de instalar
# Isso garante que o 'prisma generate' encontre o schema durante o 'npm ci'
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