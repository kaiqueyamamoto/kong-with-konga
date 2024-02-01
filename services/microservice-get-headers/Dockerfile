# Use uma imagem base do Node.js
FROM node:14

# # Crie um diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos necessários para o diretório de trabalho
# COPY package.json package-lock.json /app/

# Instale as dependências
RUN npm install

# Copie o restante do código para o diretório de trabalho
COPY . .

# Exponha a porta do aplicativo
EXPOSE 3000

# Comando para iniciar o aplicativo quando o contêiner for iniciado
CMD ["node", "main.js"]
