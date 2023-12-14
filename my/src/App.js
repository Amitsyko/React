import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light'); //Wheather dark Mode is enable or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })  
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor ="grey";
      showAlert("Dark Mode has been Enabled","success")
    }else{
      setMode('light')
      document.body.style.backgroundColor ="white";
      showAlert("Light Mode has been Enabled","success")
    }
  }
  return (
  <>  
    {/* <Navbar/> */}
    <Navbar  title="TextUlties" about="About us" mode={mode} toggleMode={toggleMode}/>
    <center><Alert alert={alert}/></center>
    <TextForm head="This is Text Counter Form" sub="Fill this Form :-" mode={mode} showAlert={showAlert}/>   
    <About/>
  </>
   
  );
}

export default App;
