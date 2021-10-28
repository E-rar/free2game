import React from "react";
import windowsLogo from '../img/Windows.png';
import '../Sass/singleCard.scss';
import {Link} from "react-router-dom";
import windows from '../img/Windows.png'
import Platform from './Platform'
import Genre from './Genre'
import Button from './Button'
let fill = '';
// sfc
const SingleCard = (props) => {
    console.log(props)
    return (
        <div className="singleCard">
            <div className="cardImg">
                <img src={props.thumbnail} alt="" />
            </div>
            <div className="boxH3">
                <h3>{props.title}</h3>
            </div>
            <div>
                <p className="boxP">{props.short_description.length > 80 ? `${props.short_description.substring(0, 80)} ...` : props.short_description}</p>
            </div>
            <div className="buttonContainer">
                {/* <Button className="buttonRed" content="READ MORE"/> */}
                <Link to={`/all/${props.id}`} className="buttonRed">Read More</Link>
            </div>
            <div className="cardGenre">
                {/* <a className="platform" href=""><img src={windowsLogo} alt="" /></a> */}
                <Platform platform={props.platform}/>
                <Genre genre= {props.genre}/>
            </div>
        </div>
    );
}

export default SingleCard;