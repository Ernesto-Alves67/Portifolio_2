// Carrega conteúdo de content.json e aplica nos elementos com atributo data-content
async function loadContent() {
    try {
        const resp = await fetch('content.json', {cache: 'no-store'});
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        const data = await resp.json();

        // Atualiza title e meta description
        if (data.meta && data.meta.title) document.title = data.meta.title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && data.meta && data.meta.description) metaDesc.setAttribute('content', data.meta.description);

        // Função utilitária para ler chaves com ponto
        const get = (obj, path) => {
            return path.split('.').reduce((o, k) => (o && o[k] !== undefined) ? o[k] : undefined, obj);
        };

        document.querySelectorAll('[data-content]').forEach(el => {
            const key = el.getAttribute('data-content');
            const val = get(data, key);
            if (val !== undefined) {
                if (el.tagName === 'IMG') {
                    // se for imagem, atualiza alt
                    el.alt = val;
                } else {
                    el.innerHTML = val;
                }
            }
        });

        // Popula hrefs a partir de chaves no JSON (data-href-content)
        document.querySelectorAll('[data-href-content]').forEach(el => {
            const key = el.getAttribute('data-href-content');
            const val = get(data, key);
            if (val !== undefined && val !== null && val !== '') {
                // Definir href (assume elemento <a>)
                try {
                    el.setAttribute('href', val);
                    if (el.tagName === 'A') {
                        el.setAttribute('target', el.getAttribute('target') || '_blank');
                        el.setAttribute('rel', el.getAttribute('rel') || 'noopener');
                    }
                } catch (e) {
                    // noop
                }
            }
        });
    } catch (err) {
        // Falha ao carregar content.json — mantemos os textos inline como fallback
        console.warn('Não foi possível carregar content.json:', err);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Tenta carregar textos externos
    loadContent();

    // Navegação lateral: usa data-href
    const liNav = document.querySelectorAll('body nav ul li');
    liNav.forEach(function(li) {
        li.addEventListener('click', function() {
            const href = this.getAttribute('data-href');
            if (href) window.location.href = href;
        });
    });

    // Toggle sidebar
    const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.querySelector('.sidebar');
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
    }

    // Fecha sidebar ao clicar em itens no mobile
    const liElements = document.querySelectorAll('.sidebar ul li');
    liElements.forEach(function(li) {
        li.addEventListener('click', function() {
            if (window.innerWidth <= 768 && sidebar) {
                sidebar.classList.remove('open');
            }
        });
    });
});
