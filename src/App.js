import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
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

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark Mode enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutUs="About us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      <Route path='/' element={<TextForm showAlert={showAlert} title="Enter The Text Below" mode={mode}/>} />
            
      <Route path='/about' element={<About />} />
      </Routes>
      
    </div>
    </Router>
    </>
  );
}

export default App;
