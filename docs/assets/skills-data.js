/* ===========================================================
   Catálogo de skills — fonte de dados do index.
   Para adicionar uma nova skill, acrescente um objeto ao array
   (veja CLAUDE.md na raiz do repositório para o processo completo).
   =========================================================== */

const SKILLS = [
  {
    slug: "prompt-improver",
    name: "Prompt Improver",
    summary:
      "Avalia a clareza dos seus prompts no Claude Code e, quando estão vagos, pesquisa o contexto do projeto e faz perguntas estruturadas antes de executar. \"Type vibes, ship precision.\"",
    tags: ["prompts", "hooks", "produtividade"],
    repo: "https://github.com/severity1/claude-code-prompt-improver",
    added: "2026-06-10",
  },
  {
    slug: "humanizer",
    name: "Humanizer",
    summary:
      "Remove sinais de escrita gerada por IA do seu texto. Detecta e corrige 33 padrões — de vocabulário inflado e em-dashes excessivos até finais de chatbot — tornando o resultado naturalmente humano.",
    tags: ["escrita", "texto", "ia"],
    repo: "https://github.com/blader/humanizer",
    added: "2026-06-10",
  },
];
