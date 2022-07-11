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
      {buttonNames.map(buttonName => (
        <SortButton
          text={buttonName}
          onClick={() => alert(buttonName)}
        />
      ))}
    </div>
  );
}

export default App;
