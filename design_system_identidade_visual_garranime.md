# ⛩️ GARRANIME — Design System & Identidade Visual Web

Guia de estilo, documentação de tokens e especificação de componentes para o desenvolvimento do site oficial do **1º Evento Geek de Garrafão do Norte: GARRANIME**.

---

## 1. Visão Geral & Brand Essence

* **Nome do Evento:** GARRANIME
* **Edição / Posicionamento:** 1º Evento Geek de Garrafão do Norte (PA)
* **Público-Alvo:** Comunidade fã de animes, mangás, games clássicos e retrô, cosplayers, entusiastas de cultura pop japonesa e colecionadores.
* **Personalidade Visual:** 
  * Enérgica, jovem, impactante e nostálgica (estilo *Shonen* / mangá clássico).
  * Elementos visuais marcantes: textura de retícula/meio-tom (*halftone* / pop art), bordas angulares, sombras duras (*cel-shading*) e paleta vibrante de alto contraste (Laranja Naruto & Azul Escuro/Marinho).

---

## 2. Paleta de Cores (Color Tokens)

### 2.1 Cores Primárias (Identidade Central)
| Papel | Nome | HEX | RGB | Tailwind Class Sugerida |
| :--- | :--- | :--- | :--- | :--- |
| **Primária / Ação** | Orange Shonen | `#FF7A00` | `rgb(255, 122, 0)` | `bg-amber-500` / `bg-[#FF7A00]` |
| **Primária Secundária** | Flame Orange | `#E65100` | `rgb(230, 81, 0)` | `bg-orange-700` / `bg-[#E65100]` |
| **Base / Fundo Escuro** | Deep Konoha Navy | `#070B28` | `rgb(7, 11, 40)` | `bg-[#070B28]` |
| **Contraste / Linhas** | Pure White | `#FFFFFF` | `rgb(255, 255, 255)` | `bg-white` |

### 2.2 Cores Secundárias e Acentos Geek
| Papel | Nome | HEX | Uso Recomendado |
| :--- | :--- | :--- | :--- |
| **Destaque Retrô** | Pacman Yellow | `#FFE600` | Ícones de destaque, badges, tags promocionais e "NOVIDADE" |
| **Ghost Blue** | Retro Arcade Cyan | `#00D2FF` | Fantasminhas, links secundários, brilhos neon sutis |
| **Card / Surface Dark**| Navy Surface | `#0F173D` | Background de cards, modais e containers |
| **Card Border** | Accent Border Blue | `#1E2C6A` | Bordas de blocos escuros e divisores sutis |

---

## 3. Tipografia

### 3.1 Fontes Recomendadas (Google Fonts)
* **Títulos & Display (Impacto Mangá / Gamer):**
  * Opção 1 (Primária): **`Bangers`** ou **`Black Han Sans`** (impacto denso, angular e cartoon/shonen).
  * Opção 2 (Gamer / Futurista Angular): **`Russo One`** ou **`Teko`**.
* **Subtítulos & Tags:**
  * **`Chakra Petch`** ou **`Oswald`** (para labels como "SALA CONFIRMADA!", "LOJA CONFIRMADA!").
* **Corpo de Texto & UI:**
  * **`Inter`** ou **`Poppins`** (alta legibilidade em telas móveis para descrições, regras de sorteio e localização).

### 3.2 Escala Tipográfica Sugerida
* **Hero Display:** `text-5xl` até `text-7xl` (`font-black`, `uppercase`, `tracking-wider`)
* **Section Title (H2):** `text-3xl` até `text-4xl` (`font-extrabold`, `uppercase`)
* **Card Title (H3):** `text-xl` até `text-2xl` (`font-bold`)
* **Body / Parágrafos:** `text-base` (`font-normal`, `leading-relaxed`)
* **Badges / Meta:** `text-xs` até `text-sm` (`font-bold`, `uppercase`)

---

## 4. Elementos Visuais & Estilo Gráfico

1. **Halftone Pattern (Retículas de Mangá):**
   * Usar as texturas fornecidas (`Background azul.jpg` e `Background laranja.jpg`) como fundos de seções alternadas.
   * Em CSS: aplicar máscara radial ou gradiente suave para escurecer as bordas e manter a legibilidade dos textos centrais.
2. **Molduras & Bordas:**
   * Bordas grossas e contrastantes: `border-2` ou `border-4` nas cores `#FF7A00` ou `#00D2FF`.
   * Cantos retos ou com chanfro geométrico estilo anime/cyberpunk (`clip-path: polygon(...)`).
3. **Sombras Duras (Neobrutalismo Geek):**
   * Em vez de sombras difusas e suaves, usar sombras duras sólidas:
     ```css
     box-shadow: 4px 4px 0px #070B28; /* ou 6px 6px 0px #FF7A00 */
     ```
