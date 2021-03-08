import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';


function App() {

  
  const [test, setTest] = useState("Nothing")
  const [userName, setUserName] = useState("")

  const handleClick = () => {
    axios.get('https://back-ecommerce01.herokuapp.com/')
      .then(res => {
        console.log(res)
        setTest(res.data);
      })
  }

  const handleWriteUser = (event) => {
    setUserName(event.target.value);
  }

  

  return (
    <div className="App">
      <div className="mainBox">
        <header className="App-header">
            <h1 className="title">E-commerce</h1>
        </header>
        <div className="mybody">
          <div className="containerInput">
            <h2 className="titleInput">Username</h2>
            <input className="myInput" type="text" value={userName} onChange={handleWriteUser} />
          </div>
          <div className="containerInput">
            <h2 className="titleInput">Password</h2>
            <input className="myInput" type="text" value={userName} onChange={handleWriteUser} />
          </div>
          <button className="ButtonTest" onClick={handleClick}>
              Connect
          </button>
          
        </div>
        <p className="myP">{test}</p>
      </div>
    </div>
    
  );
}

export default App;
