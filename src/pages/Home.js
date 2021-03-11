


import '../css/Home.css';
import { useState } from 'react';
import axios from 'axios';


function Home(props) {

    const handleClick = () => {
        props.setPage("login")
    }

    return (
        <div className="Home">
            <div className="header">
                <a className="ButtonHeader2" onClick={() => {props.setPage("contact")}}>
                    Contact
                </a>
                <a className="ButtonHeader" onClick={handleClick}>
                    Sign in
                </a>
                <a className="ButtonHeader" onClick={handleClick}>
                    Sign up
                </a>
                <a className="ButtonHeader" onClick={handleClick}>
                    About
                </a>
            </div>
            <p className="title">e-Teaching</p>
            <p className="text"> 
                At e-teaching we believe everyone should have access to online courses within the field of software development. As the world is becoming increasingly digital, the need for workforce with software development skills is ever increasing....  
            </p>
            <div className="containerButtonLevel">
                <button className="ButtonLevel" onClick={handleClick}>
                    Level0
                </button>
                <button className="ButtonLevel" onClick={handleClick}>
                    Level1
                </button>
                <button className="ButtonLevel" onClick={handleClick}>
                    Level2
                </button>
                <button className="ButtonLevel" onClick={handleClick}>
                    Level3
                </button>
            </div>
        </div>
    );
}
    
export default Home;