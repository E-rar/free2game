import Top1Card from "./Top1Card";
import TopCardItem from "./TopCardItem";
import React, { Component } from 'react';




class TopGamesFabi extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            games: [],
            isLoaded: true
         }
    }
    componentDidMount() {
        fetch('https://www.freetogame.com/api/games')
            .then(response => response.json())
            .then(json => {
                this.setState({ games: json, isLoaded: false });
            })      
    }
    render() { 
        return ( 
            <div className="topPc">
            
                
                        <><div className="bigTopPc">
                    <Top1Card/>
                </div><div className="threeTopPc">
                        <TopCardItem number='2' />
                        <TopCardItem number='3'/>
                        <TopCardItem number='4'/>
                    </div></>
                    
            
        </div>) 
    }
}
 
export default TopGamesFabi;

