import './App.css';
import React from 'react';
import SortTeg from "./components/sort-teg/sort-teg";
import Header from "./components/header/header";
import MenuContainer from "./components/menu-container/menu-container";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <MenuContainer/>
      <Footer/>
    </div>
  );
}

export default App;
