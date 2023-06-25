import React from "react";

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

    enviarDatos = (e) =>{
        e.preventDefault();

        const { nombre, descripcion, tiempo } = this.state;

        var datosenviar = {
            nombre: nombre,
            descripcion: descripcion,
            tiempo: tiempo,
            usuario:'profesora D' 
        }

        fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php",
            {
                method:"POST",
                body:JSON.stringify(datosenviar)
            })//url de peticion de datos
            .then(respuesta => respuesta.json())//recibe los datos en formato json
            .then((datosrepuesta) => {            
                console.log('Datos',datosrepuesta)
                window.location = 'ListarCurso'
            })
            .catch(console.log)//muestra errores
    }

    render() {
        const { nombre, descripcion, tiempo, datosCargados } = this.state;
        return (
            <div>
                 <h1 className="mb-3">Agregar Curso</h1>
                <form id="formulario" onSubmit={this.enviarDatos}>
                    <div className="mb-3" >
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
                        <button type="reset" className="btn btn-danger me-3">Limpiar</button>
                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CrearCurso;