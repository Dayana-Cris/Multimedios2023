// trae todo lo que tiene react para que realmente funcione 
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// imr y ccc
// React.Component, para que herede todo lo que tiene el componente
class ListarCurso extends React.Component {
    constructor(props) {
        super(props);
        // aqui estado en memoria
        this.state = {
            // declarando json
            datosCargados: false,
            // arreglo vacio para traer datos
            datosCursos: [],
            modalOpen: false,
            modalBorrar: false,
            nombre: "",
            descripcion: "",
            tiempo: "",
            id: "",
            usuario: ""

        }
    }
    cargarDatos() {
        fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php")//url de peticion de datos
            .then(respuesta => respuesta.json())//recibe los datos en formato json
            .then((datosrepuesta) => {
                // cargo en el estado que si trae un estado y adicional datos en el arreglo
                // el set es para guardar, el otro solo para declarar
                this.setState({ datosCargados: true, datosCursos: datosrepuesta.data })
                console.log(datosrepuesta.data);
            })
            .catch(console.log)//muestra errores
    }
    eliminar(id) {
        var datosenviar = {
            id: id
        }
        fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php",
            {
                method: "POST",
                body: JSON.stringify(datosenviar)
            })//url de peticion de datos
            .then(respuesta => respuesta.json())//recibe los datos en formato json
            .then((datosrepuesta) => {
                // window.location = '/ListarCurso'
                this.closeModal()
                this.openModal('exitoso')
                this.cargarDatos()
            })
            .catch(console.log);//muestra errores
    }

    cambioValor = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({ state });
    }

    editar(objeto) {
        this.setState({ id: objeto.id, nombre: objeto.nombre, descripcion: objeto.descripcion, tiempo: objeto.tiempo, usuario: objeto.usuario })
        this.openModal('editar');
    }

    enviarDatos = (e) => {
        e.preventDefault();

        const { id, nombre, descripcion, tiempo, usuario } = this.state;

        var datosenviar = {
            id: id,
            nombre: nombre,
            descripcion: descripcion,
            tiempo: tiempo,
            usuario: 'profesora DC'
        }
        fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php",
            {
                method: "POST",
                body: JSON.stringify(datosenviar)
            })//url de peticion de datos
            .then(respuesta => respuesta.json())//recibe los datos en formato json
            .then((datosrepuesta) => {
                window.location = 'ListarCurso'
            })
            .catch(console.log)//muestra errores
    }
    openModal(accion, id) {
        if (accion == 'editar') {
            this.setState({ modalOpen: true })
        }
        if (accion == 'eliminar') {
            this.setState({ modalBorrar: true, id })
        }
        if (accion == 'exitoso') {
            this.setState({ modalExitoso: true })
        }

    }

    closeModal() {
        this.setState({ modalOpen: false, modalBorrar: false, modalExitoso: false })
    }

    // invocar como el document ready
    componentDidMount() {
        this.cargarDatos();
    }

    render() {
        // aqui pasa a ser una constante
        const { datosCargados, datosCursos, modalOpen, nombre, descripcion, tiempo, id, usuario, modalBorrar, modalExitoso } = this.state
        return (
            <body className='fondoCurso'>
                <div className='container-fluid mb-3'>
                    <Modal show={modalOpen}>
                        <Modal.Header closeButton onClick={() => this.closeModal()}>
                            <Modal.Title>Editar Curso</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form id="formulario" onSubmit={this.enviarDatos}>
                                <div className="mb-3" >
                                    <input type="hidden" id="id" name="id" onChange={this.cambioValor} value={id}></input>
                                    <label htmlFor="" className="form-label">Nombre</label>
                                    <input required type="text" className="form-control" name="nombre" id="nombre" aria-describedby="helpId"
                                        placeholder="Ingrese el nombre del curso" onChange={this.cambioValor} value={nombre}></input>
                                    {/* <small id="helpId" className="form-text text-muted">Nombre del curso</small> */}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Descripcion</label>
                                    <input required type="text" className="form-control" name="descripcion" id="descripcion" aria-describedby="helpId"
                                        placeholder="Ingrese la descripcion del curso" onChange={this.cambioValor} value={descripcion}></input>
                                    {/* <small id="helpId" className="form-text text-muted">Descripcion del curso</small> */}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Tiempo</label>
                                    <input required type="text" className="form-control" name="tiempo" id="tiempo" aria-describedby="helpId"
                                        placeholder="Ingrese el tiempo del curso" onChange={this.cambioValor} value={tiempo}></input>
                                    {/* <small id="helpId" className="form-text text-muted">Tiempo del curso</small> */}
                                </div>
                                <div className="text-center">
                                    {/* <button type="reset" className="btn btn-danger me-3">Limpiar</button> */}
                                    <button type="submit" className="btn btn-primary">Actualizar</button>
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>
                    <h1>Listar Curso</h1>
                    <div className='d-flex justify-content-start'>
                        <a name="" id="" className="btn btn-dark mb-2 " href="CrearCurso" role="button">Agregar [+]</a>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-primary  rounded-3">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Descripcion</th>
                                    <th>Tiempo</th>
                                    <th>Usuario</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* puedo mapear los datos, traerlos */}
                                {
                                    datosCursos.map(
                                        (datosExtraidos) =>
                                            <tr key={datosExtraidos.id} className="table-primary" >
                                                <td scope="row">${datosExtraidos.id}</td>
                                                <td>{datosExtraidos.nombre}</td>
                                                <td>{datosExtraidos.descripcion}</td>
                                                <td>{datosExtraidos.tiempo}</td>
                                                <td>{datosExtraidos.usuario}</td>

                                                <td>
                                                    <a name="" id="" className="btn btn-danger me-1" onClick={() => this.openModal('eliminar', datosExtraidos.id)} role="button">Borrar</a>
                                                    <a name="" id="" className="btn btn-primary" onClick={() => this.editar(datosExtraidos)} role="button">Editar</a>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <Modal show={modalBorrar}>
                        <Modal.Header closeButton onClick={() => this.closeModal()}>
                            <Modal.Title>Eliminar Curso</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>¿Estás seguro que deseas eliminar el curso con id {id}</p>
                            <a name="" id="" className="btn btn-danger me-3" onClick={() => this.eliminar(id)} role="button">Si</a>
                            <a onClick={() => this.closeModal()} type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</a>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>
                    <Modal show={modalExitoso}>
                        <Modal.Header className='bg-info' closeButton onClick={() => this.closeModal()}>
                            <Modal.Title>Proceso exitoso</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Proceso realizado exitosamente</p>
                            <a onClick={() => this.closeModal()} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</a>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>

                </div>
            </body>

        );

    }


}

export default ListarCurso;