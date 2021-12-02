import React from "react";
import "./Dictionary.css";
import Speaker from './Speaker.png';




export default function Phonetic (props){
    return(
<div className="Phonetic">
    <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
   <span> <img src={Speaker} alt="speaker" width="30px" /> </span>
    </a>

  /{props.phonetic.text}/

</div>
    );
}