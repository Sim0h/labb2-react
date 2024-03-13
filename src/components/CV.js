import React from "react";
import Header from "./Header";
import profilPic from "../images/profilbild.jpg"


function CV(){
    return(
        <div>
            <Header/>
            <header><h1>Curriculum Vitae</h1></header>
                <div className="container-column">
                <div className="left-column"> 
                <div className="profile">
                    <img src={profilPic} alt="profilbild" style={{height:200, width:200}}/>
                </div>
                <h3><i className="fa fa-book"></i> Skills</h3>
                <p>C#</p>
                <div className="progress-bar1">
                    <div className="progress1"><span className="progress-text1">60%</span></div>
                </div><br />
                <p>HTML & CSS</p>
                <div className="progress-bar2">
                    <div className="progress2"><span className="progress-text2">40%</span></div>
                </div><br />
                <p>SQL and EF</p>
                <div className="progress-bar3">
                    <div className="progress3"><span className="progress-text1">60%</span></div>
                </div>
            </div>
            <div className="right-column">
                <div className="right-top-column">
                    <h2><i className="fa fa-star-o"></i> Key Summary</h2>
                        <p>Jag är 29 år gammal och sedan tidigare jobbat med Projektledning inom Byggbranchen.<br />
                        Jag har nyligen valt att byta karriärspår och följer nu min passion som Systemutvecklare.<br />
                        Med min bakgrund som Projektledare och personlig nyfikenhet för teknik, <br />strävar jag nu efter att utvecklas och skapa nya innovativa lösningar inom Systemutveckling.
                        </p>
                </div>
                <div className="right-lower-column">
                    <h2><i className="fa fa-briefcase"></i> Work Experience</h2>
                    <h4>Projektledare - Strängbetong</h4>
                    <h5><i className="fa fa-calendar"></i> 2018-2023</h5>
                    <h4>Projekteringsledare - Strängbetong</h4>
                    <h5><i className="fa fa-calendar"></i> 2017-2018</h5>
                    <br />
                    <h2><i className="fa fa-spinner"></i> Education</h2>
                    <h4>Campus Varberg - Systemutveckling.NET</h4>
                    <h5><i className="fa fa-calendar"></i> 2023-2025</h5>
                    <h4>Halmstad Högskola - Byggnadsingenjör</h4>
                    <h5><i className="fa fa-calendar"></i> 2014-2017</h5>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default CV