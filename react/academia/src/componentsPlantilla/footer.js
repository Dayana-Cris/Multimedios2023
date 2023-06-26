import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (            
            <div class="col-12 fw-bold text-center p-4 bg-dark text-white footer">
                DC Universidad. Todos los derechos reservados&copy;2023
            </div>
        );
    }
}

export default Footer;