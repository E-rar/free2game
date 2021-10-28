import React, { Component } from 'react';
import './../Sass/Dropdown.scss'
import Collapsible from 'react-collapsible';
import {Link} from "react-router-dom";
import DropdownItem from './DropdownItem'
class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { 
             genres:['mmorpg', 'shooter', 'strategy', 'moba', 'racing', 'sports', 'social', 'sandbox', 'open-world', 'survival', 'pvp', 'pve', 'pixel', 'voxel', 'zombie', 'turn-based', 'first-person', 'third-Person', 'top-down', 'tank', 'space', 'sailing','side-scroller', 'superhero', 'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps', 'mmotps', '3d', '2d', 'anime', 'fantasy', 'sci-fi', 'fighting', 'action-rpg', 'action', 'military', 'martial-arts', 'flight', 'low-spec', 'tower-defense', 'horror', 'mmorts']
         }
    }
    
    render() { 
        return ( 
            <div className="collaps_grid">
            <Collapsible trigger="PLATFORM" >
            <div className="listContainer">
            <DropdownItem content="All Games"/>
            <DropdownItem content="Windows(PC)"/>
            <DropdownItem content="Browser(Web)"/>
            </div>
            </Collapsible>
            <Collapsible trigger="GENRE/TAG" >
            <div className="listContainer">
            {this.state.genres.map(e =>
                <DropdownItem content={e}/>
                )}
            </div>
            </Collapsible>
            <Collapsible trigger="SORT BY" className="sort">
            <div className="listContainer">
            <DropdownItem content="Relevance"/>
            <DropdownItem content="Popularity"/>
            <DropdownItem content="Release Date"/>
            <DropdownItem content="Alphabetical"/>
            </div>
            </Collapsible>
            </div>
         );
    }
}
 
export default Dropdown;