
import { useState } from 'react';
import axios from 'axios';
import '../css/SignUp.css';

import HeaderStart from '../utility/HeaderStart'

function Login(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errorMessage, setErrorMessage] = useState("")


    const handleSignIn = () => {
        if (email == "" || password == "") {
            setErrorMessage("Please enter details")
        }
        axios.post('https://back-ecommerce01.herokuapp.com/auth/login', {
            name: email,
            password: password
        }).then(res => {
            props.setToken(res.data)
            props.setPage("HomePage")
        }).catch(function (error) {
            setErrorMessage("Connection refused")
        });
    }

    return (
        <div className="Home">
            <HeaderStart setPage={props.setPage}/>


            <p className="title">e-Teaching</p>
            <p className="textContact"> 
                Sign In
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
                        <input className="signupAttributeInput" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                </div>
                <button className="signButtonSend" onClick={handleSignIn}>
                    Login
                </button>
            </div>
            <p className="errorMessage">{errorMessage}</p>
        </div>
    );
}
    
export default Login;