document.addEventListener('DOMContentLoaded', function() {
    // Carregar conteúdo dinamicamente
    loadContent();
    
    // Configurar navegação
    setupNavigation();
    
    // Configurar toggle do sidebar
    setupSidebarToggle();
});

// Função para carregar todo o conteúdo do portfólio
function loadContent() {
    // Atualizar informações pessoais
    document.getElementById('nametitle').textContent = `${portfolioContent.personal.fullName}, ${portfolioContent.personal.age} anos`;
    document.querySelector('header h1').innerHTML = `${portfolioContent.personal.title} <br> ${portfolioContent.personal.name}`;
    
    // Carregar seção Sobre Mim
    loadAboutSection();
    
    // Carregar seção Educação
    loadEducationSection();
    
    // Carregar seção Experiência
    loadExperienceSection();
    
    // Carregar seção Skills
    loadSkillsSection();
    
    // Carregar seção Projetos
    loadProjectsSection();
    
    // Carregar informações de contato
    loadContactSection();
}

// Carregar seção Sobre Mim
function loadAboutSection() {
    const aboutDiv = document.getElementById('sobre');
    aboutDiv.innerHTML = `<h2>${portfolioContent.about.title}</h2>`;
    
    portfolioContent.about.sections.forEach(section => {
        aboutDiv.innerHTML += `
            <h3 class="header">${section.subtitle}</h3>
            <p${section.subtitle.includes('Futuro') ? ' class="bio"' : ''}>${section.text}</p>
        `;
    });
}

// Carregar seção Educação
function loadEducationSection() {
    const eduDiv = document.getElementById('educacao');
    eduDiv.innerHTML = `<h2 class="header">${portfolioContent.education.title}</h2>`;
    
    portfolioContent.education.items.forEach((item, index) => {
        const className = index === 0 ? 'skill-title' : 'header';
        eduDiv.innerHTML += `
            <h3 class="${className}">${item.degree}</h3>
            <p class="skill-description">${item.details.join('<br>')}</p>
            ${index < portfolioContent.education.items.length - 1 ? '<br>' : ''}
        `;
    });
}

// Carregar seção Experiência
function loadExperienceSection() {
    const expDiv = document.getElementById('experiencia');
    expDiv.innerHTML = `
        <h2>${portfolioContent.experience.title}</h2>
        <h3>${portfolioContent.experience.subtitle}</h3>
        <p>${portfolioContent.experience.text}</p>
    `;
}

// Carregar seção Skills
function loadSkillsSection() {
    const skillsDiv = document.getElementById('skills');
    skillsDiv.innerHTML = `<h2>${portfolioContent.skills.title}</h2>`;
    
    portfolioContent.skills.items.forEach(skill => {
        skillsDiv.innerHTML += `<h3>${skill}</h3>`;
    });
    
    skillsDiv.innerHTML += `<p>${portfolioContent.skills.note}</p>`;
    
    skillsDiv.innerHTML += `
        <div class="nesteddiv" id="interesses">
            <h2>${portfolioContent.skills.interests.title}</h2>
            <p>${portfolioContent.skills.interests.text}</p>
        </div>
    `;
}

// Carregar seção Projetos
function loadProjectsSection() {
    const projectsDiv = document.getElementById('projetos');
    projectsDiv.innerHTML = `<h2>${portfolioContent.projects.title}</h2>`;
    
    portfolioContent.projects.items.forEach(project => {
        projectsDiv.innerHTML += `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        `;
    });
}

// Carregar informações de contato
function loadContactSection() {
    const contactUl = document.querySelector('footer ul.contact');
    contactUl.innerHTML = `
        <li><a href="mailto:${portfolioContent.contact.email}" target="_blank">Email</a></li>
        <li><a href="https://api.whatsapp.com/send?phone=${portfolioContent.contact.whatsapp}" target="_blank">WhatsApp</a></li>
        <li><a href="${portfolioContent.contact.linkedin}" target="_blank">LinkedIn</a></li>
        <li><a href="${portfolioContent.contact.github}" target="_blank">GitHub</a></li>
    `;
}

// Configurar navegação do menu
function setupNavigation() {
    const liElements = document.querySelectorAll('body nav ul li');
    liElements.forEach(function(li) {
        li.addEventListener('click', function() {
            const href = this.getAttribute('data-href');
            if (href) {
                window.location.href = href;
            }
        });
    });
}

// Configurar toggle do sidebar
function setupSidebarToggle() {
    const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.querySelector('.sidebar');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });

    // Fechar sidebar ao clicar nos itens do menu no mobile
    const liElements = document.querySelectorAll('.sidebar ul li');
    liElements.forEach(function(li) {
        li.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });
}
