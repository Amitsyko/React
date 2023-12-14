import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Wheather dark Mode is enable or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been Enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success")
    }
  }
  return (
    <>
      {/* <Navbar/> */}
      <Router>
        <Navbar title="TextUlties" about="About us" mode={mode} toggleMode={toggleMode} />
        <center><Alert alert={alert} /></center>

        <Routes>
          <Route path="/about" element={<About about="About us" />}>
          </Route>

          <Route path="/" element={<TextForm head="This is Text Counter Form" sub="Fill this Form :-" mode={mode} showAlert={showAlert} />}>

          </Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
