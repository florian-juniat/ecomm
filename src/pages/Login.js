

import '../css/Test.css';
import { useState } from 'react';
import axios from 'axios';


function Login(props) {

    const handleClick = () => {
        props.setPage("home")
    }

    return (
        <div className="Home">
            <p>Login page</p>
            <button className="ButtonTest" onClick={handleClick}>
              Test
          </button>
        </div>
    );
}
    
export default Login;