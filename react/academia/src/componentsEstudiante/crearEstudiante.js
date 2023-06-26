import React from "react";
import './estudiante.css';
import Modal from 'react-bootstrap/Modal';

class CrearEstudiante extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cedula: "",
            correoelectronico: "",
            telefono: "",
            telefonocelular: "",
            fechanacimiento: "",
            sexo: "",
            direccion: "",
            nombre: "",
            apellidopaterno: "",
            apellidomaterno: "",
            nacionalidad: "",
            idCarreras: "",
            usuario: "",
            datosCargados: false,
            opciones: [],
            modalExitoso: false

        }
    }
    openModal() {
        this.setState({ modalExitoso: true })
    }

    closeModal() {
        this.setState({ modalExitoso: false })
    }

    cargarGrupos = (e) => {
        // e.preventDefault();

        const { idCarreras, opciones } = this.state;
        fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php")//url de peticion de datos
            .then(respuesta => respuesta.json())//recibe los datos en formato json
            .then((datosrespuesta) => {
                const { idCarreras } = this.state;
                const opciones = datosrespuesta.data.map(valor => ({
                    id: valor.id,
                    nombre: valor.nombre
                }));
                this.setState({ opciones })
            })
            .catch(console.log)//muestra errores
    }
    cambioSelect = (event) => {
        const idCarreras = event.target.value;
        this.setState({ idCarreras });
    };

    cambioValor = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({ state });
    }

    enviarDatos = (e) => {
        e.preventDefault();

        const { id, nombre, cedula, correoelectronico, telefono, telefonocelular, fechanacimiento, sexo, direccion, apellidopaterno,
            apellidomaterno, nacionalidad, idCarreras, usuario } = this.state;

        var datosenviar = {
            id: id,
            nombre: nombre,
            cedula: cedula,
            correoelectronico: correoelectronico,
            telefono: telefono,
            telefonocelular: telefonocelular,
            fechanacimiento: fechanacimiento,
            sexo: sexo,
            direccion: direccion,
            nombre: nombre,
            apellidopaterno: apellidopaterno,
            apellidomaterno: apellidomaterno,
            nacionalidad: nacionalidad,
            idCarreras: idCarreras,
            usuario: 'profesora D'
        }

        fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php",
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
    componentDidMount() {
        this.cargarGrupos();
    }
    render() {
        const { id, nombre, cedula, correoelectronico, telefono, telefonocelular, fechanacimiento, sexo, direccion, apellidopaterno,
            apellidomaterno, nacionalidad, idCarreras, usuario, datosCargados, opciones, modalExitoso } = this.state;
        return (
            <div className="container divFormulario mt-4 p-5 mb-5 rounded-3">
                <h1 className="mb-3">Agregar Estudiante</h1>
                <form id="formulario" onSubmit={this.enviarDatos}>
                    <div className="mb-3" >
                        <input type="hidden" id="id" name="id" onChange={this.cambioValor} value={id}></input>
                        <label htmlFor="" className="form-label d-flex justify-content-start">Nombre</label>
                        <input required type="text" className="form-control" name="nombre" id="nombre" aria-describedby="helpId"
                            placeholder="Ingrese el nombre del estudiante" onChange={this.cambioValor} value={nombre}></input>
                        {/* <small id="helpId" className="form-text text-muted">Nombre del curso</small> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label d-flex justify-content-start">Apellido paterno</label>
                        <input required type="text" className="form-control" name="apellidopaterno" id="apellidopaterno" aria-describedby="helpId"
                            placeholder="Ingrese el apellido paterno" onChange={this.cambioValor} value={apellidopaterno}></input>
                        {/* <small id="helpId" className="form-text text-muted">Apellido paterno</small> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label d-flex justify-content-start">Apellido materno</label>
                        <input required type="text" className="form-control" name="apellidomaterno" id="apellidomaterno" aria-describedby="helpId"
                            placeholder="Ingrese el apellido materno" onChange={this.cambioValor} value={apellidomaterno}></input>
                        {/* <small id="helpId" className="form-text text-muted">apellido materno</small> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label d-flex justify-content-start">Cedula</label>
                        <input required type="text" className="form-control" name="cedula" id="cedula" aria-describedby="helpId"
                            placeholder="Ingrese la cedula" onChange={this.cambioValor} value={cedula}></input>
                        {/* <small id="helpId" className="form-text text-muted">Cedula del estudiante</small> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label d-flex justify-content-start">Correo electronico</label>
                        <input required type="text" className="form-control" name="correoelectronico" id="correoelectronico" aria-describedby="helpId"
                            placeholder="Ingrese el correo electronico" onChange={this.cambioValor} value={correoelectronico}></input>
                        {/* <small id="helpId" className="form-text text-muted">Correoelectronico</small> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label d-flex justify-content-start">Telefono</label>
                        <input required type="text" className="form-control" name="telefono" id="telefono" aria-describedby="helpId"
                            placeholder="Ingrese el telefono" onChange={this.cambioValor} value={telefono}></input>
                        {/* <small id="helpId" className="form-text text-muted">Telefono</small> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label d-flex justify-content-start">Celular</label>
                        <input required type="text" className="form-control" name="telefonocelular" id="telefonocelular" aria-describedby="helpId"
                            placeholder="Ingrese el telefono celular" onChange={this.cambioValor} value={telefonocelular}></input>
                        {/* <small id="helpId" className="form-text text-muted">Telefono celular</small> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label d-flex justify-content-start">Fecha de nacimiento</label>
                        <input required type="date" className="form-control" name="fechanacimiento" id="fechanacimiento" aria-describedby="helpId"
                            placeholder="Ingrese la fecha de nacimiento" onChange={this.cambioValor} value={fechanacimiento}></input>
                        {/* <small id="helpId" className="form-text text-muted">Fecha de nacimiento</small> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label d-flex justify-content-start">Genero</label>
                        <input required type="text" className="form-control" name="sexo" id="sexo" aria-describedby="helpId"
                            placeholder="Ingrese el genero del estudiante" onChange={this.cambioValor} value={sexo}></input>
                        {/* <small id="helpId" className="form-text text-muted">Genero</small> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label d-flex justify-content-start">Nacionalidad</label>
                        <input required type="text" className="form-control" name="nacionalidad" id="nacionalidad" aria-describedby="helpId"
                            placeholder="Ingrese la nacionalidad del estudiante" onChange={this.cambioValor} value={nacionalidad}></input>
                        {/* <small id="helpId" className="form-text text-muted">Nacionalidad</small> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label d-flex justify-content-start">Direccion</label>
                        <input required type="text" className="form-control" name="direccion" id="direccion" aria-describedby="helpId"
                            placeholder="Ingrese la direccion del estudiante" onChange={this.cambioValor} value={direccion}></input>
                        {/* <small id="helpId" className="form-text text-muted">Direccion</small> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label d-flex justify-content-start">Grupo</label>
                        <select required className="form-select" value={idCarreras} onChange={this.cambioSelect}>
                            <option disabled selected value="">Seleccione uno</option>
                            {opciones.map((option) => (
                                <option key={option.id} value={option.id}>{option.nombre}</option>
                            ))}
                        </select>
                    </div>
                    <div className="text-center">
                        <a name="" id="" className="btn btn-secondary me-2 " href="ListarEstudiante" role="button">Lista estudiantes</a>
                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </div>
                </form>
                <Modal show={modalExitoso}>
                    <Modal.Header className='bg-info'>
                        <Modal.Title>Proceso exitoso</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Estudiante agregado con éxito</p>
                        <a onClick={() => this.closeModal()} href="ListarEstudiante" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</a>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default CrearEstudiante;