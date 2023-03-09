FROM node:19-slim as dev
RUN  apt-get update -y && apt-get upgrade -y && \
      apt-get install -y git apt-transport-https ca-certificates curl gnupg lsb-release && \
      # Install Pnpm
      npm i -g -f pnpm && \
      # Clean apt-cache
      apt-get clean

