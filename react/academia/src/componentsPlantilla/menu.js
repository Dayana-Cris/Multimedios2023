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
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-expand-xl navbar-expand-md">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTooglerDemo01" aria-controls="navbarTooglerDemo01" aria-expanded="false"
                    aria-label="Toogle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTooglerDemo01">
                    <ul className="navbar-nav">
                        <li className="nav-item ms-4">
                            <a href="/" className="nav-link fw-bold aumentarLetra" data-bs-toggle="tab" aria-current="page">Inicio</a>
                        </li>
                        <li className="nav-item ms-4">
                            <a href="/ListarCurso" className="nav-link fw-bold aumentarLetra" data-bs-toggle="tab" aria-current="page">Curso</a>
                        </li>
                        <li className="nav-item ms-4">
                            <a href="/CrearCurso" className="nav-link fw-bold aumentarLetra" data-bs-toggle="tab" aria-current="page">Crear curso</a>
                        </li>
                        <li className="nav-item ms-4">
                            <a href="/ListarGrupo" className="nav-link fw-bold aumentarLetra" data-bs-toggle="tab" aria-current="page">Grupo</a>
                        </li>
                        <li className="nav-item ms-4">
                            <a href="/CrearGrupo" className="nav-link fw-bold aumentarLetra" data-bs-toggle="tab" aria-current="page">Crear Grupo</a>
                        </li>
                        <li className="nav-item ms-4">
                            <a href="/ListarEstudiante" className="nav-link fw-bold aumentarLetra" data-bs-toggle="tab" aria-current="page">Estudiantes</a>
                        </li>
                        <li className="nav-item ms-4">
                            <a href="/CrearEstudiante" className="nav-link fw-bold aumentarLetra" data-bs-toggle="tab" aria-current="page">Crear estudiantes</a>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}

export default Menu;
