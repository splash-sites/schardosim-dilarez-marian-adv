# Schardosim, Dilarez e Marian — site institucional

Site institucional do escritório **Schardosim e Dilarez e Marian Advogados Associados**,
atuação exclusiva em **Direito Previdenciário**, sede em Gravataí/RS (fundado em 2004).

## Objetivo

Captar contato de potenciais clientes (pessoas físicas — em especial idosos e pessoas com
problema de saúde lidando com o INSS) via **WhatsApp**, e **ranquear bem no Google** para
buscas locais de previdenciário. SEO é a prioridade número 1 do projeto.

## Stack

- **Astro 5** — saída estática (SSG), sem adapter.
- **Tailwind CSS 4** via `@tailwindcss/vite` + tokens em `src/styles/global.css`.
- **Content Collections** (`src/content/`) para áreas de atuação e blog (Markdown no repo).
- **@astrojs/sitemap** e **@astrojs/rss**.
- Deploy: **Vercel** (detecção automática de projeto Astro estático).
- Idioma: **pt-BR** apenas.

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # gera dist/
npm run preview   # serve dist/ localmente
```

## Estrutura

```
src/
  consts.ts            Configuração central: SITE, CONTACT, SOCIAL, TEAM, NAV. Fonte única de verdade.
  content.config.ts    Schemas das collections `areas` e `blog`.
  content/
    areas/*.md          Uma landing page de SEO por serviço previdenciário (/areas/<slug>).
    blog/*.md            Posts (/blog/<slug>).
  layouts/
    BaseLayout.astro     Casca: <head> SEO + Header + <slot/> + Footer + JSON-LD.
  components/
    BaseHead.astro       <title>, meta description, canonical, Open Graph, Twitter.
    JsonLd.astro          Injeta um ou mais objetos JSON-LD (schema.org).
    Header.astro          Cabeçalho fixo + navegação + botão WhatsApp.
    Footer.astro          Rodapé com NAP + links + aviso OAB.
    CtaBand.astro         Faixa de chamada para WhatsApp (reutilizável no fim das páginas).
    WhatsappButton.astro  Botão/atalho para wa.me com texto pré-preenchido.
    HexMark.astro         Símbolo da marca (hexágono/escudo) em SVG inline.
    Breadcrumbs.astro     Trilha + BreadcrumbList JSON-LD.
    Prose.astro           Wrapper de tipografia para conteúdo vindo de Markdown.
  pages/
    index.astro                    Home
    sobre.astro                    O Escritório
    equipe.astro                   Equipe
    contato.astro                  Contato (mapa é placeholder — ver "Pendências")
    politica-de-privacidade.astro
    404.astro
    areas/index.astro              Índice das áreas de atuação
    areas/[slug].astro             Página de cada área (getStaticPaths a partir da collection)
    blog/index.astro
    blog/[slug].astro
    rss.xml.js                     Feed do blog
public/
  robots.txt          Aponta para o sitemap.
  favicon.svg         Símbolo da marca.
```

## Sistema de design

Define-se em `src/styles/global.css` (tokens em `:root`). Resumo:

- **Fontes**: títulos e rótulos em **Jost** (geométrica, aproximação livre da Arboria Book do
  manual de marca); corpo em **Source Sans 3**, base **18px** para legibilidade do público idoso.
  Carregadas via `<link>` do Google Fonts em `BaseHead`.
- **Cores**: greige `--paper #F7F5F0`, tinta `--ink #23282A`, petróleo `--teal #144E52`
  (cor do letreiro físico da recepção), ouro fosco `--gold #9C7A3C`, fios `--rule #D8D3C6`.
- **Tratamento**: editorial, alinhado à esquerda, listas separadas por fio dourado fino
  (nada de grade de cards com ícone em quadradinho), cantos de **3px**, sem faixas de fundo
  alternadas. Uma única faixa petróleo para o CTA final.
- **Acessibilidade**: contraste alto, alvos de toque ≥ 48px, foco visível, linguagem simples,
  botão de WhatsApp sempre visível.

## Conteúdo e SEO

- Cada arquivo em `src/content/areas/` é uma landing page com `title`, `description`
  (meta description, obrigatória, ~150–160 caracteres) e `keyword` (palavra-chave-alvo,
  só documental). O corpo em Markdown usa `##`/`###` com termos que as pessoas realmente
  buscam ("INSS negou o auxílio", "melhor momento para se aposentar", "documentos para a
  aposentadoria").
- `BaseHead` cuida de `<title>` (padrão: `<página> — <SITE.shortName>`), meta description,
  canonical (a partir de `Astro.site` + pathname), Open Graph e Twitter Card.
- JSON-LD:
  - `LegalService` (com `areaServed`, `openingHoursSpecification`, `geo`, telefone, e-mail) —
    injetado em todas as páginas pelo `BaseLayout`.
  - `BreadcrumbList` — nas páginas internas via `Breadcrumbs`.
  - `FAQPage` — nas páginas de área que tiverem seção de perguntas frequentes.
  - `BlogPosting` — nos posts.
- NAP (nome, endereço, telefone) **idêntico** em todo o site — sempre a partir de `CONTACT`
  em `consts.ts`. Fora do site: Google Meu Negócio precisa do mesmo NAP.
- `sitemap-index.xml` gerado no build; `robots.txt` aponta para ele.
- Performance é fator de ranqueamento: sem JS desnecessário, imagens via `<Image>` do Astro
  quando existirem, fontes com `display=swap`. Meta: Core Web Vitals no verde no lançamento.

## Restrições da OAB (Provimento 205/2021) — obrigatórias

- **Nunca** exibir preços, honorários ou formas de pagamento.
- **Nunca** prometer resultado ("ganhe seu benefício", "aposente-se já", "sucesso garantido").
- Depoimentos: apenas com sigilo — nome reduzido/inicial, sem foto. Os do site vêm das
  avaliações públicas do Google.
- Tom informativo, sem mercantilização e sem captação de clientela. O rodapé carrega o aviso.
- O texto final de cada página deve ser revisado por uma das advogadas antes de publicar.

## Dados de referência (fonte: cliente)

- Endereço: **Rua Coronel Sarmento, 1560, sala 01 — Centro, Gravataí/RS, CEP 94010-030**
- WhatsApp: **(51) 99644-2529** · Telefone: **(51) 3490-5957**
- E-mail: **contato@sdm-advprev.com.br**
- Instagram: **@sdm.adv** · Facebook: página "Schardosim, Dilarez e Marian Advogados Associados"
- Google Meu Negócio: 5,0 (8 avaliações). Coordenadas: lat **-29.9412034**, lng **-50.9927893**
- Atendimento: seg–qui 9h–12h e 13h–17h; sex 9h–12h (WhatsApp na sexta até 16h)
- Sócia confirmada: **Terezinha Pereira Schardosim Garcia — OAB/RS 60.163**, especialista em
  Direito Previdenciário, pós-graduação na área, 20+ anos.

## Pendências (a repopular antes do lançamento)

- **Imagens**: nenhuma imagem é usada no código no momento (decisão do cliente). Slots de
  foto ficam como blocos neutros com legenda; a cliente vai fornecer o material depois.
  Ao adicionar, usar `<Image>` do Astro em `src/assets/` e `alt` descritivo.
- **Sócias Dilarez e Marian**: nome completo, nº OAB, formação e bio — hoje em `TEAM` de
  `consts.ts` como placeholder marcado `fictitious: true`.
- **Domínio final** (provável `sdm-advprev.com.br`): trocar `SITE.url` em `consts.ts` e
  confirmar no `astro.config.mjs`.
- **CNPJ** do escritório (rodapé) e texto de **Visão** do escritório.
- **Logotipo oficial** em vetor (hoje há uma recriação aproximada em `HexMark.astro`).
- **Política de Privacidade**: texto redigido por uma advogada. A seção "Cookies e conteúdo
  de terceiros" já descreve o mapa; revisar juridicamente.
- **Analytics**: sugerido Plausible/Umami (leve, sem banner de cookie). Não incluído ainda.
  Se entrar algo com cookie, ligar ao consentimento (ver abaixo).

## Consentimento de cookies e mapa (LGPD)

- `CookieConsent.astro` (injetado no `BaseLayout`): banner fixo com Aceitar/Recusar.
  Grava só a escolha em `localStorage['sdm-consent']` (`accepted`/`rejected`) — nenhum
  cookie de terceiros antes do aceite. Ao aceitar, dispara `sdm:consent-accepted` e põe
  `data-consent` no `<html>`. Link "Configurações de cookies" no rodapé
  (`[data-consent-reset]`) reabre o banner.
- `ContactMap.astro` (usado em `contato.astro`): mostra um placeholder com botão
  "Carregar o mapa". O `<iframe>` do Google Maps (`?q=<lat>,<lng>&output=embed`, sem
  chave de API) só é criado quando: (a) há consentimento salvo, (b) chega o evento de
  aceite, ou (c) o visitante clica em "Carregar o mapa" (consentimento pontual). Fonte do
  ponto: `CONTACT.geo` em `consts.ts`.
- Qualquer novo embed de terceiro deve seguir o mesmo padrão (placeholder + carregar no
  consentimento), nunca no `onload`.

## Convenções

- Toda informação de contato/negócio vem de `src/consts.ts` — não repetir literais pelo código.
- Componentes Astro puros; só adicionar ilha de framework se houver interação real.
- Slugs de área em português com hífens: `/areas/auxilio-por-incapacidade-temporaria`.
- Commits: mensagens em português, curtas e no imperativo.
