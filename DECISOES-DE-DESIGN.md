# 🎮 DECISÕES DE DESIGN & ARQUITETURA — GARRANIME

Documento de registro das decisões criativas, técnicas e de interface para o site oficial do **1º Evento Geek de Garrafão do Norte: GARRANIME**.

---

## 1. Identidade Visual & Design Tokens

Baseado estritamente no `design_system_identidade_visual_garranime.md` e nos arquivos fornecidos em `arquivos- Garranime/`.

### 1.1 Paleta de Cores
* **Orange Shonen (Primária / Ação):** `#FF7A00` (`rgb(255, 122, 0)`)
* **Flame Orange (Secundária Ação):** `#E65100` (`rgb(230, 81, 0)`)
* **Deep Konoha Navy (Fundo Principal):** `#070B28` (`rgb(7, 11, 40)`)
* **Navy Surface (Superfície de Cards/Paineis):** `#0F173D` (`rgb(15, 23, 61)`)
* **Accent Border Blue (Bordas e Linhas de Contorno):** `#1E2C6A` (`rgb(30, 44, 106)`)
* **Pacman Yellow (Destaque Retrô / Badge / Novidade):** `#FFE600` (`rgb(255, 230, 0)`)
* **Retro Arcade Cyan / Ghost Blue (Acentos / Efeitos Neon):** `#00D2FF` (`rgb(0, 210, 255)`)
* **Pure White (Contraste e Textos):** `#FFFFFF` (`rgb(255, 255, 255)`)

### 1.2 Logotipo Principal
* **Arquivo:** `arquivos- Garranime/LOGO-GNIME.png`
* **Implementação:** Utilizado no Boot de console, no Header principal, na Title Screen ("PRESS START"), no rodapé e nas tags Open Graph / Twitter Card.

### 1.3 Tipografia
* **Títulos e Impacto (Display Shonen/Arcade):** `Bangers` / `Russo One`
* **Subtítulos, Status Gamer e Badges:** `Chakra Petch`
* **Corpo de Texto & UI de Alta Legibilidade:** `Inter` / `Poppins`

---

## 2. Mapeamento Menu de Jogo ↔ Seções Reais do Site

| Item no Menu de Jogo | Seção Real do Evento | Conteúdo & Mecânica |
| :--- | :--- | :--- |
| **MODO HISTÓRIA** | Cronograma / Programação | Linha do tempo com nós de fases, horários e atrações |
| **BATALHA / VERSUS** | Competições & Concursos | Cosplay (Adulto/Kids) + Torneios (Naruto, Free Fire, Clash) com split-screen diagonal VS |
| **TIME AZUL vs LARANJA** | Sistema de Equipes & Pulseiras | Batalha de pulseiras (250 Azuis vs 250 Laranjas), gincanas e sorteio final |
| **SELEÇÃO DE PERSONAGEM** | Atrações & Salas Temáticas | Karaokê, Cosplay, Games, Alimentação, Personagens Geek |
| **LOJA & INGRESSOS** | Venda de Ingressos & Lojas | Ingressos R$ 10 (antecipado) / R$ 15 (na hora), fluxo Pix + lojas parceiras |
| **MAPA / ARENA** | Localização & Como Chegar | Garrafão do Norte - PA (Escola Mário Brasil), mapa e rotas |
| **MANUAL / FAQ** | Dúvidas & Regras | Formato tutorial de RPG com acordeão |
| **OPÇÕES** | Configurações de Acessibilidade | Controle de áudio (SFX/BGM), redução de movimento, alto contraste |
| **CRÉDITOS** | Realização & Patrocinadores | Rolagem cinematográfica de agradecimentos e apoio comunitário |

---

## 3. Estratégia Mobile-First Excepcional (Destaque Máximo para Celular)

Como a grande maioria do público acessará o site a partir do Instagram/WhatsApp em smartphones:
1. **Dock Arcade Inferior (Bottom Bar):**
   * Barra de navegação inspirada em consoles portáteis (estilo Switch/PSP/Game Boy Advance SP), fixada na base da tela com botões táteis, badges de alerta e sons de clique.
2. **Title Screen Tátil ("PRESS TO START"):**
   * Gatilho tátil com feedback de vibração (`navigator.vibrate`) e síntese sonora Web Audio API enérgica.
3. **Seletor Rápido de Equipe (Azul vs Laranja):**
   * Comparador interativo touch-friendly das 500 pulseiras (250 Azuis vs 250 Laranjas) com cálculo em tempo real e CTA para WhatsApp.
4. **Bottom Sheet / Modal Drawer:**
   * Detalhes de ingressos, regras de cosplay e chave Pix abrem em gaveta deslizante inferior otimizada para o polegar.
5. **Chave Pix com 1-Toque (Copia e Cola):**
   * Botão direto com microinteração "Copiado!" + atalho para enviar comprovante via WhatsApp/Instagram.
6. **Performance Ultra-Otimizada:**
   * Texturas halftone servidas em WebP otimizado, sem travar a rolagem mesmo em redes móveis 4G.

---

## 4. Camadas de Efeitos e Ambientação Visual

1. **Backgrounds Halftone (Retícula de Mangá):**
   * Uso das texturas azul e laranja com vinhetas escuras radiais para contraste perfeito.
2. **Scanlines CRT Sutis:**
   * Grade retrô que evoca monitores e TVs de tubo de anime games dos anos 2000.
3. **Speed Lines de Mangá:**
   * Efeito radial acentuado no modo Versus e no botão de Start.
4. **Barras de Energia (HP/Chakra):**
   * Indicadores de progresso e estatísticas dos personagens e salas.

---

## 5. Áudio e Interatividade (Web Audio API)

* Sem dependência de arquivos de áudio externos pesados que poderiam falhar no mobile.
* Sintetizador via **Web Audio API** puro para efeitos sonoros nostálgicos:
  - `startSfx`: fanfarra de inicialização e poder.
  - `clickSfx`: bip curto estilo seleção de menu.
  - `confirmSfx`: som de confirmação de combo.
  - `versusSfx`: impacto de gongo/impacto de luta.
  - `coinSfx`: som de moeda arcade / 8-bit.
* **Mudo por padrão** até o usuário tocar em "PRESS START" ou ativar no botão flutuante de som.

---

## 6. Easter Eggs & Gamificação

1. **Código Konami (↑ ↑ ↓ ↓ ← → ← → B A):**
   * No teclado ou através de botões arcade virtuais no mobile: ativa o "Modo Super Shonen" com chuva de auras douradas e som secreto.
2. **Scouter de Nível de Poder ("Over 9000!"):**
   * Medidor dinâmico que sobe conforme o visitante explora o site e interage com as seções.
3. **Coletáveis de Esferas Geek:**
   * 4 itens escondidos no site que liberam uma badge comemorativa de "Fã Lendário".
