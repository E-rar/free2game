import React, { Component } from 'react';
import SingleCardSmall from './SingleCardSmall'
import browser from '../img/Browser.png'
import '../Sass/Home.scss'
class HomeBrowserGrid extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            games: [],
            isLoaded: true,
            showItems: 4
        }
    }
    componentDidMount() {
        fetch('https://www.freetogame.com/api/games?platform=browser')
            .then(response => response.json())
            .then(json => {
                this.setState({ games: json.slice(0,4), isLoaded: false,allGames:json });
            })      
    }
    handleShowMore() {
        this.setState({
          showItems: 
            this.state.showItems >= this.state.games.length ?
              this.state.showItems : this.state.showItems + 4
        })
      }
    showMore=()=>{
        this.setState({ showItems:this.state.showItems + 4 },()=>{
            this.setState({ games:this.state.allGames.slice(0,this.state.showItems)});
        });
    }
    render() { 
        
        return (  
            <div>
            <div className="RecentGrid">
                {!this.state.isLoaded && this.state.games.map(e =>
                <SingleCardSmall 
                key={e.id}
                thumbnail={e.thumbnail}
                title={e.title}
                short_description={e.short_description}
                genre={e.genre}
                platform={browser}>
                </SingleCardSmall>
                )}
            </div>
            <div className="showMoreContainer">
            <button onClick={this.showMore} className="buttonRed">SHOW MORE</button>
            </div>
            </div>
        );
        
        
    }
    
}
 
export default HomeBrowserGrid;