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
pull requests e em pushes para `main`. Após um push bem-sucedido em `main`, a
etapa de CD pode acionar um deploy no Render:

1. Crie um serviço Web no Render conectado ao repositório.
2. Configure o comando de build como `npm ci && npm run build` e o comando de
   início como `npm start`.
3. Copie o Deploy Hook do serviço e cadastre-o no GitHub em
   **Settings > Secrets and variables > Actions**, com o nome
   `RENDER_DEPLOY_HOOK_URL`.

Sem esse secret, a validação de CI continua funcionando e a etapa de deploy
informa que foi ignorada. O serviço escuta na porta definida pela variável
`PORT`, conforme esperado por plataformas de hospedagem.