4. **Ícones & Stickers de Apoio:**
   * Elementos estilo pixel art de arcades dos anos 80 (Pac-Man, fantasminhas, moedas, corações de 8-bits).
   * Emojis temáticos nos botões: 🍜, 🎮, 🎤, 🎟️, 📍.

---

## 5. Arquitetura de Informação do Site (One-Page Estruturada)

O site deve ser preferencialmente uma Landing Page moderna, rápida, mobile-first e focada em conversão/engajamento:

1. **Header / Navbar:**
   * Logotipo GARRANIME à esquerda.
   * Menu: *Sobre*, *Atrações*, *Lojas & Estandes*, *Localização*, *Ingressos / Sorteios*.
   * CTA Button: "Garantir Ingresso" ou "Ver no Instagram".
2. **Hero Section (Impacto Imediato):**
   * Background laranja reticulado.
   * Título principal com a logo estilizada.
   * Destaque com data e local: **22 de Novembro** | **Garrafão do Norte - PA**.
   * Countdown timer interativo (Contagem regressiva até o dia do evento).
   * Botões de Ação Duplos: `[Comprar / Garantir Ingresso]` e `[Acompanhar Novidades]`.
3. **Destaques & Salas Temáticas (Grid de Cards):**
   * Sala de Karaokê 🎤.
   * Concurso Cosplay 🎭.
   * Torneio de Games / Card Games 🃏.
   * Praça de Alimentação Geek & Lanchonetes 🍔.
4. **Lojas & Parceiros Confirmados (Carrossel ou Grid):**
   * Cards com bordas duplas contendo:
     * *Bankai Studio*
     * *Pixangaa*
     * *Botinha Store*
     * *Makako Cards & Games*
     * *Otaku's Mix*
   * Link direto para o perfil de cada loja participante.
5. **Sorteios & Promoções:**
   * Banner em destaque ("3 Entradas Grátis!").
   * Passo a passo para participar da promoção oficial do Instagram.
6. **Localização & Informações Práticas:**
   * Nome do espaço (Ex: Escola Mário Brasil).
   * Horários de abertura e encerramento.
   * Mapa interativo (Google Maps incorporado) + link para traçar rota.
7. **Footer:**
   * Redes sociais (`@garranime`).
   * Créditos de realização e apoio comunitário.
   * Selo "1º Evento Geek de Garrafão do Norte".

---

## 6. Especificação dos Componentes de UI (Design Tokens em CSS/Tailwind)

### 6.1 Botões Primários (Shonen Action Button)
```html
<button class="bg-[#FF7A00] hover:bg-[#E65100] text-white font-extrabold uppercase px-6 py-3 rounded-none border-2 border-white shadow-[4px_4px_0px_#070B28] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
  Garantir Ingresso 🎟️
</button>
```

### 6.2 Card de Loja / Atração
```html
<div class="bg-[#0F173D] border-2 border-[#FF7A00] p-4 shadow-[6px_6px_0px_#FF7A00] text-center flex flex-col items-center">
  <span class="bg-[#FFE600] text-[#070B28] text-xs font-black uppercase px-2 py-0.5 mb-3 tracking-wide">
    LOJA CONFIRMADA!
  </span>
  <div class="w-full aspect-square bg-[#070B28] border border-blue-900 mb-3 flex items-center justify-center overflow-hidden">
    <!-- Imagem da loja / arte -->
  </div>
  <h4 class="text-white font-bold text-lg uppercase tracking-wider">Nome da Loja</h4>
</div>
```

### 6.3 Seção com Fundo Reticulado (Halftone)
```css
/* Utilizando a imagem 'Background azul.jpg' ou 'Background laranja.jpg' */
.section-halftone-orange {
  background-color: #FF7A00;
  background-image: url('/assets/Background laranja.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.section-halftone-blue {
  background-color: #070B28;
  background-image: url('/assets/Background azul.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

---

## 7. Recomendações Técnicas para o Desenvolvimento

* **Stack sugerida:** HTML5 + Tailwind CSS (ou Next.js / Astro para carregamento ultra-rápido no celular de quem acessa via 4G no Instagram).
* **Otimização de Imagens:** As texturas de fundo devem ser comprimidas em formato `.webp` para manter o site leve sem perder o efeito pontilhado da retícula.
* **Open Graph / Meta Tags:**
  * `og:title`: "GARRANIME — 1º Evento Geek de Garrafão do Norte"
  * `og:description`: "Karaokê, Lojas Geek, Torneios e muito mais no dia 22 de Novembro. Confira as atrações e participe!"
  * `og:image`: Versão em banner com a logo e data para renderizar perfeitamente ao compartilhar no WhatsApp e Stories.