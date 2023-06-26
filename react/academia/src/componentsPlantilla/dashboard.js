// trae todo lo que tiene react para que realmente funcione 
import React from 'react';
import './plantillas.css';
import { Carousel } from 'react-bootstrap';

// imr y ccc
// React.Component, para que herede todo lo que tiene el componente
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            datosCursos: [],
        }
    }
    render() {
        const { datosCargados, datosCursos } = this.state
        return (
            <body className=''>
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100" src="img/index/instalacion1.jpg" alt="Imagen 1"/>
                            <Carousel.Caption>
                                <h1 className="fw-bold">Universidad DC</h1>
                                <p>Ofrecemos distintas carreras que se ajustan a tus sueños.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src="img/index/estudiando1.jpg" alt="Imagen 2"/>
                            <Carousel.Caption>
                                <h3>Estudiantes</h3>
                                <p>Nuestros estudiantes, cuentan con espacios abiertos donde pueden relajarse y estudiar
                                    tranquilamente</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src="img/index/estudiantes1.jpg" alt="Imagen 2"/>
                            <Carousel.Caption>
                                <h3>Profesores</h3>
                                <p>Contamos con más de 100 profesores capacitados para enseñarte de una manera innovadora.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    {/* <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true"
                                aria-label="First slide"></li>
                            <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                            <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <img src="img/instalacion1.jpg" className="w-100 d-block" alt="First slide"/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1 className="fw-bold">Universidad Benavides Zúñiga</h1>
                                        <p>Ofrecemos distintas carreras que se ajustan a tus sueños.</p>
                                    </div>
                            </div>
                            <div className="carousel-item">
                                <img src="img/estudiantes1.jpg" className="w-100 d-block" alt="Second slide"/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>Profesores</h3>
                                        <p>Contamos con más de 100 profesores capacitados para enseñarte de una manera innovadora.
                                        </p>
                                    </div>
                            </div>
                            <div className="carousel-item">
                                <img src="img/estudiando1.jpg" className="w-100 d-block" alt="Third slide"/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>Estudiantes</h3>
                                        <p>Nuestros estudiantes, cuentan con espacios abiertos donde pueden relajarse y estudiar
                                            tranquilamente</p>
                                    </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div> */}


                </div>
            </body>

        );
    }
}

export default Dashboard;