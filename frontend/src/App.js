import React from 'react';
import './global.css';
import Routes from './routes';

//Um componennte é uma função que retorna um html
// JSX (JAVASCRIPT + XML) -> HTML DENTRO DO JS
// Não se pode alterar uma variavel de estato diretamente
function App() {
  /**
   * useState retorna um array com duas posições
   * useState[0] = valor da variavel
   * useState[1] = função de atualização
   */
  

  return (
    <div>
      <Routes />
      

    </div>
   
  );
}

export default App;
