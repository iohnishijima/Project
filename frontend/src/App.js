import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Photography from './components/pages/Photography';
import Projects from './components/pages/Projects';
import NotFound from './components/pages/NotFound';
import FadeInComponent from './components/pages/Fadein';
import CardComponent from './components/pages/Card';
import DraggableComponent from './components/pages/DraggableComponent';

function App() {
  return (
    <>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/photography" element={<Photography/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/fadein" element={<FadeInComponent/>}/>
          <Route path="/card" element={<CardComponent/>}/>
          <Route path="/drag" element={<DraggableComponent/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;