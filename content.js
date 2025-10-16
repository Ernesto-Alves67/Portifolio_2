// Arquivo de conteúdo do portfólio
// Para atualizar as informações do site, basta editar os valores abaixo

const portfolioContent = {
    // Informações pessoais
    personal: {
        name: "Ernesto Alves",
        fullName: "Ernesto Alves dos Santos",
        age: 23,
        photo: "/media/foto.jpg",
        title: "Bem-vindo ao Portifólio de"
    },

    // Seções do menu lateral
    menu: [
        { id: "sobre", label: "Sobre Mim" },
        { id: "educacao", label: "Educação" },
        { id: "experiencia", label: "Experiência" },
        { id: "skills", label: "Skills & Interesses" },
        { id: "projetos", label: "Projetos" },
        { id: "contact", label: "Contato" }
    ],

    // Seção Sobre Mim
    about: {
        title: "Sobre Mim",
        sections: [
            {
                subtitle: "Ernesto Alves dos Santos, 23 anos.",
                text: "Curiosidade é o meu ponto forte. Tenho agonia de não entender algo de fato. Gosto de ver as coisas funcionando como deveriam. Por isso tento dar o meu melhor a cada dia. Todo dia é uma oportunidade de ser melhor."
            },
            {
                subtitle: "Futuro Cientista da Computação",
                text: "Atualmente cursando o 6º período de Ciências da Computação pela Universidade Federal de Catalão. Estudando assiduamente todos os dias. Pretendo me formar até o primeiro semestre de 2025. Estou em busca do conhecimento necessário para poder efetuar o adiantamento de algumas disciplinas com o intuito de tentar ser autodidata de fato, assim como reduzir meu tempo de conclusão do curso."
            }
        ]
    },

    // Seção Educação
    education: {
        title: "Formação Acadêmica",
        items: [
            {
                degree: "Ensino Médio Completo",
                details: [
                    "Duração: 2016-2018",
                    "Situação: Concluído."
                ]
            },
            {
                degree: "Ciências da Computação - Universidade Federal de Catalão (UFCAT)",
                details: [
                    "Carga Horária: 3224 hrs",
                    "Titulação: Bacharel",
                    "Situação: Em andamento",
                    "Previsão de conclusão: 1º semestre 2025"
                ]
            }
        ]
    },

    // Seção Experiência
    experience: {
        title: "Experiência",
        subtitle: "ERROr 404 Not Found!",
        text: "Isso mesmo. Ainda não tenho experiência profissional na área. Minha experiência atual tem sido com meus projetos pessoais e estudos feitos na faculdade. Buscando minha primeira oportunidade."
    },

    // Seção Skills
    skills: {
        title: "Skills",
        items: [
            "Java/Kotlin",
            "C/C++",
            "Python"
        ],
        note: "Entretanto basicamente linguagem de programação não é um problema para mim. Pois aprendo coisas novas muito rápido.",
        interests: {
            title: "Interesses",
            text: "Meu passatempo favorito é desenvolver softwares desktop e mobile. Sou apaixonado em saber como certas coisas funcionam, quero aprender como tudo funciona. Busco poder implementar várias das minhas ideias malucas, e saber por que funcionam ou não. Quero poder me aperfeiçoar em desenvolvimento de software, de modo a vir no futuro abrir minha própria fábrica de software. Em contraponto quero dominar cada vez mais a matemática. Viso poder contribuir significativamente para a área."
        }
    },

    // Seção Projetos
    projects: {
        title: "Projetos",
        items: [
            {
                name: "YTDownloader (Python)",
                description: "Aplicação que permite buscas e download de vídeos do YouTube. #PiracyNeverDies"
            },
            {
                name: "Algoritmos (C++)",
                description: "Visualizador de algoritmos desenvolvido na linguagem C++ juntamente com o framework QT."
            },
            {
                name: "DocViewer",
                description: "Editor de texto desktop que permite a escrita e visualização de documentos em Markdown. Crie templates personalizados e use quando quiser. Ferramenta completa para uma boa escrita em Markdown. Dê um up em suas documentações!"
            },
            {
                name: "PersonalDevControl",
                description: "Mapeador de horas gastas durante programação. Mensure as horas que você gastou desenvolvendo algo. Auxilia na otimização do tempo de produção de software."
            },
            {
                name: "RedditClone",
                description: "Aplicação Mobile Android desenvolvida para entender a criação de layouts complexos e responsivos."
            }
        ]
    },

    // Informações de contato
    contact: {
        email: "ernestoop467@gmail.com",
        whatsapp: "64999684391",
        linkedin: "https://www.linkedin.com/in/ernesto-a-5233b222b/",
        github: "https://github.com/Ernesto-Alves67"
    }
};
