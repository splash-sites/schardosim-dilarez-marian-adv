# Schardosim, Dilarez e Marian — site institucional

Site institucional (Astro + Vercel) do escritório **Schardosim e Dilarez e Marian Advogados
Associados**, atuação exclusiva em Direito Previdenciário, Gravataí/RS.

Documentação de projeto, estrutura, sistema de design, restrições da OAB e pendências:
ver **[CLAUDE.md](./CLAUDE.md)**.

## Rodar localmente

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # gera dist/
npm run preview
```

## Deploy

Vercel detecta o projeto Astro estático automaticamente. Antes do primeiro deploy:

1. Trocar o domínio em `astro.config.mjs` (`SITE_URL`) **e** em `src/consts.ts` (`SITE.url`).
2. Ajustar o `Sitemap:` em `public/robots.txt`.
3. Repopular as pendências listadas no fim do `CLAUDE.md`.
