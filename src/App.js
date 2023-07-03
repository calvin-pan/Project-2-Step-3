import './App.css';
import PageNavbar from './components/PageNavbar';
import {BrowserRouter as Router, Routes, Route, Link, NavLink, useHistory, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Aboutus from './pages/Aboutus';
import Register1 from './pages/Register1';
import Register2 from './pages/Register2';
import Register3 from './pages/Register3';
import Register4 from './pages/Register4';
import Contactus from './pages/Contactus';
import ChatBox from './pages/ChatBox';
import React from 'react';
import { HashRouter } from 'react-router-dom';


function App() {
  const shouldRenderNavbar = window.pathname !== '/chatbox'; // Change '/chatbox' to your chatbox route


  return (
    //<Router basename={process.env.PUBLIC_URL}>
    <HashRouter basename="/">
      {shouldRenderNavbar && <PageNavbar />}
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/Aboutus' element = {<Aboutus />} />
        <Route path='/Programs' element = {<Programs />} />
        <Route path='/Register1' element = {<Register1 />} />
        <Route path='/Register2' element = {<Register2 />} />
        <Route path='/Register3' element = {<Register3 />} />
        <Route path='/Register4' element = {<Register4 />} />
        <Route path='/Contactus' element = {<Contactus />} />
        <Route path='/ChatBox' element = {<ChatBox />} />
        </Routes>
    </HashRouter>/*</Router>*/
  );
}

export default App;
