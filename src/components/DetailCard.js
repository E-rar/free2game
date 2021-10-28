import React, { Component } from 'react';
import '../Sass/DetailCard.scss';

class DetailCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            isLoading: false,
        }
    }
    componentDidMount() {
        fetch(`https://www.freetogame.com/api/game?id=${this.props.match.params.id}`)
        // ${this.props.match.params.id}
            .then(response => response.json())
            .then(json => this.setState({ games: json, isLoading: true },() => this.setState({ req: true  })))
    }
    render() {
        return (
            <body>
                <section className="item">
                    <div>
                    <div className="gamehead">
                        <div className="gameheadImage">
                        {this.state.req ? <img src={this.state.games.screenshots[0].image} alt="" /> : null}
                        </div>
                    </div>
                    <div className="about">
                        <div className="aboutDetails">
                            <h1 className="gameheadTitle">{this.state.games.title}</h1>
                            <div className="aboutimage">
                                <img src={this.state.games.thumbnail} alt="" />
                            </div>
                            <h2 className="platform1">Platform: {this.state.games.platform}</h2>
                            <p className="genre1">{this.state.games.genre}</p>
                            <a className="buttonPlay" href={this.state.games.game_url}>Play Now</a>
                        </div>
                        <div className="abouttext">
                            <h2>About</h2>
                            <p>{this.state.games.description}</p>
                        </div>
                    </div>
                </div>
                <div className="twoscreens">
                    <div className="screenone">
                        {this.state.req ? <img src={this.state.games.screenshots[1].image} alt="" /> : null}
                    </div>
                    <div className="screentwo">
                        {this.state.req ? <img src={this.state.games.screenshots[2].image} alt="" /> : null}
                    </div>
                </div>
                <div className="info">
                    <div className="additional">
                        <div>
                            <h2>Additional Information</h2>
                            <p>Please note this free-to-play game may or may not offer optional in-game purchases.</p>
                        </div>
                        <div className="info1">
                            <h3>Developer</h3>
                            <p>{this.state.games.developer}</p>
                        </div>
                        <div className="info2">
                            <h3>Publisher</h3>
                            <p>{this.state.games.publisher}</p>
                        </div>
                        <div className="info3">
                            <h3>Release Date</h3>
                            <p>{this.state.games.release_date}</p>
                        </div>
                    </div>
                    <div className="system">
                        <h2>Minimum System Requirements <br />(Windows)</h2>
                        <table>
                            <tr>
                                <th>OS</th>
                                <th>Processor</th>
                            </tr>
                            <tr>
                                {this.state.req ? <td>{this.state.games.minimum_system_requirements.os}</td> : null}
                                {this.state.req ? <td>{this.state.games.minimum_system_requirements.processor}</td> : null}
                            </tr>
                            <tr>
                                <th>Memory</th>
                                <th>Graphics</th>
                            </tr>
                            <tr>
                                {this.state.req ? <td>{this.state.games.minimum_system_requirements.memory}</td> : null}
                                {this.state.req ? <td>{this.state.games.minimum_system_requirements.graphics}</td> : null}
                            </tr>
                            <tr>
                                <th>Storage</th>
                                <th>Additional Notes</th>
                            </tr>
                            <tr>
                                {this.state.req ? <td>{this.state.games.minimum_system_requirements.storage}</td> : null}
                                {this.state.req ? <td>{this.state.games.minimum_system_requirements.info}</td> : null}
                            </tr>
                        </table>
                    </div>
                </div>
                </section>
            </body>
        );
    }
}

export default DetailCard;