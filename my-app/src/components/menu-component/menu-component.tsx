import React from "react";
import './menu-component.scss';

type OfferWithPhotoSmallProps = {
  id: number;
  img: string;
  title: string;
  text: string;
  like: number,
  time: string,
  calories: string,
}

function MenuComponent(props: OfferWithPhotoSmallProps): JSX.Element {
  if (props.id < 5) {
    return (
      <div className="menu__component-container">
        <div className="menu__component-with-out-photo">
          <h4 className="menu__component-title">{props.title}</h4>
          <p className="menu__component-text">{props.text}</p>
          <div className="menu__component-with-out-photo-info-container">
            <span className="menu__component-info">{props.like}</span>
            <span className="menu__component-info">{props.time}</span>
            <span className="menu__component-info">{props.calories}</span>
          </div>
        </div>
      </div>
    )
  }
  if (props.id > 7) {
    return (
      <div className="menu__component-with-small-photo">
        <div className="offer__container-photo">
          <img className="menu__component-photo" src={props.img}
               width="252" height="192" alt="Edges">
          </img>
        </div>
        <div className="menu__component-text-block">
          <h4 className="menu__component-title">{props.title}</h4>
          <p className="menu__component-text">{props.text}</p>
          <div className="menu__component-with-out-photo-info-container">
            <span className="menu__component-info">{props.like}</span>
            <span className="menu__component-info">{props.time}</span>
            <span className="menu__component-info">{props.calories}</span>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="menu__component">
        <div className="offer__container-photo">
          <img className="menu__component-photo" src={props.img}
               width="534" height="192" alt="Edges">
          </img>
        </div>
        <div className="menu__component-text-block">
          <h4 className="menu__component-title">{props.title}</h4>
          <p className="menu__component-text">{props.text}</p>
          <div className="menu__component-with-out-photo-info-container">
            <span className="menu__component-info">{props.like}</span>
            <span className="menu__component-info">{props.time}</span>
            <span className="menu__component-info">{props.calories}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuComponent
