
import './App.css';
import About from './components/About';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }

  const ToggleMode=()=>{
    if(mode=== 'light'){
      setmode('dark');
      document.body.style.backgroundColor='#212529'
      showAlert("Dark mode has beeen enabled","success");
    }else{
      setmode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has beeen enabled","success");
    }
  }
  return (
    <>  
        <Navbar Home='TextUtil' Features='About' mode={mode} ToggleMode={ToggleMode}/>
         <Alerts alert={alert}/>
         <Router>
          <Routes>
            <Route path="/about" element={<About></About>}/> 
            <Route path="/" element={<div className="container">
         <TextForm heading='Text Area' showAlert={showAlert} mode={mode} ToggleMode={ToggleMode}/>
        </div>}/> 

         
        </Routes>
        </Router>
    </>   
       
  ); 
}

export default App;
