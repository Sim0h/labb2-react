import React from "react";
import Header from "./Header";
import backGroundPic from "../images/bakgrund index.jpg"


function Home(){
    return(
        <div>
            <Header/>
            <header><h1>Home</h1></header>
            <div class="indexBGP">
            <img src={backGroundPic} alt="responsive image"/>
            <div class="overlay">
                <p>Hej! Välkommen till min Första Hemsida.<br/> Jag heter Simon Ståhl och är student på Campus Varberg. Jag läser första året på utbildningen Systemutveckling.NET</p>
            </div>
            </div>

        </div>

    );
}

export default Home