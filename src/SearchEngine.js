import React, { useState } from "react";
export default function SearchEngine() {
    let [city, setCity] = useState(" ");
    let [output, setOutput] = useState(" ");

    function handleSubmit(event){
        event.preventDefault();
        setOutput(`It is currently 19℃ in ${city}`);
    }
    function updateCity(event){
        setCity(event.target.value);
    }
    return(
        <div className="SearchEngine">
        <form onSubmit={handleSubmit}>
        <input type = "search" placeholder="Type a city" onChange = {updateCity} />
        <input type = "submit" value = "Search" />
        </form>
        <h2>{output}</h2>
        </div>
    )
}