/* Comportamentos compartilhados entre todas as páginas. */

// Botões "copiar" dos blocos de código (delegação de eventos).
document.addEventListener("click", (ev) => {
  const btn = ev.target.closest(".copy-btn");
  if (!btn) return;

  const block = btn.closest(".code-block");
  const code = block ? block.querySelector("pre").innerText.trim() : "";

  navigator.clipboard.writeText(code).then(() => {
    const original = btn.textContent;
    btn.textContent = "✓ Copiado!";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove("copied");
    }, 1800);
  });
});

// Ano corrente no rodapé.
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
