import React from 'react';
import "./Contacts.css"; 
import { useForm } from "react-hook-form";

function Contacts() {
    return (
        
        <main>
            <p>Qui sommes nous?</p>
            <div className="doorContainer">
                <div className="wrapper">
                    <img src={require("../assets/unnamed.jpg")} alt="profile"/>
                    <div id="left-door" className="door"></div>
                    <div id="right-door" class="door"></div> 
                </div>
                <div className="wrapper">
                    <img src="assets/unnamed.jpg" alt="profile"/>
                    <div id="left-door" className="door"></div>
                    <div id="right-door" class="door"></div> 
                </div>        
                <div className="wrapper">
                    <img src="assets/unnamed.jpg" alt="profile"/>
                    <div id="left-door" className="door"></div>
                    <div id="right-door" class="door"></div> 
                </div>        
                <div className="wrapper">
                    <img src="assets/unnamed.jpg" alt="profile"/>
                    <div id="left-door" className="door"></div>
                    <div id="right-door" class="door"></div> 
                </div>        
                <div className="wrapper">
                    <img src="assets/unnamed.jpg" alt="profile"/>
                    <div id="left-door" className="door"></div>
                    <div id="right-door" class="door"></div> 
                </div>
           </div>

            
        </main>
    )
}

export default Contacts
