import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom"

function App() {
  const [mode, setmode] = useState('light');
  const [enable, setenable] = useState("Enable Dark Mode");
  const [text, settext] = useState("text-dark");
  const togglemode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      setenable('Enable Light mode');
      settext("text-light");
      document.body.style.backgroundColor = "grey";
      showalert("Dark mode enabled" , "success");
    }
    else{
      setmode('light');
      setenable('Enable Dark mode');
      settext('text-dark');
      document.body.style.backgroundColor = "white";
      showalert("Light mode enabled" , "success");
    }
  }
  const [alert, setalert] = useState(null);
  const showalert = (message , type)=>{
    setalert({
      msg: message,
      type: type
    })
  }
  setTimeout(() => {
    setalert(null);
  }, 7000);
  
  return (
    <>
      <Router>
      <Navbar title = "TextUtils" Mode = {mode} togglemode ={togglemode} enable = {enable} text = {text}/>
      <Alert alert ={alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Textform showalert = {showalert} heading = "Enter text to analyse" Mode = {mode}/>
          </Route>
      </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
