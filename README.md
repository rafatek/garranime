# ⛩️ GARRANIME 2026 — 1º Evento Geek de Garrafão do Norte (PA)

Website oficial interativo do **GARRANIME**, construído com a identidade visual de um jogo de luta/aventura de anime (inspirado em clássicos de PS2/PS3 como Naruto Ultimate Ninja e Dragon Ball Budokai Tenkaichi), com **foco prioritário na experiência mobile de alto padrão**.

---

## 🚀 Tecnologias Utilizadas

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Estilização:** Tailwind CSS v4 + Design Tokens Customizados
- **Áudio & Efeitos:** Web Audio API (Síntese sonora procedural sem dependência de arquivos externos)
- **Feedback Háptico:** `navigator.vibrate` para dispositivos móveis
- **Animações & Gamificação:** Canvas Confetti, CSS Scanlines CRT, Shonen Hard Shadows
- **Ícones & UI:** Lucide React + SVGs temáticos otimizados

---

## 🎨 Identidade Visual & Design Tokens

Baseado estritamente no manual de marca do evento:
- **Orange Shonen (Ação Primária):** `#FF7A00`
- **Flame Orange:** `#E65100`
- **Deep Konoha Navy (Fundo Principal):** `#070B28`
- **Navy Surface (Cards/Modais):** `#0F173D`
- **Accent Border Blue:** `#1E2C6A`
- **Pacman Yellow (Destaques Retrô):** `#FFE600`
- **Retro Arcade Cyan (Acentos/Time Azul):** `#00D2FF`
- **Logo Principal:** `public/logo-gnime.png` (`LOGO-GNIME.png`)

---

## 📱 Destaques da Experiência Mobile

1. **Boot Screen Interativo:** Sequência de inicialização de console com verificação de sistemas, dicas do evento e botão "PULAR BOOT".
2. **Title Screen Tátil ("PRESS START"):** Logo com pulso de aura shonen, contagem regressiva em tempo real e desbloqueio do áudio retrô ao toque.
3. **Mobile Dock Arcade (Barra Inferior Fixa):** Navegação portátil inspirada no Nintendo Switch e PSP, com atalhos para Início, Versus, Equipes, Fases e Ingressos PIX.
4. **Batalha de Equipes (Time Azul vs Time Laranja):** Seletor interativo da disputa das 500 pulseiras (250 Azuis vs 250 Laranjas) e gincanas com sorteio exclusivo.
5. **Checkout Pix com 1-Toque:** Copia e cola instantâneo da chave Pix e redirecionamento direto para o WhatsApp oficial com a mensagem já redigida.
6. **Gamificação Móvel:**
   - Scouter de Nível de Poder dinâmico (com efeito "OVER 9000!").
   - D-Pad Arcade Virtual para digitar o Código Konami (`↑ ↑ ↓ ↓ ← → ← → B A`) diretamente na tela do celular.

---

## 🛠️ Como Rodar Localmente

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse: [http://localhost:3000](http://localhost:3000)

3. **Gerar Build de Produção:**
   ```bash
   npm run build
   npm start
   ```

---

## 🌐 Deploy na Vercel

O projeto está 100% configurado para deploy sem atrito na Vercel:

1. Suba o repositório para o GitHub ou GitLab.
2. Acesse [vercel.com](https://vercel.com) e importe o repositório.
3. O framework Next.js será detectado automaticamente.
4. Clique em **Deploy**.

---

## 📄 Documentação Complementar

- [DECISOES-DE-DESIGN.md](file:///c:/Users/Rafael%20Lima/Documents/Sites/Garranime/DECISOES-DE-DESIGN.md): Registro das decisões de arquitetura e interface.
- [PENDENCIAS.md](file:///c:/Users/Rafael%20Lima/Documents/Sites/Garranime/PENDENCIAS.md): Lista de dados a confirmar pela organização.
- [CREDITOS-IMAGENS.md](file:///c:/Users/Rafael%20Lima/Documents/Sites/Garranime/CREDITOS-IMAGENS.md): Atribuição e fontes dos assets.
