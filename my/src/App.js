import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {



  return (
    <>
      {/* <Navbar/> */}
      <Navbar logo="AmitSyko" />
      <div className="container my-5">
      <TextForm heading='Enter Your text here below :-' btn='Click to UpperCase'/>
      <About heading="About Us"/>
      </div>
    </>
  );
}

export default App;
