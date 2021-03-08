import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import logo2 from './bastien.jpg';

import axios from 'axios';


function App() {

  const handleClickBastien = () => {
    setTest(<p> Et non plus de bastien</p>)
  }
  
  const [test, setTest] = useState("Nothing")

  const [touche, setTouch] = useState(
    <button className="ButtonTest" onClick={handleClickBastien}>
            Ne touche pas
        </button>
  )

  const handleClick = () => {

    axios.get('https://back-ecommerce01.herokuapp.com/')
      .then(res => {
        console.log(res)
        setTest(res.data);
      })
  }

  

  return (
    <div className="App">
      <header className="App-header">
          <h1 className="title">E-commerce</h1>
      </header>
      <div className="mybody">
        <button className="ButtonTest" onClick={handleClick}>
            Verify
        </button>
        
      </div>
      <p className="myP">{test}</p>
      {touche}
    </div>
    
  );
}

export default App;
