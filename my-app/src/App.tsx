import './App.css';
import React from 'react';
import SortButton from "./components/sort-button/sort-button";

const buttonNames = [
  "Популярности",
  "Каллорийности",
  "Новизне",
  "Омлет",
  "Завтрак",
  "Простой",
  "Десерт",
  "Бекон",
  "Тунец",
  "Лосось",
  "Ребрышки",
  "Закуски",
  "Салаты",
  "Курица",
  "Праздничные блюда",
  "Итальянская кухня"
];

function App() {
  return (
    <div className="App">
      <SortButton text={ buttonNames.forEach(buttonName => buttonName} onClick={showAlert}/>
      <SortButton text={"2"} onClick={showAlert}/>
    </div>
  );
}

function showAlert() {
  alert("click");
}

export default App;
