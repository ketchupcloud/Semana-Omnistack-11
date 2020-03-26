import React from 'react';

import './global.css';

import Routes from './routes';

// JSX (HTML integrado no JS)
//Um componente do React é uma função que retorna HTML 
//Não podemos alterar o valor do estado diretamente (Imutabilidade), 
//  por isso importamos {useState} do React que retorna 
//  um Array[valor, funcaoDeAtualizacao] e usamos essa funcaoDeAtualizacao para
//  mexer nesse valor de fato

function App() {
//   const [counter, setCounter] = useState(0);

//   function increment() {
//     setCounter(counter + 1);
//   }

  return (
    <Routes />
    // <div>
    //   <Header> Contador: {counter} </Header>
    //   <button onClick={increment}>Incrementar</button>
    // </div>
  );
}

export default App;

//<Header /> == <Header></Header>
//caso o texto do Header seja customizável, ele deve ser passado como
//  <Header title="blablabla" /> OU como uma tag normal HTML
//  <Header> Happy </Header> e no Header.js iremos utilizar {props.children} 
//  para pegar esse valor OU apenas {children} 
//  caso a função utilize diretamente {children}