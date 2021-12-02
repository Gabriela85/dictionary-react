import React from "react";
import Synonyms from "./Synonyms";
import "./Dictionary.css";


export default function Meaning(props){
    return(
       <div className="Meaning">
<h3>
{props.meaning.partOfSpeech}
</h3>
{props.meaning.definitions.map(function(definition, index){
return(
<div key={index}>
    <p className="definition">
    <strong><u>Definition</u>: </strong>
    {definition.definition}
    <br />
    <br />

   <p className="example"> <em>
    {definition.example}
    </em></p>
   
    <br />
    <br />
    
    </p>

    <Synonyms synonyms={definition.synonyms} />

    </div>
);

})}
       </div> 
    );
}