import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Pages/Home";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SOME RANDOM TEXT SOME RANDOM <br></br>TEXT SOME RANDOM TEXT SOME RANDOM TEXT
        </p>
        </header>
        <Header/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<SignUp/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
