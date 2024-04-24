document.addEventListener('DOMContentLoaded', function() {
    const liElements = document.querySelectorAll('body nav ul li');
    liElements.forEach(function(li) {
        li.addEventListener('click', function() {
            const href = this.getAttribute('data-href');
            if (href) {
                window.location.href = href; // Redirecionar para o destino do data-href
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn'); // Obtém o botão de alternância
    const sidebar = document.querySelector('.sidebar'); // Obtém o sidebar

    // Adiciona um evento de clique ao botão de alternância
    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open'); // Alterna a classe 'open' no sidebar
    });
});
