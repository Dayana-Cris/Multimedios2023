




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
            nombre: "",
            id:"",

        }
    }
    cargarDatos() {
        fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php")//url de peticion de datos
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
        fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarGrupo.php",
            {
                method: "POST",
                body: JSON.stringify(datosenviar)
            })//url de peticion de datos
            .then(respuesta => respuesta.json())//recibe los datos en formato json
            .then((datosrepuesta) => {
                console.log('Datos', datosrepuesta)
            })
            .catch(console.log);//muestra errores
            window.location = '/ListarGrupo'
            alert("Eliminado")
    }


    cambioValor = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({ state });
    }

    editar(objeto) {
        this.setState({ id: objeto.id, nombre: objeto.nombre})
        this.openModal();
    }

    enviarDatos = (e) => {
        e.preventDefault();

        const { id, nombre} = this.state;

        var datosenviar = {
            id:id,
            nombre: nombre
        }
        fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarGrupo.php",
            {
                method: "POST",
                body: JSON.stringify(datosenviar)
            })//url de peticion de datos
            .then(respuesta => respuesta.json())//recibe los datos en formato json
            .then((datosrepuesta) => {
                window.location = 'ListarGrupo'
            })
            .catch(console.log)//muestra errores
    }
    openModal() {
        this.setState({ modalOpen: true })
    }

    closeModal() {
        this.setState({ modalOpen: false })
    }
    // invocar como el document ready
    componentDidMount() {
        this.cargarDatos();
    }

    render() {
        // aqui pasa a ser una constante
        const { datosCargados, datosCursos, modalOpen, nombre, id } = this.state
        return (
            <div className='container'>
                {/* <Button variant="primary" onClick={() => this.openModal()}>
                    Launch demo modal
                </Button> */}

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
                                    placeholder="Ingrese el nombre del grupo" onChange={this.cambioValor} value={nombre}></input>
                                {/* <small id="helpId" className="form-text text-muted">Nombre del curso</small> */}
                            </div>
                            <div className="text-center">
                                <button type="reset" className="btn btn-danger me-3">Limpiar</button>
                                <button type="submit" className="btn btn-primary">Actualizar</button>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
                <h1>Listar Grupo</h1>
                <div className="table-responsive">
                    <table className="table table-primary">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Accciones</th>
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

                                            <td>
                                                <a name="" id="" className="btn btn-danger" onClick={() => this.eliminar(datosExtraidos.id)} role="button">Borrar</a>
                                                <a name="" id="" className="btn btn-primary" onClick={() => this.editar(datosExtraidos)} role="button">Editar</a>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );

    }


}

export default ListarCurso;