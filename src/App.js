import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';


import Test from './pages/Test'
import Home from './pages/Home'
import Login from './pages/Login'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import HeaderStart from './utility/HeaderStart'

function App() {

  const [page, setPage] = useState("home")

  var display = <Home setPage={setPage}/>

  if (page == "home") {
    display = <Home setPage={setPage}/>
  }
  if (page == "signin") {
    display = <Login setPage={setPage}/>
  }
  if (page == "contact") {
    display = <Contact setPage={setPage}/>
  }

  if (page == "signup") {
    display = <SignUp setPage={setPage}/>
  }



  return (
    <div className="App">
      {display}
    </div>
    
  );
}

export default App;
