import React from "react";
import './grupo.css';
import Modal from 'react-bootstrap/Modal';

class CrearGrupo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            datosCargados: false,
            modalExitoso: false
        }
    }
    openModal() {
        this.setState({ modalExitoso: true })
    }

    closeModal() {
        this.setState({ modalExitoso: false })
    }

    cambioValor = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({ state });
    }

    enviarDatos = (e) => {
        e.preventDefault();

        const { nombre } = this.state;

        var datosenviar = {
            nombre: nombre,
        }

        fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarGrupo.php",
            {
                method: "POST",
                body: JSON.stringify(datosenviar)
            })//url de peticion de datos
            .then(respuesta => respuesta.json())//recibe los datos en formato json
            .then((datosrepuesta) => {
                console.log('Datos', datosrepuesta)
                this.openModal()
            })
            .catch(console.log)//muestra errores
    }

    render() {
        const { nombre, descripcion, tiempo, datosCargados, modalExitoso} = this.state;
        return (
            <div className="container divFormulario mt-4 p-3 rounded-3">
                <h1 className="mb-3">Agregar Grupo</h1>
                <div>
                    <form id="formulario" onSubmit={this.enviarDatos}>
                        <div className="mb-3" >
                            <label htmlFor="" className="form-label d-flex justify-content-start">Nombre</label>
                            <input required type="text" className="form-control" name="nombre" id="nombre" aria-describedby="helpId"
                                placeholder="Ingrese el nombre del grupo" onChange={this.cambioValor} value={nombre}></input>
                            {/* <small id="helpId" className="form-text text-muted">Nombre del curso</small> */}
                        </div>
                        <div className="text-center">
                        <a name="" id="" className="btn btn-secondary me-2 " href="ListarGrupo" role="button">Lista grupos</a>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </div>
                    </form>
                </div>
                <Modal show={modalExitoso}>
                    <Modal.Header className='bg-info'>
                        <Modal.Title>Proceso exitoso</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Grupo agregado con éxito</p>
                        <a onClick={() => this.closeModal()} href="ListarGrupo" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</a>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default CrearGrupo;