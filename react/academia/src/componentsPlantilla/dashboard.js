// trae todo lo que tiene react para que realmente funcione 
import React from 'react';
import './dashboard.css';
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
            // <body className='' style={{
            //     backgroundImage: `url("img/educacion.jpg")`,
            //     backgroundRepeat: "no-repeat",
            //     backgroundSize: "cover"
            // }}>
                <div>
                    <h1>Dashboard</h1>


                </div>
            // </body>

        );
    }
}

export default Dashboard;