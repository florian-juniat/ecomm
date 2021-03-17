


import { useState } from 'react';
import axios from 'axios';


function HeaderStart(props) {

    const handleClick = () => {
        props.setPage("home")
    }

    return (
        <div className="header">
                <a className="ButtonHeader2" onClick={() => {props.setPage("testpaiement")}}>
                    TestPaiement
                </a>
                <a className="ButtonHeader" onClick={() => {props.setPage("contact")}}>
                    Contact
                </a>
                <a className="ButtonHeader" onClick={() => {props.setPage("signin")}}>
                    Sign in
                </a>
                <a className="ButtonHeader" onClick={() => {props.setPage("signup")}}>
                    Sign up
                </a>
                <a className="ButtonHeader" onClick={() => {props.setPage("home")}}>
                    About
                </a>
        </div>
    );
}
    
export default HeaderStart;