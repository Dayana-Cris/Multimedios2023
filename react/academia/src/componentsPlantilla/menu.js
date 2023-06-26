import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// imr y ccc
// React.Component, para que herede todo lo que tiene el componente
class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand className='ms-4 letraColor aumentarLetra' href="/">Universidad DC</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="buttonWhite" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className='letraColor fw-bold aumentarLetra ms-4' href="/">Inicio</Nav.Link>
                        <Nav.Link className='letraColor fw-bold aumentarLetra ms-4' href="/ListarCurso">Cursos</Nav.Link>
                        <Nav.Link className='letraColor fw-bold aumentarLetra ms-4' href="/CrearCurso">Crear curso</Nav.Link>
                        <Nav.Link className='letraColor fw-bold aumentarLetra ms-4' href="/ListarGrupo">Grupo</Nav.Link>
                        <Nav.Link className='letraColor fw-bold aumentarLetra ms-4' href="/CrearGrupo">Crear Grupo</Nav.Link>
                        <Nav.Link className='letraColor fw-bold aumentarLetra ms-4' href="/ListarEstudiante">Estudiantes</Nav.Link>
                        <Nav.Link className='letraColor fw-bold aumentarLetra ms-4' href="/CrearEstudiante">Crear estudiantes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            // <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-expand-xl navbar-expand-md p-4">
            //     <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
            //         data-bs-target="#navbarTooglerDemo01" aria-controls="navbarTooglerDemo01" aria-expanded="false"
            //         aria-label="Toogle navigation">
            //         <span className="navbar-toggler-icon"></span>
            //     </button>

            //     <div className="collapse navbar-collapse" id="navbarTooglerDemo01">
            //         <ul className="navbar-nav">
            //             <li className="nav-item ms-4">
            //                 <a href="/" className="nav-link fw-bold aumentarLetra" data-bs-toggle="tab" aria-current="page">Inicio</a>
            //             </li>
            //             <li className="nav-item ms-4">
            //                 <a href="/ListarCurso" className="nav-link fw-bold aumentarLetra" data-bs-toggle="tab" aria-current="page">Curso</a>
            //             </li>
            //             <li className="nav-item ms-4">
            //                 <a href="/CrearCurso" className="nav-link fw-bold aumentarLetra" data-bs-toggle="tab" aria-current="page">Crear curso</a>
            //             </li>
            //             <li className="nav-item ms-4">
            //                 <a href="/ListarGrupo" className="nav-link fw-bold aumentarLetra" data-bs-toggle="tab" aria-current="page">Grupo</a>
            //             </li>
            //             <li className="nav-item ms-4">
            //                 <a href="/CrearGrupo" className="nav-link fw-bold aumentarLetra" data-bs-toggle="tab" aria-current="page">Crear Grupo</a>
            //             </li>
            //             <li className="nav-item ms-4">
            //                 <a href="/ListarEstudiante" className="nav-link fw-bold aumentarLetra" data-bs-toggle="tab" aria-current="page">Estudiantes</a>
            //             </li>
            //             <li className="nav-item ms-4">
            //                 <a href="/CrearEstudiante" className="nav-link fw-bold aumentarLetra" data-bs-toggle="tab" aria-current="page">Crear estudiantes</a>
            //             </li>
            //         </ul>
            //     </div>
            // </nav>

        );
    }
}

export default Menu;
