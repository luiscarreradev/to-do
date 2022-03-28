import './App.css';
import Logotipo from './components/Logotipo';
import Tarea from './components/Tarea';
import TareaFormulario from './components/TareaFormulario';
import logo from './images/luiswhite.png';

function App() {
  return (
    <div className="App">
      <Logotipo logotipo={logo} />
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <TareaFormulario />
        <Tarea
          texto='Aprender React'
          completada={false}
        />
      </div>
    </div>
  );
}

export default App;
