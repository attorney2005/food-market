import React from "react";
import './header-sort.scss';
import SortOnContainer from "../sort-on/sort-on-container";
import SortTegContainer from "../sort-teg/sort-teg-container";

function HeaderSort(): JSX.Element {
  return (
    <div className="header__sort">
      <h4 className="header__sort-teg-title">Тэги:</h4>
      <SortOnContainer/>
      <SortTegContainer/>
    </div>
  )
}

export default HeaderSort
