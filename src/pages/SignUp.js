
import { useState } from 'react';
import axios from 'axios';
import '../css/SignUp.css';

import HeaderStart from '../utility/HeaderStart'

function SignUp(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="Home">
            <HeaderStart setPage={props.setPage}/>


            <p className="title">e-Teaching</p>
            <p className="textContact"> 
                Sign Up
            </p>

            <div>
                <div className="signupAttributeContainer">
                    <p className="signupAttributeP">Email:</p>
                    <p className="signupAttributeP">Password:</p>             
                </div>

                
                <div className="signupAttributeContainer">
                    
                    <div className="signupAttributeContainerDiv">
                        <input className="signupAttributeInput" type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div className="signupAttributeContainerDiv">
                        <input className="signupAttributeInput" type="text" value={password} onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    
                </div>
                <button className="signButtonSend">
                            Send
                    </button>
            </div>
        </div>
    );
}
    
export default SignUp;