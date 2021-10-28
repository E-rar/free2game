import React, { Component } from 'react';
import SingleCard from './SingleCard';
import Button from './Button';
import {Link} from "react-router-dom";
class GamesList extends Component {
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
            <div className="grid margin-left-top">
                {!this.state.isLoaded && this.state.games.map(e =>
                    <SingleCard 
                    key={e.id}
                    thumbnail={e.thumbnail}
                    title={e.title}
                    short_description={e.short_description}
                    genre={e.genre}
                    platform={e.platform}
                    >
                    </SingleCard>
                )}
                {/* <Button onClick={this.showMore} content='SHOW MORE'/> */}
            </div>
        );

    }
}

export default GamesList;