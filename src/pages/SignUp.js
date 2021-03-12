
import { useState } from 'react';
import axios from 'axios';
import '../css/SignUp.css';

import HeaderStart from '../utility/HeaderStart'

function SignUp(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errorMessage, setErrorMessage] = useState("")

    const handleSignUp = () => {
        if (email == "" || password == "") {
            setErrorMessage("Please enter details")
            return
        }
        axios.post('https://back-ecommerce01.herokuapp.com/auth/register', {
            name: email,
            password: password
        }).then(res => {

            axios.post('https://back-ecommerce01.herokuapp.com/auth/login', {
                name: email,
                password: password
            }).then(res => {
                props.setToken(res.data)
                props.setPage("HomePage")
            }).catch(function (error) {
                setErrorMessage("Problem during connexion")
            });
        }).catch(function (error) {
            setErrorMessage("Sign Up refused: use another name")
        });
    }

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
                    <p className="signupAttributeP">Attribute 1:</p>        
                </div>

                
                <div className="signupAttributeContainer">
                    
                    <div className="signupAttributeContainerDiv">
                        <input className="signupAttributeInput" type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div className="signupAttributeContainerDiv">
                        <input className="signupAttributeInput" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    <div className="signupAttributeContainerDiv">
                        <input className="signupAttributeInput" type="text"/>
                    </div>
                    
                </div>
                <button className="signButtonSend" onClick={handleSignUp}>
                            Send
                    </button>
            </div>
            <p className="errorMessage">{errorMessage}</p>
        </div>
    );
}
    
export default SignUp;