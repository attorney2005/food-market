import './App.css';
import React from 'react';
import SortTeg from "./components/sort-teg/sort-teg";
import Header from "./components/header/header";
import MenuContainer from "./components/menu-container/menu-container";

function App() {
  return (
    <div className="App">
      <Header/>
      <MenuContainer/>
    </div>
  );
}

export default App;
