# Como manter os textos do site

Este repositório externaliza todos os textos do site em `content.json`. Isso facilita atualizações e possibilita internacionalização futura.

O que fazer para alterar textos

1. Abra `content.json` e altere o texto correspondente à chave.
2. Salve e recarregue a página; o `script.js` carrega o arquivo e injeta os textos em elementos marcados com `data-content`.

Como adicionar novos textos

- Adicione uma nova chave em `content.json` (use ponto para hierarquia, por exemplo `sobre.titulo_novo`).
- No HTML, adicione `data-content="chave.nova"` ao elemento em que deseja que o texto apareça.

Exemplo de uso no HTML:

`<h2 data-content="sobre.h2">Sobre Mim</h2>`

Notas técnicas

- Se `content.json` não estiver disponível (ex.: chamado falhou), o HTML mantém o texto atual como fallback.
- Para adicionar suporte a traduções, crie `content.en.json`, `content.pt.json` e um seletor de idioma que carregue o arquivo correto.
