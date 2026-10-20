# Workflow CI/CD

Projeto básico de backend Node.js para demonstrar integração e entrega contínuas
com GitHub Actions. A API oferece um endpoint de saúde e conta com comandos para
lint, testes e build.

## Requisitos

- Node.js 20.19 ou superior
- npm

## Executar localmente

```bash
npm ci
npm run dev
```

A API inicia em `http://localhost:3000`. Defina a variável de ambiente `PORT`
para escolher outra porta.

## Comandos

```bash
npm run lint   # verifica o código com ESLint
npm test       # executa os testes com o test runner nativo do Node.js
npm run build  # gera dist/server.js
npm start      # inicia a versão compilada (após o build)
```

## CI/CD no GitHub Actions

O workflow em `.github/workflows/ci-cd.yml` executa lint, testes e build em
pull requests e em pushes para `main`.

O workflow `.github/workflows/publish-ghcr.yml` constrói e publica uma única
imagem Docker no GitHub Container Registry (GHCR) em pushes para `main` ou em
execução manual. Ele autentica com o `GITHUB_TOKEN` e publica a tag `latest`.

Para baixar a imagem:

```bash
docker pull ghcr.io/<seu-usuario>/workflow-ci-cd:latest
```
