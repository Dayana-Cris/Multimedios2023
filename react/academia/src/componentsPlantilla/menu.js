import React from 'react';
// imr y ccc
// React.Component, para que herede todo lo que tiene el componente
class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
          <ul className="nav nav-tabs" id="navId" role="tablist">
            <li className="nav-item">
                <a href="/" className="nav-link" data-bs-toggle="tab" aria-current="page">Inicio</a>
            </li>
            <li className="nav-item">
                <a href="/ListarCurso" className="nav-link" data-bs-toggle="tab" aria-current="page">Curso</a>
            </li>
            <li className="nav-item">
                <a href="/CrearCurso" className="nav-link" data-bs-toggle="tab" aria-current="page">Crear curso</a>
            </li>
            <li className="nav-item">
                <a href="/ListarGrupo" className="nav-link" data-bs-toggle="tab" aria-current="page">Grupo</a>
            </li>
            <li className="nav-item">
                <a href="/CrearGrupo" className="nav-link" data-bs-toggle="tab" aria-current="page">Crear Grupo</a>
            </li>
            <li className="nav-item">
                <a href="/ListarEstudiante" className="nav-link" data-bs-toggle="tab" aria-current="page">Estudiantes</a>
            </li>
            <li className="nav-item">
                <a href="/CrearEstudiante" className="nav-link" data-bs-toggle="tab" aria-current="page">Crear estudiantes</a>
            </li>
            <li className="nav-item" role="presentation">
                <a href="#" className="nav-link disabled" data-bs-toggle="tab">Disabled</a>
            </li>
          </ul>
        );
    }
}

export default Menu;

