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
            <div className="menu__component-info">
              <div className="icon-heart">
              </div>
              <div className="likes">
                {props.like}
              </div>
            </div>
            <div className="menu__component-info">
              <div className="icon-time">
              </div>
              <div className="time">
                {props.time}
              </div>
            </div>
            <div className="menu__component-info">
              <div className="icon-energy">
              </div>
              <div className="calories">
                {props.calories}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (props.id === 12) {
    return (
      <div className="menu__component-course">
        <h4 className="menu__component-course-title">{props.title}</h4>
        <a className="menu__component-course-link">Подробнее</a>
      </div>
    )
  }
  if (props.id === 13) {
    return (
      <div className="menu__component-holiday">
        <div className="menu__component-container-photo">
          <img className="menu__component-holiday-photo" src={props.img}
               width="232" height="165" alt="Edges">
          </img>
        </div>
        <div className="menu__component-holiday-text-block">
          <h4 className="menu__component-title">{props.title}</h4>
          <p className="menu__component-holiday-text">{props.text}</p>
          <a className="menu__component-link">Подробнее</a>
        </div>
      </div>
    )
  }
  if (props.id === 14) {
    return (
      <div className="menu__component-mailing">
        <div className="menu__component-container-photo">
          <img className="menu__component-mailing-photo" src={props.img}
               width="232" height="252" alt="Edges">
          </img>
        </div>
        <div className="menu__component-mailing-subscription">
          <div className="menu__component-mailing-text-block">
            <h4 className="menu__component-mailing-title"><span
              className="menu__component-mailing-title-first">Попишитесь</span><br></br>
              <span className="menu__component-mailing-title-second">на нашу рассылку</span>
            </h4>
            <p className="menu__component-mailing-text">{props.text}</p>
          </div>
          <form className="menu__component-mailing-form">
            <input className="menu__component-mailing-input" value="Ваша почта"/>
            <button className="menu__component-mailing-button">Подписаться</button>
          </form>
        </div>
      </div>
    )
  }

  if (props.id > 7) {
    return (
      <div className="menu__component-with-small-photo">
        <div className="menu__component-container-photo">
          <img className="menu__component-holiday-photo" src={props.img}
               width="252" height="192" alt="Edges">
          </img>
        </div>
        <div className="menu__component-text-block-small-photo">
          <h4 className="menu__component-title">{props.title}</h4>
          <p className="menu__component-text">{props.text}</p>
          <div className="menu__component-with-small-photo-info-container">
            <div className="menu__component-info">
              <div className="icon-heart">
              </div>
              <div className="likes">
                {props.like}
              </div>
            </div>
            <div className="menu__component-info">
              <div className="icon-time">
              </div>
              <div className="time">
                {props.time}
              </div>
            </div>
            <div className="menu__component-info">
              <div className="icon-energy">
              </div>
              <div className="calories">
                {props.calories}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="menu__component">
        <div className="menu__component-container-photo">
          <img className="menu__component-holiday-photo" src={props.img}
               width="534" height="192" alt="Edges">
          </img>
        </div>
        <div className="menu__component-text-block">
          <h4 className="menu__component-title">{props.title}</h4>
          <p className="menu__component-text">{props.text}</p>
          <div className="menu__component-photo-info-container">
            <div className="menu__component-info">
              <div className="icon-heart">
              </div>
              <div className="likes">
                {props.like}
              </div>
            </div>
            <div className="menu__component-info">
              <div className="icon-time">
              </div>
              <div className="time">
                {props.time}
              </div>
            </div>
            <div className="menu__component-info">
              <div className="icon-energy">
              </div>
              <div className="calories">
                {props.calories}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuComponent
