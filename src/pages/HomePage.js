

import '../css/Test.css';
import { useState } from 'react';
import axios from 'axios';


function HomePage(props) {
    
    const [reqStart, setReqStart] = useState(false)
    const [information, setInformation] = useState("")

    if (reqStart == false) {
        setReqStart(true)
        axios.get('https://back-ecommerce01.herokuapp.com/auth/verify', {headers: {
            'Authorization': props.token }
        }).then(res => {
            setInformation(res.data.name);
      }).catch(function (error) {
        if (error.response) {
          props.setPage("home")
        }
      });
    }

    const handleClick = () => {
        props.setToken("")
        props.setPage("home")
    }

    return (
        <div className="Home">
            <p>Home page</p>
            <p> Connected with account : {information} </p>
            <button className="ButtonTest" onClick={handleClick}>
              Deconnexion
          </button>
        </div>
    );
}
    
export default HomePage;