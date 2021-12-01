import React, { useState } from 'react';
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";



export default function Dictionary () {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleDictionResponse(response){
   setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
         }

    function search(event){
    event.preventDefault();
    
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
axios.get(apiUrl).then(handleDictionResponse);

let pexelsApiKey = "563492ad6f917000010000013c47a2d4108b4df7962a590629b7914f";
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
let headers = { Authorization: `Bearer ${pexelsApiKey}` };
axios
.get(pexelsApiUrl, { headers: headers }).then
(handlePexelsResponse);
    }   


   function handleKeywordChange(event){
   setKeyword(event.target.value);
   } 
    
    return(
<div className="Dictionary">
<form onSubmit={search}>

<input type="search" 
onChange={handleKeywordChange} 
placeholder="Type your word..." />
<input type="submit" className="submit" value="Search" />
</form>

<Results results={results} />
<Photos photos = {photos} />

</div>
    );
}