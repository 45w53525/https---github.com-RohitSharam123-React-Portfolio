import logo from './logo.svg';
import './App.css';
import Projects from './routes/projects';
import Skill from './routes/skill';
import Home from './routes/home';
import axios from "axios";
import React from "react";
import Header from './components/header';
import Footer from './components/footer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
         <Route path="/" element={<Home></Home>}></Route>
          
         <Route path="/project" element={<Projects></Projects>}></Route>

         <Route path="/skill" element={<Skill></Skill>}></Route>
        <Route></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
