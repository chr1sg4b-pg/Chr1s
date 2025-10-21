const bg = document.getElementById("valor-bg");
const title = document.getElementById("valor-title");
const desc = document.getElementById("valor-desc");
const navItems = document.querySelectorAll(".valor-nav span");

const valores = [
  {
    title: "O USUÁRIO SEMPRE VEM EM PRIMEIRO LUGAR",
    desc: "Tudo que fazemos é para os usuários. Nosso foco constante nos usuários nos faz criar conhecimntos de problemas mais significativas e duradouras para q possamos resolver nessa nova era.",
    img: "../img/valores1.jpg"
  },
  {
    title: "SERIEDADE VOLTADA AOS SEUS DADOS",
    desc: "Tecnologia são nossa paixão. Buscamos sempre elevar o nível de qualidade em tudo que criamos.",
    img: "../img/valores2.png"
  },
  {
    title: "SONHE E ENTREGUE",
    desc: "Sonhamos alto e trabalhamos duro para entregar o melhor para a comunidade.",
    img: "../img/valores3.png"
  },
  {
    title: "NÓS VIEMOS PARA FICAR",
    desc: "Estamos comprometidos em longo prazo, construindo experiências duradouras e de impacto.",
    img: "../img/valores4.jpg"
  },
  {
    title: "UMA CRIPTOGUARDIA UNIDA",
    desc: "Trabalhamos juntos, celebramos juntos e crescemos juntos, sempre com o jogador no centro.",
    img: "../img/valores5.jpg"
  }
];

function trocarValor(index) {
  const valor = valores[index];
  bg.style.backgroundImage = `url(${valor.img})`;
  title.textContent = valor.title;
  desc.textContent = valor.desc;

  navItems.forEach(i => i.classList.remove("active"));
  navItems[index].classList.add("active");
}

// Iniciar com o primeiro valor
trocarValor(0);

// Evento de clique
navItems.forEach((item, index) => {
  item.addEventListener("click", () => trocarValor(index));
});


function trocarValor(index) {
  const valor = valores[index];
  bg.style.backgroundImage = `url(${valor.img})`;
  title.textContent = valor.title;
  desc.textContent = valor.desc;

  navItems.forEach(i => i.classList.remove("active"));
  navItems[index].classList.add("active");

  // 🔹 Faz o fundo preto da parte de baixo piscar suavemente
  const detalhes = document.querySelector(".valor-detalhes");
  detalhes.classList.remove("blink");
  void detalhes.offsetWidth; // força reflow pra reiniciar a animação
  detalhes.classList.add("blink");
}


