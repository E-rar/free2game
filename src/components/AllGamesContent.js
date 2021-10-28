import React, { Component } from 'react';
import SingleCardSmall from './SingleCardSmall'
import '../Sass/Dropdown.scss'
// import '../css/Selectmenu.css';

class AllGamesContent extends Component {
    constructor() {
        super();

        this.state = {
            isToggleOn: false,
            isToggleOn1: false,
            isToggleOn2: false,
            data: [],
            dataOriginal: [],
            isLoaded: false,
            genres:[      'pvp', 'pve', 'pixel', 'voxel', 'zombie', 'turn-based', 'first-person', 'third-Person', 'top-down', 'tank', 'space', 'sailing','side-scroller', 'superhero', 'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps', 'mmotps', '3d', '2d', 'anime', 'fantasy', 'sci-fi', 'fighting', 'action-rpg', 'action', 'military', 'martial-arts', 'flight', 'low-spec', 'tower-defense', 'horror', 'mmorts'],
            platform: [{ feld: "All", isChecked: false }, { feld: "PC (Windows)", isChecked: false }, { feld: "Web Browser", isChecked: false }],
            
            genre: [{ feld: "MMORPG", isChecked: false }, { feld: "Shooter", isChecked: false }, { feld: "Strategy", isChecked: false }, { feld: "MOBA", isChecked: false }, { feld: "Racing", isChecked: false }, { feld: "Sports", isChecked: false }, { feld: "Social", isChecked: false }, { feld: "Sandbox", isChecked: false }, { feld: "Open-world", isChecked: false }, { feld: "Survival", isChecked: false }, { feld: "PVP", isChecked: false }, { feld: "PVE", isChecked: false }, { feld: "Pixel", isChecked: false }, { feld: "Voxel", isChecked: false }, { feld: "Zombie", isChecked: false }, { feld: "Turn based", isChecked: false }, { feld: "First-person", isChecked: false }, { feld: "Third-Person", isChecked: false }, { feld: "Top-down", isChecked: false }, { feld: "Tank", isChecked: false }, { feld: "Space", isChecked: false }, { feld: "Sailing", isChecked: false }, { feld: "Side-scroller", isChecked: false }, { feld: "Superhero", isChecked: false }, { feld: "Permadeatch", isChecked: false }, { feld: "Card", isChecked: false }, { feld: "Battle-royale", isChecked: false }, { feld: "MMOFPS", isChecked: false }, { feld: "MMOTPS", isChecked: false }, { feld: "3D", isChecked: false }, { feld: "2D", isChecked: false }, { feld: "Anime", isChecked: false }, { feld: "Fantasy", isChecked: false }, { feld: "Sci-fi", isChecked: false }, { feld: "Fighting", isChecked: false }, { feld: "Action-RPG", isChecked: false }, { feld: "Action", isChecked: false }, { feld: "Military", isChecked: false }, { feld: "Martial-arts", isChecked: false }, { feld: "Flight", isChecked: false }, { feld: "Low-Spec", isChecked: false }, { feld: "Tower-defense", isChecked: false }, { feld: "Horror", isChecked: false }, { feld: "MMORTS", isChecked: false }],
            
            sort: [{ feld: "relevance", isChecked: false }, { feld: "popularity", isChecked: false }, { feld: "release-date", isChecked: false }, { feld: "alphabetical", isChecked: false }]
        }

        this.showMenu = this.showMenu.bind(this);
        this.showMenu1 = this.showMenu1.bind(this);
        this.showMenu2 = this.showMenu2.bind(this);

    }


