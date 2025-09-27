import './App.css';
import Eventou from './components/evento/evento';
import Formulario from './components/formulario/formulario';
function App() {
  return (
    <div className="App">
      <Eventou numero={1} />
      <Eventou numero={2} />
      <Eventou numero={3} />

      <Formulario />
    </div>
  );
}

export default App;
