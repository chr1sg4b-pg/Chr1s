document.querySelector('.ver_tudo').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Carregando mais novidades...' );
});

function renderNews() {
    const container = document.querySelector('.novo_container');
    newsData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'novo_card';
        card.innerHTML = `
        <img src="${item.img}" alt="${item.titulo}">
        <div class="novo_contexto">
            <div class="novo_titulo">${item.titulo}</div>
            <div class="novo_subtitulo">${item.subtitulo}</div>
            <div class="novo_temas">${item.tema.map(tema => `<span class="tema_oficial">${tema}</span>`).join('')}</div>
        </div>
        `;
        container.appendChild(card);
    })
}

window.addEventListener('scroll', function() {
    const nav = document.querySelector('.barra_de_navegação');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});