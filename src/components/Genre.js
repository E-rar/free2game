import '../Sass/Genre.scss'
import {Link} from "react-router-dom";
import React, { Component } from 'react';


class Genre extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <Link to={this.props.url} className="genre" >
                {this.props.genre}
            </Link>
         );
    }
}
 
export default Genre;