import '../Sass/Button.scss'
import {Link} from "react-router-dom";
import React, { Component } from 'react';


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }
    render() { 
        return ( 
            <Link to={`/all/:id`} className="buttonRed">
                {this.props.content}
            </Link>
        );
    }
}

export default Button;