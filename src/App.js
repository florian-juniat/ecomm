import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';


function App() {

  
  const [test, setTest] = useState("Nothing")
  const [userName, setUserName] = useState("")
  const [userPass, setUserPass] = useState("")
  const [token, setToken] = useState("")

  const [userNameRegister, setUserNameRegister] = useState("")
  const [userPassRegister, setUserPassRegister] = useState("")

  const handleClick = () => {
    axios.get('https://back-ecommerce01.herokuapp.com/auth/verify', {headers: {
      'Authorization': token }
    })
      .then(res => {
        console.log(res)
        setTest(res.data.name);
      }).catch(function (error) {
        if (error.response) {
          setTest("Not Connected");
        }
      });
  }


  const handleClickLogin = () => {
    axios.post('https://back-ecommerce01.herokuapp.com/auth/login', {
      name: userName,
      password: userPass
    }).then(res => {
        console.log(res)
        setToken(res.data)
        setTest("Succeed Connection");
    }).catch(function (error) {
      if (error.response) {
        setTest("Connection Refused");
      }
    });
  }


  const handleClickRegister = () => {
    axios.post('https://back-ecommerce01.herokuapp.com/auth/register', {
      name: userNameRegister,
      password: userPassRegister
    }).then(res => {
        console.log(res)
        setTest("Succeed Registration");
    }).catch(function (error) {
      if (error.response) {
        console.log(error.response)
        setTest("Registration Refused");
      }
    });
  }

  const handleWriteUser = (event) => {
    setUserName(event.target.value);
  }

  const handleWritePass = (event) => {
    setUserPass(event.target.value);
  }

  const handleWriteUserRegister = (event) => {
    setUserNameRegister(event.target.value);
  }

  const handleWritePassRegister = (event) => {
    setUserPassRegister(event.target.value);
  }

  

  return (
    <div className="App">
      <div className="mainBox">
        <header className="App-header">
            <h1 className="title">E-commerce</h1>
        </header>


        <div className="handleLine">
          <div className="mybody">
            <h2 className="titleSection">Login</h2>
            <div className="containerInput">
              <h2 className="titleInput">Username</h2>
              <input className="myInput" type="text" value={userName} onChange={handleWriteUser} />
            </div>
            <div className="containerInput">
              <h2 className="titleInput">Password</h2>
              <input className="myInput" type="text" value={userPass} onChange={handleWritePass} />
            </div>
            <button className="ButtonTest" onClick={handleClickLogin}>
                Sign in
            </button>
            
          </div>

          <div className="mybody">
            <h2 className="titleSection">Sign Up</h2>
            <div className="containerInput">
              <h2 className="titleInput">Username</h2>
              <input className="myInput" type="text" value={userNameRegister} onChange={handleWriteUserRegister} />
            </div>
            <div className="containerInput">
              <h2 className="titleInput">Password</h2>
              <input className="myInput" type="text" value={userPassRegister} onChange={handleWritePassRegister} />
            </div>
            <button className="ButtonTest" onClick={handleClickRegister}>
                Sign up
            </button>
            
          </div>
        </div>


        <button className="ButtonTest" onClick={handleClick}>
              Verify Connection
          </button>
        <p className="myP">{test}</p>
        <p className="myP">{token == "" ? "" : "Connected"}</p>
      </div>
    </div>
    
  );
}

export default App;
