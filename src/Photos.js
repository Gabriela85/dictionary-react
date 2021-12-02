import React from "react";
import "./Dictionary.css";


export default function Photos (props){
    if (props.photos) {
   return (
<section className="Photos">
{props.photos.map(function(photo, index){
    return (
        <img src={photo.src.tiny} key={index} alt="of the searched word" />);
    
})}
</section>
    );
} else {
    return (null);
}
}