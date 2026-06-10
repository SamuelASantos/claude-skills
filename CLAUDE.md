# claude-skills — catálogo de skills com site estático

Repositório público que cataloga skills do Claude Code. O site (GitHub Pages, pasta `docs/`) é estático puro — HTML/CSS/JS sem build. URL: https://samuelasantos.github.io/claude-skills/

## Estrutura

- `README.md` — instruções genéricas de instalação + tabela de skills disponíveis
- `docs/index.html` — landing com busca e grid de cards (renderizados a partir de `SKILLS`)
- `docs/assets/skills-data.js` — array `SKILLS` que alimenta o index
- `docs/assets/style.css` — design system (tema dark; usar as variáveis CSS existentes)
- `docs/assets/site.js` — botões de copiar e rodapé (compartilhado)
- `docs/assets/img/<slug>.svg` — uma ilustração SVG por skill
- `docs/skills/<slug>.html` — uma página por skill

## Como adicionar uma nova skill

O usuário fornece **obrigatoriamente apenas o link para baixar** (comando `git clone` ou URL do repositório). Todo o resto deve ser preenchido estudando a skill — leia o README do repositório de origem (WebFetch ou `gh api`) e, se necessário, o `SKILL.md` dela.

Idioma de todo o conteúdo: **português (PT-BR)**.

1. **Estude a skill**: propósito, funcionamento, funcionalidades, requisitos, exemplos reais de uso, dicas (bypass, custos, limitações).
2. **Crie a página** `docs/skills/<slug>.html` copiando uma página existente (ex.: `prompt-improver.html`) como template. Mantenha a ordem das seções: **Nome → Resumo → Baixar e instalar (global + projeto, com botões copiar) → Funcionalidades → Dicas → Uso na prática**. Inclua badges de metadados (autor, versão mínima, licença etc.) e o link para o repositório original.
3. **Crie a ilustração** `docs/assets/img/<slug>.svg` — SVG autoral 800×450 que represente visualmente o que a skill faz, usando a paleta do site (`#0a0d14` fundo, coral `#ef8354`, violeta `#a78bfa`/`#c084fc`, ciano `#38d4f0`).
4. **Adicione a entrada** no array `SKILLS` em `docs/assets/skills-data.js` (slug, name, summary, tags, repo, added com a data atual).
5. **Adicione a linha** na tabela "Skills disponíveis" do `README.md`, com link para a página no site e para o repositório original.
6. **Commit e push** — o GitHub Pages publica automaticamente.

## Convenções

- Slug em kebab-case, igual ao nome da pasta sugerida na instalação (ex.: `prompt-improver`).
- Não adicionar frameworks, bundlers ou dependências — o site deve continuar funcionando abrindo o HTML direto.
- Os exemplos de "Uso na prática" devem ser concretos (comandos reais), não genéricos.
