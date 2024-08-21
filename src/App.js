
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
  }

  const removeBodyClasses = ()=> {
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-primary');
  }


  const [mode, setmode] = useState('light');   // whether dark mode or not

  const togglemode = (cls)=> {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
    if(mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#050a3d';
      showAlert("Dark mode is enabled", "Success");
      document.title = 'TextUtils - Dark Mode'
      
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "Success");
      document.title = 'TextUtils - Light Mode'
    }
  }


  return (
    <>
      <Router> 
     <Navbar title="TextUtils" aboutText="About" mode={mode} togglemode={togglemode} /> 
     <Alert alert={alert} />
     <div className='container'>
           <Routes>
              {/* <Route exact path='/about'>
                <About/>
              </Route> */}
              <Route exact path="/about" element={<About mode={mode} />}/>
              <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text Here" mode={mode} />} />
                {/* <TextForm showAlert={showAlert} heading="Enter the Text Here" mode={mode} /> */}
              {/* </Route> */}
          </Routes> 
          {/* <TextForm showAlert={showAlert} heading="Enter the Text Here" mode={mode}/>  */}
     </div>
      </Router> 
  </>
  );
}

export default App;
