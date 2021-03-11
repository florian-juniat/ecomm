

import '../css/Contact.css';
import { useState } from 'react';
import axios from 'axios';

import HeaderStart from '../utility/HeaderStart'


/*

<input className="inputGetInTouch" type="text" value={getTouch} onChange={(event) => {
                setGetTouch(event.target.value)
            }} />
*/

function Contact(props) {

    const [getTouch, setGetTouch] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

    const handleClick = () => {
        props.setPage("home")
    }

    return (
        <div className="Home">
            <HeaderStart setPage={props.setPage}/>
            <p className="title">e-Teaching</p>
            <p className="textContact"> 
                Get in touch
            </p>

            <textarea className="inputGetInTouch" value={getTouch}  placeholder="Message" onChange={(event) => {
                setGetTouch(event.target.value)}}/>
            <div>
                <input className="contactInputInfo" type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email"/>
                <input className="contactInputInfo" type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name"/>
                <button className="contactButtonSend" onClick={handleClick}>
                    Send
                </button>
            </div>
            
            
        </div>
    );
}
    
export default Contact;