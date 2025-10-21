// ================================================================================
// dropdown Chat GuardIA
const dropdownBtn = document.getElementById("chatTitle");
const dropdown = dropdownBtn.closest(".dropdown");

if (dropdownBtn && dropdown) {
  dropdownBtn.addEventListener("click", () => {
    dropdown.classList.toggle("show");
  });

  // Fecha o menu se clicar fora
  window.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("show");
    }
  });
}

window.addEventListener('scroll', function() {
    const nav = document.querySelector('.barra_de_navegação');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});