import React from "react";

class CrearGrupo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            datosCargados: false

        }
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
                window.location = 'ListarGrupo'
            })
            .catch(console.log)//muestra errores
    }

    render() {
        const { nombre, descripcion, tiempo, datosCargados } = this.state;
        return (
            <div className="container-fluid">
                <h1 className="mb-3">Agregar Grupo</h1>
                <div className="d-flex justify-content-center align-items-center">
                    <form id="formulario" onSubmit={this.enviarDatos}>
                        <div className="mb-3" >
                            <label htmlFor="" className="form-label">Nombre</label>
                            <input required type="text" className="form-control" name="nombre" id="nombre" aria-describedby="helpId"
                                placeholder="Ingrese el nombre del grupo" onChange={this.cambioValor} value={nombre}></input>
                            {/* <small id="helpId" className="form-text text-muted">Nombre del curso</small> */}
                        </div>
                        <div className="text-center">
                            <button type="reset" className="btn btn-danger me-3">Limpiar</button>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default CrearGrupo;