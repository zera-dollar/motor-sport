import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GetproductsComponent from './Components/GetproductsComponent';
import AddproductsComponent from './Components/AddproductsComponent';
import LoginComponent from './Components/LoginComponent';
import SignupComponent from './Components/SignupComponent';
import SingleproductComponent from './Components/SingleproductComponent';
import LogoutComponent from './Components/LogoutComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import"bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from 'react';
import PreloaderComponent from './Components/PreLoader';

function App() {
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false)
    },3000)
    // return()=> clearTimeout(timer)
  },[])
  if (loading) {
    return <PreloaderComponent />; // Show the preloader while loading
  }
  return (
    <Router>

    <div className="App">
      <header>
        <h1 className='App-header'>Motor Sport Cars for life</h1>
        </header>
      <Routes>
        <Route path="/singleproduct" element={<SingleproductComponent/>} />
        <Route path="/signup" element={<SignupComponent/>} />
        <Route path="/login" element={<LoginComponent/>} />
        <Route path='/logout' element={<LogoutComponent/>}/>
        <Route path="/addproduct" element={<AddproductsComponent/>} />
        <Route path='/' element={<GetproductsComponent/>}/>
        
        
    

      </Routes>
    </div>
    </Router>
      
  );
}

export default App;
