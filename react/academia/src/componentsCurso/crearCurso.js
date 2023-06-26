import React from "react";
import './curso.css';


class CrearCurso extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            descripcion: "",
            tiempo: "",
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

        const { nombre, descripcion, tiempo } = this.state;

        var datosenviar = {
            nombre: nombre,
            descripcion: descripcion,
            tiempo: tiempo,
            usuario: 'profesora DC'
        }

        fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php",
            {
                method: "POST",
                body: JSON.stringify(datosenviar)
            })//url de peticion de datos
            .then(respuesta => respuesta.json())//recibe los datos en formato json
            .then((datosrepuesta) => {
                console.log('Datos', datosrepuesta)
                window.location = 'ListarCurso'
            })
            .catch(console.log)//muestra errores
    }

    render() {
        const { nombre, descripcion, tiempo, datosCargados } = this.state;
        return (
            <div className="container divFormulario mt-4 p-3 rounded-3">
                <h1 className="mb-3">Agregar Curso</h1>
                <form id="formulario" onSubmit={this.enviarDatos}>
                    <div className="mb-3" >
                        <label htmlFor="" className="form-label d-flex justify-content-start">Nombre</label>
                        <input required type="text" className="form-control" name="nombre" id="nombre" aria-describedby="helpId"
                            placeholder="Ingrese el nombre del curso" onChange={this.cambioValor} value={nombre}></input>
                        {/* <small id="helpId" className="form-text text-muted">Nombre del curso</small> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label d-flex justify-content-start">Descripcion</label>
                        <input required type="text" className="form-control" name="descripcion" id="descripcion" aria-describedby="helpId"
                            placeholder="Ingrese la descripcion del curso" onChange={this.cambioValor} value={descripcion}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label d-flex justify-content-start">Tiempo</label>
                        <input required type="text" className="form-control" name="tiempo" id="tiempo" aria-describedby="helpId"
                            placeholder="Ingrese el tiempo del curso" onChange={this.cambioValor} value={tiempo}></input>
                    </div>
                    <div className="text-center">
                        <a name="" id="" className="btn btn-secondary me-2 " href="ListarCurso" role="button">Lista cursos</a>
                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CrearCurso;