# ✦ Claude Skills

Catálogo curado de skills para o [Claude Code](https://claude.com/claude-code), com explicações em português, exemplos práticos e instalação em um único comando.

**🌐 Site do catálogo:** https://samuelasantos.github.io/claude-skills/

Cada skill tem sua própria página no site, com resumo, link para baixar, funcionalidades, dicas e uso na prática.

---

## 📦 Instalação

As instruções abaixo valem para **todas** as skills do catálogo — basta trocar a URL do repositório e o nome da pasta (informados na página de cada skill).

### Instalação global (todos os projetos)

A skill fica disponível em qualquer projeto do seu usuário:

```bash
git clone <url-da-skill> ~/.claude/skills/<nome-da-skill>
```

> **Windows:** o `~` equivale a `%USERPROFILE%` — por exemplo,
> `git clone <url-da-skill> %USERPROFILE%\.claude\skills\<nome-da-skill>` (cmd)
> ou `git clone <url-da-skill> $env:USERPROFILE\.claude\skills\<nome-da-skill>` (PowerShell).

### Instalação apenas no projeto

A skill fica disponível somente no projeto atual (útil para skills específicas de um repositório ou para compartilhar com o time via versionamento). Execute na **raiz do projeto**:

```bash
git clone <url-da-skill> .claude/skills/<nome-da-skill>
```

Depois de instalar (em qualquer um dos modos), **reinicie o Claude Code** para a skill ser carregada.

### Atualizando uma skill

```bash
git -C ~/.claude/skills/<nome-da-skill> pull   # global
git -C .claude/skills/<nome-da-skill> pull     # projeto
```

---

## 🗂 Skills disponíveis

| Skill | O que faz | Página | Download |
|-------|-----------|--------|----------|
| **Prompt Improver** | Avalia a clareza dos seus prompts e, quando estão vagos, pesquisa o contexto do projeto e faz perguntas estruturadas antes de executar. | [📄 Ver página](https://samuelasantos.github.io/claude-skills/skills/prompt-improver.html) | [⬇ Repositório](https://github.com/severity1/claude-code-prompt-improver) |
| **Humanizer** | Remove sinais de escrita gerada por IA do seu texto. Detecta e corrige 33 padrões — vocabulário inflado, em-dashes, finais de chatbot e mais — tornando o resultado naturalmente humano. | [📄 Ver página](https://samuelasantos.github.io/claude-skills/skills/humanizer.html) | [⬇ Repositório](https://github.com/blader/humanizer) |

> Este catálogo cresce com o tempo — novas skills são adicionadas aqui e ganham uma página própria no site.

---

## 🤝 Sobre

Mantido por [@SamuelASantos](https://github.com/SamuelASantos). As skills catalogadas pertencem aos seus respectivos autores — cada página credita e aponta para o repositório original.
