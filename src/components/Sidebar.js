import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Navbar from './Navbar'

class Sidebar  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isOpen:false,
            homeIsActive:true,
            allIsActive:false,
            recentIsActive:false,
         }
  
    }
    handleIsOpen= () => { //toggle um die sidebar zu öffnen und zu schließen 
        this.setState({isOpen:!this.state.isOpen});
    }
    homeRed= () => { //3 Funktionen die onClick dafür sorgen ,dass das aktive div rot wird und die anderen transparent
        this.setState({homeIsActive:true});
        this.setState({allIsActive:false});
        this.setState({recentIsActive:false});
    }
    allRed= () => {
        this.setState({homeIsActive:false});
        this.setState({allIsActive:true});
        this.setState({recentIsActive:false});
    }
    recentRed= () => {
        this.setState({homeIsActive:false});
        this.setState({allIsActive:false});
        this.setState({recentIsActive:true});
    }
    
    render() { 
   
        return ( 
            <div className="NavElement">
            <Navbar isOpen={this.state.isOpen}/>
            <div className='sidebar'style={{width:this.state.isOpen?'14vw':'4vw'}}>
                <div className="hamburger" 
                onClick={this.handleIsOpen} style={{display:this.state.isOpen?'none':'block'}}></div>
                <div className="closeButton" 
                onClick={this.handleIsOpen} style={{display:this.state.isOpen?'block':'none'}}></div>
                <div className="button_container">
                <Link to="/home" >
                    <div className="homeButton" 
                    onClick={this.homeRed} 
                    style={
                        {backgroundColor:this.state.homeIsActive?'#FF4654' : 'rgba(255, 255, 255, 0)',
                        width:this.state.isOpen?'13.5vw':'50px',
                        backgroundPositionX:this.state.isOpen?'6%':'50%'
                     }
                            } >
                            <p className="sideText">
                                {this.state.isOpen ?'Home':''}
                            </p>
                                 
                            </div>
                </Link>
                <Link to="/all">
                    <div className="allButton" onClick={this.allRed} 
                    style={{backgroundColor:this.state.allIsActive?'#FF4654' : 'rgba(255, 255, 255, 0)' ,
                            width:this.state.isOpen?'13.5vw':'50px',
                            backgroundPositionX:this.state.isOpen?'0%':'50%'}}>
                            <p className="sideText">
                                {this.state.isOpen ?'All Games':''}
                            </p>
                    </div>
                </Link>
                <Link to="/recent">
                    <div className="addedButton" onClick={this.recentRed} 
                    style={{backgroundColor:this.state.recentIsActive?'#FF4654' : 'rgba(255, 255, 255, 0)' ,
                            width:this.state.isOpen?'13.5vw':'50px',
                            backgroundPositionX:this.state.isOpen?'0%':''}}>
                            <p className="sideText">
                                {this.state.isOpen ?'Recently Added':''}
                            </p>
                    </div>
                </Link>
                </div>
                
                </div>
            </div>
         );
    }
}
 
export default Sidebar;