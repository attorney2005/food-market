import React from "react";
import './header-presentation.scss';

function HeaderPresentation(): JSX.Element {
  return (
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
  )
}

export default HeaderPresentation
