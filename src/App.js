import './App.css';
import ListaTareas from './components/ListaTareas';
import Logotipo from './components/Logotipo';
import logo from './images/luiswhite.png';

function App() {
  return (
    <div className="App">
      <Logotipo logotipo={logo} />
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
