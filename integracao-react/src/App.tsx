import React from 'react';
import './App.css';
import ContadorValor from './componentes/ContadorValor';

function App() {
  return (
    <div className="App">
      <ContadorValor contador={123} />
    </div>
  );
}

export default App;
