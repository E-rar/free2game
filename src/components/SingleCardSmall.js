import React from "react";
import windows from '../img/Windows.png'
import browser from '../img/Browser.png'
import Platform from './Platform'
import Genre from './Genre'
import Button from './Button'
import '../Sass/singleCardSmall.scss';
import {
    Link
} from "react-router-dom";
// sfc
const SingleCardSmall = (props) => {
    return (
        <div className="singleCard1">
            <div className="cardImg">
                <img src={props.thumbnail} alt="" />
            </div>
            <div className="boxH31">
                <h3>{props.title}</h3>
            </div>
            <div className="buttonContainer1">
                <Button  content="READ MORE" />
            </div>
            <div className="smallCardGenre">
                <Platform platform={props.platform}/>
                <Genre genre= {props.genre}/>
            </div>
        </div>
    );
}

export default SingleCardSmall;