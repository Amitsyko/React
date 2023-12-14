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



      {/* exact is using for the correct path to render the page :-
      like -- user --components1
              user/home --componenets2 */}  

        <Routes>
          <Route exact path="/about" element={<About about="About us" />}>
          </Route>

          <Route exact path="/" element={<TextForm head="This is Text Counter Form" sub="Fill this Form :-" mode={mode} showAlert={showAlert} />}>

          </Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
