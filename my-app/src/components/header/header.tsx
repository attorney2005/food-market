import React from "react";
import ReactDOM from "react-dom"
import './header.scss';
import '../../utils/variables.scss';
import '../../utils/mixins.scss';
import Header__aside from "../header-aside/header-aside";

function Header(): JSX.Element {
  return (
    <div className="header clearfix">
      <Header__aside/>
      <div className="header__container">
        <div className="header__presentation">
          <h1 className="header__presentation-title">
            Топ продуктов во время пандемии <br></br>
            - где взять витамины C, D и цинк
          </h1>
          <p className="header__presentation-text">
            В этом году нам досталось настоящее испытание в виде<br></br>
            пандемиии, и кажется обычный чай здесь уже не поможет.
          </p>
          <form className="header__form">
            <label className="header__form-container" htmlFor="1">
              <input className="header__form-input" type="radio" name="choose" value="black" checked id="1"/>
            </label>
            <span className="header__form-container-checkmark"></span>
            <label className="header__form-container" htmlFor="2">
              <input className="header__form-input" type="radio" name="choose" value="black" id="2"/>
            </label>
            <span className="header__form-container-checkmark"></span>
            <label className="header__form-container" htmlFor="3">
              <input className="header__form-input" type="radio" name="choose" value="black" id="3"/>
            </label>
            <span className="header__form-container-checkmark"></span>
            <label className="header__form-container" htmlFor="4">
              <input className="header__form-input" type="radio" name="choose" value="black" id="4"/>
            </label>
            <span className="header__form-container-checkmark"></span>
            <label className="header__form-container" htmlFor="5">
              <input className="header__form-input" type="radio" name="choose" value="black" id="5"/>
            </label>
            <span className="header__form-container-checkmark"></span>
          </form>
        </div>
        <div className="header__sort">
          <div className="header__sort-simple">
            <h4 className="header__sort-title">Сортировать по:</h4>
            <button className="header__sort-button">Популярности</button>
            <button className="header__sort-button">Калорийности</button>
            <button className="header__sort-button">Новизне</button>
            <input className="header__sort-input" value="Поиск"/>
            <div>
            <h4 className="header__sort-title">Тэги:</h4>
            <button className="header__sort-teg">Омлет</button>
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
          <div className="header__sort-special" >
            <button className="header__sort-teg teg12">Праздничные блюда</button>
            <button className="header__sort-teg teg13">Итальянская кухня</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
