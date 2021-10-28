import '../Sass/TopCard.scss'
import React, { Component } from 'react';
import windows from '../img/Windows.png'
import Platform from './Platform'
import Genre from './Genre'
import Button from './Button'

class TopCardItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            // <div className="TopCardItem">
            //     <div>
            //         <div><img src="https://unsplash.it/200" alt="" /></div>
            //         <div className="number">{this.props.number}</div>
            //     </div>
            //     <div className="content">
            //         <h1>Genshin Impact</h1>
            //         <div className="buttonContainer">
            //             <Button className="buttonRed" content="READ MORE" /><br /><br /><br />
            //             <Platform platform={windows} />
            //             <Genre genre='{this.props.genre}' />
            //             {/* hier die gänsefüßchen raus und prop rein  */}
            //         </div>
            //     </div>
            // </div>
            <div className="TopCardItem">
                <div className="thumbnail1">
                    <div className="number">{this.props.number}</div>
                </div>
                <div className="content">
                    <h3>Enlisted</h3>
                    <div className="buttonContainer">
                        <Button className="buttonRed" content="READ MORE" /><br /><br /><br />
                        <Platform platform={windows} />
                        <Genre genre='Shooter' />
                        {/* hier die gänsefüßchen raus und prop rein  */}
                    </div>
                </div>
            </div>
        );
    }
}

export default TopCardItem;