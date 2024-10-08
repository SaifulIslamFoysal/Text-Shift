import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import About from './components/About';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const setAlertF = (message, type) => {
    setAlert({
      msg: message,
      typo: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setAlertF('Dark mode has been enabled', 'success'); 
      document.title = "Text Shift - Dark";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setAlertF('Light mode has been enabled', 'success'); 
      document.title = "Text Shift";
    }
  };

  const toggleMode2 = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0086b3';
      setAlertF('Sky mode has been enabled', 'success');
      document.title = "Text Shift - SkyBlue";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setAlertF('Light mode has been enabled', 'success'); 
      document.title = "Text Shift";
    }
  };

  return (
    <>
      
        <Navbar title="SportsAdda" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2} basha="Home" />
        <Alert alert={alert} />
        <div className="container my-3">
          
          
            <TextForm setAlertF={setAlertF} heading="Enter Your text" mode={mode} />
           
        
        </div>
      
    </>
  );
}

export default App;
