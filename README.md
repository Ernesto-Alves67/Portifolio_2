# Portfólio - Ernesto Alves

Portfolio pessoal responsivo com design moderno.

## 📝 Como Atualizar o Conteúdo

Para facilitar a manutenção, todo o conteúdo textual do site está centralizado no arquivo **`content.js`**.

### Passo a Passo para Atualizar:

1. **Abra o arquivo `content.js`**
2. **Edite as informações desejadas** no objeto `portfolioContent`
3. **Salve o arquivo**
4. **Recarregue a página** no navegador para ver as mudanças

### Estrutura do Conteúdo

O arquivo `content.js` contém as seguintes seções:

#### 📌 Informações Pessoais
```javascript
personal: {
    name: "Seu Nome",
    fullName: "Seu Nome Completo",
    age: 23,
    photo: "/media/foto.jpg",
    title: "Bem-vindo ao Portifólio de"
}
```

#### 📌 Sobre Mim
```javascript
about: {
    title: "Sobre Mim",
    sections: [
        {
            subtitle: "Título da seção",
            text: "Texto descritivo..."
        }
    ]
}
```

#### 📌 Educação
```javascript
education: {
    title: "Formação Acadêmica",
    items: [
        {
            degree: "Nome do curso/formação",
            details: [
                "Detalhe 1",
                "Detalhe 2"
            ]
        }
    ]
}
```

#### 📌 Experiência
```javascript
experience: {
    title: "Experiência",
    subtitle: "Subtítulo",
    text: "Descrição da experiência..."
}
```

#### 📌 Skills
```javascript
skills: {
    title: "Skills",
    items: ["Skill 1", "Skill 2", "Skill 3"],
    note: "Nota adicional...",
    interests: {
        title: "Interesses",
        text: "Descrição dos interesses..."
    }
}
```

#### 📌 Projetos
```javascript
projects: {
    title: "Projetos",
    items: [
        {
            name: "Nome do Projeto",
            description: "Descrição do projeto..."
        }
    ]
}
```

#### 📌 Contato
```javascript
contact: {
    email: "seu@email.com",
    whatsapp: "5511999999999",
    linkedin: "https://linkedin.com/in/seu-perfil",
    github: "https://github.com/seu-usuario"
}
```

## 🎨 Estrutura do Projeto

```
├── index.html          # Estrutura HTML (não precisa editar)
├── style.css           # Estilos e responsividade
├── script.js           # Lógica de carregamento dinâmico
├── content.js          # ⭐ ARQUIVO PARA EDITAR CONTEÚDO
├── media/              # Pasta com imagens
│   └── foto.jpg        # Sua foto de perfil
└── README.md           # Este arquivo
```

## 🚀 Vantagens desta Estrutura

✅ **Fácil Manutenção**: Edite apenas um arquivo para atualizar todo o conteúdo  
✅ **Organização**: Separação clara entre conteúdo, estrutura e estilo  
✅ **Escalabilidade**: Adicione novos projetos, skills ou experiências facilmente  
✅ **Sem Duplicação**: Não precisa editar HTML diretamente  
✅ **Responsivo**: Funciona em todos os dispositivos (desktop, tablet, mobile)

## 💡 Exemplos de Atualizações Comuns

### Adicionar um novo projeto:
Abra `content.js` e adicione um novo item no array `projects.items`:
```javascript
{
    name: "Meu Novo Projeto",
    description: "Descrição do que o projeto faz..."
}
```

### Atualizar idade:
Edite o campo `personal.age` em `content.js`

### Adicionar nova skill:
Adicione um novo item no array `skills.items`

### Atualizar informações de contato:
Edite os campos em `contact`

## 📱 Responsividade

O site é totalmente responsivo com breakpoints para:
- 📱 Mobile: < 768px
- 📱 Tablet: 769px - 1024px
- 💻 Desktop: > 1024px

## 🎯 Funcionalidades

- Sidebar lateral com menu de navegação
- Toggle button para sidebar em dispositivos móveis
- Foto de perfil no header (mobile) e na sidebar (desktop)
- Links de contato funcionais
- Smooth scroll entre seções
- Animações e efeitos hover
- Gradiente de cores personalizado

---

**Desenvolvido por Ernesto Alves** 🚀
