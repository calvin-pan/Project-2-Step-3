import React from "react";
import SearchBar from "../components/SearchBar.js"
import '../styles/SearchBar.css';

function Programs(){

    return (
        <div>
        <h1 className="title">Programs Offered</h1>
        <SearchBar />
       
        {/* Render the list of tutors */}
        </div>
    );

}

export default Programs;