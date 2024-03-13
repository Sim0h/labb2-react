import React from "react";
import Header from "./Header";
import projectOnePic from "../images/project 1.png"
import projectTwoPic from "../images/project2.jpg"
import Githubdemo from "./Githubrepos";


function Portfolio(){
    return(
    <div>
        <Header/>
        <header><h1>Portfolio</h1></header>
        <Githubdemo />
    </div>

    );
}

export default Portfolio
