import React, { Component } from 'react';

class DropdownItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            clicked1:false
         }
    }
    toggleClicked= () => {
        this.setState({clicked1:!this.state.clicked1});
    }
    render() { 
        return ( 
            <div onClick={this.toggleClicked}>
            <div className="checkbox" >{this.state.clicked1?'X':''}</div>
            <p>{this.props.content}</p>
            
            </div>
         );
    }
}
 
export default DropdownItem;