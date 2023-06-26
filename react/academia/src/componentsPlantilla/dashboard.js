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
            <body>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="img/index/instalacion1.jpg" alt="Imagen 1" />
                        <Carousel.Caption>
                            <h1 className="fw-bold">Universidad DC</h1>
                            <p>Ofrecemos distintas carreras que se ajustan a tus sueños.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="img/index/estudiando1.jpg" alt="Imagen 2" />
                        <Carousel.Caption>
                            <h3>Estudiantes</h3>
                            <p>Nuestros estudiantes, cuentan con espacios abiertos donde pueden relajarse y estudiar
                                tranquilamente</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="img/index/estudiantes1.jpg" alt="Imagen 2" />
                        <Carousel.Caption>
                            <h3>Profesores</h3>
                            <p>Contamos con más de 100 profesores capacitados para enseñarte de una manera innovadora.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="container-fluid">

                    <div class="row align-items-center mb-4 ps-2 mt-3">
                        <div class="col-xl-6 col-lg-6 col-md-6 float-left">
                            <video src="videos/quienesSomos.mp4" muted autoPlay loop className="img-fluid" />
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 float-left p-5">
                            <div class="border-bottom border-gray border-3 mt-3"></div>
                            <h2 class="mt-4 mb-4 fw-bold">¿QUIÉNES SOMOS?</h2>
                            <p class="textJustify">
                                La Universidad DC es una destacada institución costarricense,
                                reconocida a nivel mundial por su excelencia académica y
                                compromiso con la formación integral de sus estudiantes. Durante los últimos
                                10 años, nos hemos enorgullecido de graduar a miles de estudiantes, provenientes
                                tanto de Costa Rica como de diversas partes del mundo, quienes han encontrado
                                en nuestra universidad un ambiente propicio para su desarrollo intelectual y
                                profesional. Nuestro enfoque pedagógico se basa en la calidad de la enseñanza,
                                la investigación de vanguardia y la promoción de valores éticos y responsabilidad social.
                            </p>
                            <div class=" mt-4 border-bottom border-gray border-3 mb-4"></div>
                        </div>
                    </div>


                </div>
            </body>

        );
    }
}

export default Dashboard;