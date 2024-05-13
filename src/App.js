import './App.css';
import About from './Component/About';
import PreData from './Component/AddPreData';
import DailyYog from './Component/DailyYog';
import Home from './Component/Home';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import Signup from './Component/Signup';
import Recomendation from './Component/Recomendation';
import State from './Context/Notes/State';
import Course from './Component/Course';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React,  { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'light';
    }
    
  }
  return (
    <>
    <State>
      <BrowserRouter>
        <Navbar mode = {mode} toggleMode={toggleMode} />
        <Routes>
            <Route exact path="/" element={<DailyYog mode={mode} />}></Route>
            <Route exact path="/home" element={<Home/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/signup" element={<Signup/>}></Route>
            <Route exact path="/recomendation" element={<Recomendation mode={mode} />}></Route>
            <Route exact path="/preData" element={<PreData/>}></Route>
            <Route exact path="/course" element={<Course/>}></Route>
        </Routes>
      </BrowserRouter>
    </State>
    </>
  );
}

export default App;
