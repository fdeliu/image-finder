import React from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
