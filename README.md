# Avaliação A3 - React

Projeto desenvolvido em React para a atividade da faculdade, utilizando Vite como ferramenta de criação e execução da aplicação.

A aplicação apresenta uma tela simples com mensagem de boas-vindas, texto informativo, componente de rodapé e um contador interativo.

---

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- CSS
- HTML

---

## Funcionalidades

- Exibição de mensagem de boas-vindas;
- Uso de componentes separados;
- Passagem de propriedades com `props`;
- Contador com botões de aumentar e diminuir;
- Uso do Hook `useState`;
- Organização básica de arquivos em uma estrutura React.

---

## Estrutura principal do projeto

```txt
src/
├── components/
│   ├── contador/
│   │   └── index.jsx
│   ├── footer/
│   │   └── index.jsx
│   ├── navbar/
│   │   └── index.jsx
│   └── regards/
│       ├── index.css
│       └── index.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

---

## Como executar o projeto

Instale as dependências:

```bash
npm install
```

Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

Depois, acesse o endereço exibido no terminal, geralmente:

```txt
http://localhost:5173
```

---

## Como gerar a versão final

Para gerar os arquivos de produção:

```bash
npm run build
```

Para visualizar a versão final localmente:

```bash
npm run preview
```

---

## Sobre o projeto

Este projeto foi criado para praticar conceitos iniciais de React, como componentes, propriedades e Hooks.

Também foi criado o arquivo `sobrehook.md`, explicando de forma simples o que são os Hooks `useState` e `useEffect`, com exemplos práticos de cada um.
