import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


// imr y ccc
// React.Component, para que herede todo lo que tiene el componente
class ListarEstudiante extends React.Component {
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
            id: "",
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
            opciones: []

        }
    }
    cargarDatos() {
        fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php")//url de peticion de datos
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
        fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarEstudiantes.php",
            {
                method: "POST",
                body: JSON.stringify(datosenviar)
            })//url de peticion de datos
            .then(respuesta => respuesta.json())//recibe los datos en formato json
            .then((datosrepuesta) => {
                // window.location = '/ListarEstudiante'
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
        this.setState({
            id: objeto.id, cedula: objeto.cedula, correoelectronico: objeto.correoelectronico,
            telefono: objeto.telefono, telefonocelular: objeto.telefonocelular, fechanacimiento: objeto.fechanacimiento,
            sexo: objeto.sexo, direccion: objeto.direccion, nombre: objeto.nombre, apellidopaterno: objeto.apellidopaterno,
            apellidomaterno: objeto.apellidomaterno, nacionalidad: objeto.nacionalidad, idCarreras: objeto.idCarreras,
            usuario: objeto.usuario
        })
        this.openModal('editar');
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
        fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarEstudiantes.php",
            {
                method: "POST",
                body: JSON.stringify(datosenviar)
            })//url de peticion de datos
            .then(respuesta => respuesta.json())//recibe los datos en formato json
            .then((datosrepuesta) => {
                window.location = 'ListarEstudiante'
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
            this.setState({ modalExitoso: true})
        }
    }

    closeModal() {
        this.setState({ modalOpen: false, modalBorrar: false, modalExitoso: false })
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

    // invocar como el document ready
    componentDidMount() {
        this.cargarDatos();
        this.cargarGrupos();
    }

    render() {
        // aqui pasa a ser una constante
        const { datosCargados, datosCursos, modalOpen, id, nombre, cedula, correoelectronico, telefono, telefonocelular, fechanacimiento, sexo, direccion, apellidopaterno,
            apellidomaterno, nacionalidad, idCarreras, usuario, opciones, modalBorrar, modalExitoso } = this.state
        return (
            <div className='container'>
                <Modal show={modalOpen}>
                    <Modal.Header closeButton onClick={() => this.closeModal()}>
                        <Modal.Title>Editar estudiante</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form id="formulario" onSubmit={this.enviarDatos}>
                            <div className="mb-3" >
                                <input type="hidden" id="id" name="id" onChange={this.cambioValor} value={id}></input>
                                <label htmlFor="" className="form-label">Nombre</label>
                                <input required type="text" className="form-control" name="nombre" id="nombre" aria-describedby="helpId"
                                    placeholder="Ingrese el nombre del estudiante" onChange={this.cambioValor} value={nombre}></input>
                                {/* <small id="helpId" className="form-text text-muted">Nombre del curso</small> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Apellido paterno</label>
                                <input required type="text" className="form-control" name="apellidopaterno" id="apellidopaterno" aria-describedby="helpId"
                                    placeholder="Ingrese el apellido paterno" onChange={this.cambioValor} value={apellidopaterno}></input>
                                {/* <small id="helpId" className="form-text text-muted">Apellido paterno</small> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Apellido materno</label>
                                <input required type="text" className="form-control" name="apellidomaterno" id="apellidomaterno" aria-describedby="helpId"
                                    placeholder="Ingrese el apellido materno" onChange={this.cambioValor} value={apellidomaterno}></input>
                                {/* <small id="helpId" className="form-text text-muted">apellido materno</small> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Cedula</label>
                                <input required type="text" className="form-control" name="cedula" id="cedula" aria-describedby="helpId"
                                    placeholder="Ingrese la cedula" onChange={this.cambioValor} value={cedula}></input>
                                {/* <small id="helpId" className="form-text text-muted">Cedula del estudiante</small> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Correo electronico</label>
                                <input required type="text" className="form-control" name="correoelectronico" id="correoelectronico" aria-describedby="helpId"
                                    placeholder="Ingrese el correo electronico" onChange={this.cambioValor} value={correoelectronico}></input>
                                {/* <small id="helpId" className="form-text text-muted">Correoelectronico</small> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Telefono</label>
                                <input required type="text" className="form-control" name="telefono" id="telefono" aria-describedby="helpId"
                                    placeholder="Ingrese el telefono" onChange={this.cambioValor} value={telefono}></input>
                                {/* <small id="helpId" className="form-text text-muted">Telefono</small> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Celular</label>
                                <input required type="text" className="form-control" name="telefonocelular" id="telefonocelular" aria-describedby="helpId"
                                    placeholder="Ingrese el telefono celular" onChange={this.cambioValor} value={telefonocelular}></input>
                                {/* <small id="helpId" className="form-text text-muted">Telefono celular</small> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Fecha de nacimiento</label>
                                <input required type="date" className="form-control" name="fechanacimiento" id="fechanacimiento" aria-describedby="helpId"
                                    placeholder="Ingrese la fecha de nacimiento" onChange={this.cambioValor} value={fechanacimiento}></input>
                                {/* <small id="helpId" className="form-text text-muted">Fecha de nacimiento</small> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Genero</label>
                                <input required type="text" className="form-control" name="sexo" id="sexo" aria-describedby="helpId"
                                    placeholder="Ingrese el genero del estudiante" onChange={this.cambioValor} value={sexo}></input>
                                {/* <small id="helpId" className="form-text text-muted">Genero</small> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Nacionalidad</label>
                                <input required type="text" className="form-control" name="nacionalidad" id="nacionalidad" aria-describedby="helpId"
                                    placeholder="Ingrese la nacionalidad del estudiante" onChange={this.cambioValor} value={nacionalidad}></input>
                                {/* <small id="helpId" className="form-text text-muted">Nacionalidad</small> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Direccion</label>
                                <input required type="text" className="form-control" name="direccion" id="direccion" aria-describedby="helpId"
                                    placeholder="Ingrese la direccion del estudiante" onChange={this.cambioValor} value={direccion}></input>
                                {/* <small id="helpId" className="form-text text-muted">Direccion</small> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" class="form-label">Grupo</label>
                                <select className="form-select" value={idCarreras} onChange={this.cambioSelect}>
                                    <option disabled selected value="">Seleccione uno</option>
                                    {opciones.map((option) => (
                                        <option key={option.id} value={option.id}>{option.nombre}</option>
                                    ))}
                                </select>
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
                <h1>Listar Estudiantes</h1>
                <a name="" id="" className="btn btn-dark mb-2" href="CrearEstudiante" role="button">Agregar [+]</a>
                <div className="table-responsive">
                    <table className="table table-primary">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Cedula</th>
                                <th>Correo electronico</th>
                                <th>Telefono</th>
                                <th>telefonoCelular</th>
                                <th>Fecha nacimiento</th>
                                <th>Sexo</th>
                                <th>Direccion</th>
                                <th>Nombre</th>
                                <th>Apellido paterno</th>
                                <th>Apellido materno </th>
                                <th>Nacionalidad</th>
                                <th>IdCarrera</th>
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
                                            <td>{datosExtraidos.cedula}</td>
                                            <td>{datosExtraidos.correoelectronico}</td>
                                            <td>{datosExtraidos.telefono}</td>
                                            <td>{datosExtraidos.telefonocelular}</td>
                                            <td>{datosExtraidos.fechanacimiento}</td>
                                            <td>{datosExtraidos.sexo}</td>
                                            <td>{datosExtraidos.direccion}</td>
                                            <td>{datosExtraidos.nombre}</td>
                                            <td>{datosExtraidos.apellidopaterno}</td>
                                            <td>{datosExtraidos.apellidomaterno}</td>
                                            <td>{datosExtraidos.nacionalidad}</td>
                                            <td>{datosExtraidos.idCarreras}</td>
                                            <td>{datosExtraidos.usuario}</td>

                                            <td>
                                                <a name="" id="" className="btn btn-danger" onClick={() => this.openModal('eliminar', datosExtraidos.id)} role="button">Borrar</a>
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
                        <Modal.Title>Eliminar estudiante</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>¿Estás seguro que deseas eliminar el estudiante con id {id}</p>
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
        );

    }


}

export default ListarEstudiante;