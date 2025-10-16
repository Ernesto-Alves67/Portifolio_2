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
    const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.querySelector('.sidebar');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });

    // Close sidebar when clicking on menu items on mobile
    const liElements = document.querySelectorAll('.sidebar ul li');
    liElements.forEach(function(li) {
        li.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });
});
