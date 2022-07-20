import React from "react";
import './menu-component.scss';

type OfferWithPhotoSmallProps = {
  id: number;
  img: string;
  title: string;
  text: string;
}

function MenuComponent(props:OfferWithPhotoSmallProps): JSX.Element {
  return (
    <div className="menu__component">
      <div className="offer__container-photo">
        <img className="menu__component-photo" src="../../header-pictures/pic.jpg"
             width="252" height="192" alt="Edges">
        </img>
      </div>
      <div className="menu__component-text-block">
        <h4 className="menu__component-title">{props.title}</h4>
        <p className="menu__component-text">{props.text}</p>
      </div>
    </div>
  )
}

export default MenuComponent
