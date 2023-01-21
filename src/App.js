import './App.css';
//1
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
//2
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    // document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-succcess')
    document.body.classList.remove('bg-warning')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'Textutils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'Textutils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install Textutils Now';
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'Textutils - Light Mode';
    }
  }

  return (
    <>    
    {/* <Navbar title="Textutils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    {/*                     3                          */}
    {/* <Router> */}
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3"> 
    {/*                     4                           */}
    {/* <Routes> */}
      {/* Exact is useed to get exact file. React select the file partially. */}
      {/*                   5-2                           */}
          {/* <Route exact path="/about" element={<About mode={mode}/>} /> 
          <Route exact path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" showAlert={showAlert} mode={mode}/>} /> */}
          {/* <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
          <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>
          </Route> */}       

          {/* Add when github pages */}
          <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>


    {/* </Routes>           */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
