import './App.css';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from './context/notes/NoteState';
import "./components/style.css"

function App() {
  return (
<>
    <NoteState>
      <BrowserRouter>
        <NavBar />
        <div className="container my-5">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
</>
  );
}

export default App;
