import {Link} from "react-router-dom";
import React, { Component } from 'react';
import windows from '../img/Windows.png';
import browser from '../img/Windows.png';
import '../Sass/Platform.scss'

class Platform extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <Link to={this.props.url} className="platform" >
                {/* <img src={this.props.platform === "Web Browser"? browser:windows} alt="" /> */}
                {/* <img src={this.props.platform}  alt="" /> */}
                {this.props.platform=="P (Windows)"?<img src={windows} alt="" />:<img src={browser}/>}
            </Link>
         );
    }
}
 
export default Platform;