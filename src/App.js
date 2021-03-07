import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import axios from 'axios';


function App() {
  
  const [test, setTest] = useState("Nothing")

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
    </div>
  );
}

export default App;
