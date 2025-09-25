import './App.css';

/* Importamos nosso componente */
import ComponenteUm  from './components/primeiroComponente/componenteUm';

function App() {
  return (
    <div className="App">
      <h1>Ola Mundo!</h1>
      <ComponenteUm nome="Lazário" sobrenome="Silva" idade="20" />
      <ComponenteUm nome="Maria" sobrenome="Alves" idade="40" />     
    </div>
  );
}

export default App;