    componentDidMount() {
        fetch('https://www.freetogame.com/api/games')
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json, dataOriginal: json, isLoaded: true });
            })
    }

    
    loadApi = (sorting) => {
        fetch(`https://www.freetogame.com/api/games?sort-by=${sorting}`)
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json, dataOriginal: json, isLoaded: true });
            })
    }

    showMenu = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
        console.log(this.state.isToggleOn)
    }

    showMenu1 = (event) => {
        this.setState(prevState => ({
            isToggleOn1: !prevState.isToggleOn1
        }))
    }

    showMenu2 = (event) => {
        this.setState(prevState => ({
            isToggleOn2: !prevState.isToggleOn2
        }))
    }

    // Platform wurde zurückgesetzt

    handleAllPlatform = (item) => {
        let platformupdate = this.state.platform
        platformupdate[item].isChecked = !this.state.platform[item].isChecked
        console.log(platformupdate)
        this.setState({ platform: platformupdate })
        this.setState({ data: this.state.dataOriginal })
    }
    // Genre wurde zurückgesetzt
    handleAllGenre = (item) => {
        let genreUpdate = this.state.genre
        genreUpdate[item].isChecked = !this.state.genre[item].isChecked
        console.log(genreUpdate)
        this.setState({ genre: genreUpdate })
        this.setState({ data: this.state.dataOriginal })
        console.log(this.state.platform)
    }
    // Sort wurde zurückgesetzt
    handleAllSort = (item) => {
        let sortUpdate = this.state.sort
        sortUpdate[item].isChecked = !this.state.sort[item].isChecked
        console.log(sortUpdate)
        this.setState({ sort: sortUpdate })
        this.setState({ data: this.state.dataOriginal })
        console.log(this.state.sort)
        this.loadApi('relevance')
    }

    // Platform wurde gewählt
    handlePlatform = (item) => {

        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))

        let platformupdate = this.state.platform
        platformupdate[item].isChecked = !this.state.platform.isChecked

        this.setState({ platform: platformupdate })
        console.log(this.state.platform)
        this.handleFilter()
    }
    // Genre wurde gewählt
    handleGenre = (item) => {

        this.setState(prevState => ({
            isToggleOn1: !prevState.isToggleOn1
        }))

        let genreUpdate = this.state.genre
        genreUpdate[item].isChecked = !this.state.genre.isChecked

        this.setState({ genre: genreUpdate })
        console.log(this.state.genre)
        this.handleFilterGenre()
    }

    // Filter für Platform
    handleFilter = () => {
        let activePlatforms = this.state.platform.map(pl => pl.isChecked ? pl.feld : null
   
        )

        let dataShooter = [...this.state.data]
        let temp2 = dataShooter.filter(elem => activePlatforms.includes(elem.platform) ? elem : null

        )
        console.log(temp2)
        this.setState({ data: temp2 })
    }
    // Filter für Genre
    handleFilterGenre = () => {
        let activeGenres = this.state.genre.map(pl => pl.isChecked ? pl.feld : null
        )
        let dataShooter = [...this.state.data]
        let temp2 = dataShooter.filter(elem => activeGenres.includes(elem.genre) ? elem : null
        )
        console.log(temp2)
        this.setState({ data: temp2 })
    }

    //Filter für Sort 
    handleSort = (sort, item) => {
        this.loadApi(sort)
        console.log(this.state.data)
        this.setState(prevState => ({
            isToggleOn2: !prevState.isToggleOn2
        }))


        let sortUpdate = this.state.sort
        sortUpdate[item].isChecked = !this.state.sort.isChecked
        console.log(this.state.sort)

    }

    render() {
        return (
            <div>
                <div class="filter">

                    <div className="allselect  collaps_grid">
                        <div className="Collapsible">
                            <button className={`Collapsible__trigger ${this.state.isToggleOn?'is-closed':'is-open'}`} onClick={this.showMenu}>
                                Platform
                                {
                                    this.state.isToggleOn ?
                                        <img src="./img/DropdownClosed.png" alt="" /> : <img src="./img/DropdownOpen.png" alt="" />
                                }
                            </button>
                            {
                                this.state.isToggleOn
                                    ? (
                                        <div className="listContainer">
                                            <div><input type="checkbox" defaultChecked={this.state.platform[0].isChecked} onChange={(e) => this.handlePlatform(0)} /><span> All Platforms </span></div> 
                                            <div className="listItem"><input type="checkbox" defaultChecked={this.state.platform[1].isChecked} onChange={(e) => this.handlePlatform(1)} /><span> Windows (PC) </span></div>
                                            <div className="listItem"><input type="checkbox" defaultChecked={this.state.platform[2].isChecked} onChange={(e) => this.handlePlatform(2)} /><span> Browser (Web) </span></div>
                                        </div>
                                    )
                                    : (
                                        null
                                    )
                            }

                        </div>
                        <div className="Collapsible">
                            <button className={`Collapsible__trigger ${this.state.isToggleOn1?'is-closed':'is-open'}`} onClick={(e) => this.showMenu1(e)}>Genre/Tag
                                {
                                    this.state.isToggleOn1 ?
                                        <img src="./img/arrowdown.png" alt="" /> : <img src="./img/dropdown.png" alt="" />
                                }
                            </button>

                            {
                                this.state.isToggleOn1
                                    ? (
                                        <div className="listContainer">
                                            <div className="listItem"><input  type="checkbox" defaultChecked={this.state.genre[0].isChecked} onChange={(e) => this.handleGenre(0)} /><span  > MMORPG </span></div> 
                                            <div><input type="checkbox" defaultChecked={this.state.genre[1].isChecked} onChange={(e) => this.handleGenre(1)} /><span> Shooter</span></div>
                                            <div><input type="checkbox" defaultChecked={this.state.genre[2].isChecked} onChange={(e) => this.handleGenre(2)} /><span> Strategy </span></div>
                                            <div className="moba"><input type="checkbox" defaultChecked={this.state.genre[3].isChecked} onChange={(e) => this.handleGenre(3)} /><span> MOBA </span></div>
                                            <div className="moba"><input type="checkbox" defaultChecked={this.state.genre[4].isChecked} onChange={(e) => this.handleGenre(4)} /><span> {this.state.genre[4].feld} </span></div>
                                            <div className="moba"><input type="checkbox" defaultChecked={this.state.genre[5].isChecked} onChange={(e) => this.handleGenre(5)} /><span> {this.state.genre[5].feld} </span></div>
                                            <div className="moba"><input type="checkbox" defaultChecked={this.state.genre[6].isChecked} onChange={(e) => this.handleGenre(6)} /><span> {this.state.genre[6].feld} </span></div>
                                            <div className="moba"><input type="checkbox" defaultChecked={this.state.genre[7].isChecked} onChange={(e) => this.handleGenre(7)} /><span> {this.state.genre[7].feld} </span></div>
                                            <div className="moba"><input type="checkbox" defaultChecked={this.state.genre[8].isChecked} onChange={(e) => this.handleGenre(8)} /><span> {this.state.genre[8].feld} </span></div>
                                            <div className="moba"><input type="checkbox" defaultChecked={this.state.genre[9].isChecked} onChange={(e) => this.handleGenre(9)} /><span> {this.state.genre[9].feld} </span></div>
                                            <div className="moba"><input type="checkbox" defaultChecked={this.state.genre[10].isChecked} onChange={(e) => this.handleGenre(10)} /><span> {this.state.genre[10].feld} </span></div>
                                            <div className="moba"><input type="checkbox" defaultChecked={this.state.genre[11].isChecked} onChange={(e) => this.handleGenre(11)} /><span> {this.state.genre[11].feld} </span></div>
                                            <div className="moba"><input type="checkbox" defaultChecked={this.state.genre[12].isChecked} onChange={(e) => this.handleGenre(12)} /><span> {this.state.genre[12].feld} </span></div>
                                            <div className="moba"><input type="checkbox" defaultChecked={this.state.genre[13].isChecked} onChange={(e) => this.handleGenre(13)} /><span> {this.state.genre[13].feld} </span></div>
                                            <div className="moba"><input type="checkbox" defaultChecked={this.state.genre[14].isChecked} onChange={(e) => this.handleGenre(14)} /><span> {this.state.genre[14].feld} </span></div>
                                            <div className="moba"><input type="checkbox" defaultChecked={this.state.genre[15].isChecked} onChange={(e) => this.handleGenre(15)} /><span> {this.state.genre[15].feld} </span></div>
                                            <div className="moba"><input type="checkbox" defaultChecked={this.state.genre[16].isChecked} onChange={(e) => this.handleGenre(16)} /><span> {this.state.genre[16].feld} </span></div>
                                            <div className="moba"><input type="checkbox" defaultChecked={this.state.genre[17].isChecked} onChange={(e) => this.handleGenre(17)} /><span> {this.state.genre[17].feld} </span></div>
                                        </div>

                                    )
                                    : (
                                        null
                                    )
                            }
                        </div>

                        <div className="Collapsible">
                            <button className={`Collapsible__trigger ${this.state.isToggleOn2?'is-closed':'is-open'}`} onClick={this.showMenu2}>
                                Sort by
                                {
                                    this.state.isToggleOn2 ?
                                        <img src="./img/arrowdown.png" alt="" /> : <img src="./img/dropdown.png" alt="" />
                                }
                            </button>

                            {
                                this.state.isToggleOn2
                                    ? (
                                        <div className="listContainer">
                                            <div><input type="checkbox" defaultChecked={this.state.sort[0].isChecked} onChange={(e) => this.handleSort('relevance', 0)} /><span> Relevance </span></div> 
                                            <div><input type="checkbox" defaultChecked={this.state.sort[1].isChecked} onChange={(e) => this.handleSort('popularity', 1)} /><span> Popularity</span></div>
                                            <div><input type="checkbox" defaultChecked={this.state.sort[2].isChecked} onChange={(e) => this.handleSort('release-date', 2)} /><span> Release Date </span></div>
                                            <div className="moba"><input type="checkbox" defaultChecked={this.state.sort[3].isChecked} onChange={(e) => this.handleSort('alphabetical', 3)} /><span> Alphabetical </span></div>
                                        </div>
                                    )
                                    : (
                                        null
                                    )
                            }
                        </div>
                    </div>
                    <div className="Tags">
                        {
                            this.state.platform[1].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.platform[1].isChecked} onChange={(e) => this.handleAllPlatform(1)} /><span> Windows (PC) </span></div>
                                : null
                        }
                        {
                            this.state.platform[2].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.platform[2].isChecked} onChange={(e) => this.handleAllPlatform(2)} /><span> Browser (Web) </span></div>
                                : null
                        }
                        {
                            this.state.genre[0].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.genre[0].isChecked} onChange={(e) => this.handleAllGenre(0)} /><span> MMORPG</span></div>
                                : null
                        }
                        {
                            this.state.genre[1].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.genre[1].isChecked} onChange={(e) => this.handleAllGenre(1)} /><span> Shooter</span></div>
                                : null

                        }
                        {
                            this.state.genre[2].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.genre[2].isChecked} onChange={(e) => this.handleAllGenre(2)} /><span> Strategy </span></div>
                                : null
                        }
                        {
                            this.state.genre[3].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.genre[3].isChecked} onChange={(e) => this.handleAllGenre(3)} /><span> MOBA </span></div>
                                : null
                        }
                        {
                            this.state.genre[4].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.genre[4].isChecked} onChange={(e) => this.handleAllGenre(4)} /><span> {this.state.genre[4].feld} </span></div>
                                : null
                        }
                        {
                            this.state.genre[5].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.genre[5].isChecked} onChange={(e) => this.handleAllGenre(5)} /><span> {this.state.genre[5].feld} </span></div>
                                : null
                        }
                        {
                            this.state.genre[6].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.genre[6].isChecked} onChange={(e) => this.handleAllGenre(6)} /><span> {this.state.genre[6].feld} </span></div>
                                : null
                        }
                        {
                            this.state.genre[7].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.genre[7].isChecked} onChange={(e) => this.handleAllGenre(7)} /><span> {this.state.genre[7].feld} </span></div>
                                : null
                        }
                        {
                            this.state.genre[8].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.genre[8].isChecked} onChange={(e) => this.handleAllGenre(8)} /><span> {this.state.genre[8].feld} </span></div>
                                : null
                        }
                        {
                            this.state.genre[9].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.genre[9].isChecked} onChange={(e) => this.handleAllGenre(9)} /><span> {this.state.genre[9].feld} </span></div>
                                : null
                        }
                        {
                            this.state.genre[10].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.genre[10].isChecked} onChange={(e) => this.handleAllGenre(10)} /><span> {this.state.genre[10].feld} </span></div>
                                : null
                        }
                        {
                            this.state.genre[11].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.genre[11].isChecked} onChange={(e) => this.handleAllGenre(11)} /><span> {this.state.genre[12].feld} </span></div>
                                : null
                        }
                        {
                            this.state.genre[13].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.genre[13].isChecked} onChange={(e) => this.handleAllGenre(13)} /><span> {this.state.genre[13].feld} </span></div>
                                : null
                        }
                        {
                            this.state.genre[14].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.genre[14].isChecked} onChange={(e) => this.handleAllGenre(14)} /><span> {this.state.genre[14].feld} </span></div>
                                : null
                        }
                        {
                            this.state.genre[15].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.genre[15].isChecked} onChange={(e) => this.handleAllGenre(15)} /><span> {this.state.genre[15].feld} </span></div>
                                : null
                        }
                        {
                            this.state.genre[16].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.genre[16].isChecked} onChange={(e) => this.handleAllGenre(16)} /><span> {this.state.genre[16].feld} </span></div>
                                : null
                        }
                        {
                            this.state.genre[17].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.genre[17].isChecked} onChange={(e) => this.handleAllGenre(17)} /><span> {this.state.genre[17].feld} </span></div>
                                : null
                        }
                        {
                            this.state.sort[0].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.sort[0].isChecked} onChange={(e) => this.handleAllSort(0)} /><span> Relevance </span></div>
                                : null
                        }
                        {
                            this.state.sort[1].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.sort[1].isChecked} onChange={(e) => this.handleAllSort(1)} /><span> Popularity</span></div>
                                : null
                        }
                        {
                            this.state.sort[2].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.sort[2].isChecked} onChange={(e) => this.handleAllSort(2)} /><span> Release Date </span></div>
                                : null
                        }
                        {
                            this.state.sort[3].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.sort[3].isChecked} onChange={(e) => this.handleAllSort(3)} /><span> Alphabetical </span></div>
                                : null
                        }
                    </div>
                </div>

                <div className="AllGamesGrid">
                    {this.state.isLoaded ?

                        this.state.data.map((e, i) => 
                        <SingleCardSmall 
                        key={i}
                        thumbnail={e.thumbnail}
                        title={e.title}
                        short_description={e.short_description}
                        genre={e.genre}
                        platform={e.platform}
                        >
                        </SingleCardSmall>)
                        : "Loading ..."
                    }
                </div>

            </div>
                    );
                }
            }
            export default AllGamesContent;