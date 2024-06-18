//import { useState} from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alerts from './Components/Alerts';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
   <>
  {/* <Router> */}
  <Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alerts alert="This is alert"/>
  <div className="conatiner">

  {/* <Switch>
          <Route path="/about"> */}
            {/* <About /> */}
          {/*</Route>
          <Route path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the Text" mode={mode}/>
          <About />
          {/* </Route>
  </Switch> */}
  
  </div>
  {/* </Router> */}
  </>
  );
}

export default App;
