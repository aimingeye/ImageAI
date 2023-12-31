import React from "react";
import './clarifai.css'

const FaceRecognition = ({box, image_url}) =>{
    return(
        <div className="center ma">
            <div className="absolute mt2">
            <img id="inputimage" alt = "" src={image_url} width={'500px'} height={'auto'}></img>
            <div className="bounding-box" style={{top : box.topRow, right : box.rightCol, bottom : box.bottomRow, left : box.leftCol}}></div>
            </div>        
        </div>
    );

}

export default FaceRecognition;
