import logo from './logo.svg';
import ListarCurso from './componentsCurso/listarCurso';
import ListarGrupo from './componentsGrupo/listarGrupo';
import ListarEstudiante from './componentsEstudiante/listarEstudiante';
import CrearCurso from './componentsCurso/crearCurso';
import CrearGrupo from './componentsGrupo/crearGrupo';
import CrearEstudiante from './componentsEstudiante/crearEstudiante';
import Menu from './componentsPlantilla/menu';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './componentsPlantilla/dashboard';

import { Route, BrowserRouter as  Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Router>
        <Route exact path="/" component ={Dashboard}></Route>
        <Route path="/ListarCurso" component={ListarCurso}></Route>
        <Route path="/CrearCurso" component={CrearCurso}></Route>
        <Route path="/ListarGrupo" component={ListarGrupo}></Route>
        <Route path="/CrearGrupo" component={CrearGrupo}></Route>
        <Route path="/ListarEstudiante" component={ListarEstudiante}></Route>
        <Route path="/CrearEstudiante" component={CrearEstudiante}></Route>
        <Route></Route>
      </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
