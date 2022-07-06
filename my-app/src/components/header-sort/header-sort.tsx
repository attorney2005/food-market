import React from "react";
import './header-sort.scss';
import SortButton from "../sort-button/sort-button";

function HeaderSort(): JSX.Element {
  return (
    <div className="header__sort">
      <div className="header__sort-simple">
        <h4 className="header__sort-title">Сортировать по:</h4>
        <button className="header__sort-button">Популярности</button>
        <button className="header__sort-button">Калорийности</button>
        <button className="header__sort-button">Новизне</button>
        <input className="header__sort-input" value="Поиск"/>
        <div>
          <h4 className="header__sort-title">Тэги:</h4>
          <SortButton name={"name"}/>
          <button className="header__sort-teg">Завтрак</button>
          <button className="header__sort-teg">Простой</button>
          <button className="header__sort-teg">Десерт</button>
          <button className="header__sort-teg">Бекон</button>
          <button className="header__sort-teg">Тунец</button>
          <button className="header__sort-teg">Лосось</button>
          <button className="header__sort-teg">Ребрышки</button>
          <button className="header__sort-teg">Закуски</button>
          <button className="header__sort-teg">Салаты</button>
          <button className="header__sort-teg">Курица</button>
        </div>
      </div>
      <div className="header__sort-special">
        <button className="header__sort-teg teg12">Праздничные блюда</button>
        <button className="header__sort-teg teg13">Итальянская кухня</button>
      </div>
    </div>
  )
}

export default HeaderSort
