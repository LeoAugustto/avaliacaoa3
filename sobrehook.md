# Sobre Hooks no React

Hooks são funções especiais do React que permitem usar recursos da biblioteca dentro de componentes funcionais.  
Com eles, é possível controlar estados, executar ações quando algo muda na tela e organizar melhor a lógica do componente.

Neste projeto, o componente `Contador` já utiliza um Hook muito importante: o `useState`.

---

## O que é `useState`?

O `useState` é um Hook usado para criar e controlar estados dentro de um componente.

Estado é uma informação que pode mudar durante o uso da aplicação.  
Quando o estado muda, o React atualiza automaticamente a parte da tela que depende desse valor.

### Exemplo de `useState`

```jsx
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Meu contador tem valor de: {contador}</p>

      <button onClick={() => setContador(contador + 1)}>Aumentar</button>

      <button onClick={() => setContador(contador - 1)}>Diminuir</button>
    </div>
  );
}

export default Contador;
```

### Explicação

```jsx
const [contador, setContador] = useState(0);
```

- `contador` é o valor atual do estado.
- `setContador` é a função usada para alterar esse valor.
- `useState(0)` define que o valor inicial do contador será `0`.

Sempre que o botão é clicado, o estado muda e o React atualiza o valor exibido na tela.

---

## O que é `useEffect`?

O `useEffect` é um Hook usado para executar uma ação depois que o componente é renderizado ou quando algum valor muda.

Ele é muito usado para tarefas como:

- buscar dados em uma API;
- alterar o título da página;
- executar algum código quando um estado mudar;
- iniciar ou limpar timers.

### Exemplo de `useEffect`

```jsx
import { useEffect, useState } from "react";

function TituloContador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);

  return (
    <div>
      <p>Valor atual: {contador}</p>

      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
    </div>
  );
}

export default TituloContador;
```

### Explicação

```jsx
useEffect(() => {
  document.title = `Contador: ${contador}`;
}, [contador]);
```

Nesse exemplo, o `useEffect` altera o título da aba do navegador sempre que o valor de `contador` muda.

A parte `[contador]` é chamada de lista de dependências.  
Ela informa ao React que o efeito deve ser executado novamente sempre que o valor de `contador` for alterado.

---

## Resumo

O `useState` serve para guardar e alterar informações dentro do componente.  
O `useEffect` serve para executar ações quando o componente aparece na tela ou quando alguma informação muda.

Esses dois Hooks são muito usados no desenvolvimento com React e ajudam a deixar os componentes mais dinâmicos e interativos.
