# 📁 Pasta de Logos dos Patrocinadores Oficiais — Garranime 2026

Coloque os arquivos de imagem das logos dos patrocinadores aqui dentro desta pasta (`public/assets/patrocinadores/`).

## 🖼️ Formatos Recomendados:
- **PNG** com fundo transparente (ideal) ou JPG / WEBP / SVG.
- Proporção: Retangular horizontal ou quadrada, resolução sugerida mínima de 400x400px ou 600x300px.

## 📝 Nomes Sugeridos para os Arquivos:
Você pode nomear os arquivos como preferir, por exemplo:
- `patrocinador-master.png`
- `apoio-cultural.png`
- `internet-oficial.png`
- `midia-print.png`

## ⚙️ Como ativar no site:
Abra o arquivo `src/content/eventData.ts` e altere o campo `logo` em `CONFIRMED_SPONSORS`:

```ts
{
  name: "Nome da Empresa",
  tier: "Cota Ouro",
  badge: "OFICIAL",
  logo: "/assets/patrocinadores/patrocinador-master.png", // <- coloque o nome do arquivo aqui
  initials: "PM",
  color: "#FF7A00",
}
```

*Dica: Caso você ainda não tenha o arquivo de imagem de algum patrocinador, deixe `logo: null` que o site exibirá automaticamente um emblema com borda neon e as iniciais!*
