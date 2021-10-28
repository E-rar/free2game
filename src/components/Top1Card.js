import '../Sass/TopCard.scss'
import React, { Component } from 'react';
import windows from '../img/Windows.png'
import Platform from './Platform'
import Genre from './Genre'
import Button from './Button'
import background from "../img/Top1Card.png"

class Top1Card extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            // <div className="Top1Card">
            //     <div className="number">1</div>
            //     <div className="content">
            //         <h1>Genshin Impact</h1>
            //         <div className="buttonContainer">
            //         <Button className="buttonRed" content="READ MORE"/><br/><br/><br/>
            //         <Platform platform={windows}/>
            //         <Genre genre= '{this.props.genre}'/> 
            //         {/* hier die gänsefüßchen raus und prop rein  */}
            //         </div>
            //     </div>
            // </div>

            // Fabi
            <div className="Top1Card">
                {/* style={{ backgroundImage: `url(${background})` }} */}
                <div>
                    {/* Img als Background Image einfügen */}
                    <div className="number">1</div>
                </div>
                <div className="contentBig">
                    <h1>Genshin Impact</h1>
                    <div className="buttonContainer">
                        <Button className="buttonRed" content="READ MORE" /><br /><br /><br />
                        <Platform platform='nicht browser' />
                        <Genre genre='Fantasy' />
                        <Genre genre='MMORPG' />
                        {/* hier die gänsefüßchen raus und prop rein  */}
                    </div>
                </div>
            </div>

        );
    }
}

export default Top1Card;
// style={backgroundImage=`url("${this.props.img}")`}