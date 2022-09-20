import React, {useState} from 'react';
import './App.css';
import Content from './components/Content';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
const cors = require('cors')

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
