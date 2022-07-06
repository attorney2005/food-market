import React from "react";
import ReactDOM from "react-dom"
import './header.scss';
import '../../utils/variables.scss';
import '../../utils/mixins.scss';
import HeaderAside from "../header-aside/header-aside";
import HeaderPresentation from "../header-presentation/header-presentation";
import HeaderSort from "../header-sort/header-sort";

function Header(): JSX.Element {
  return (
    <div className="header clearfix">
      <HeaderAside/>
      <div className="header__container">
        <HeaderPresentation/>
        <HeaderSort/>
      </div>
    </div>
  )
}

export default Header
