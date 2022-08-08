import React from "react";
import './log-in.scss';

function LogIn(): JSX.Element {
  return (
    <div className="header__aside-login">
      <svg className="header__aside-login-user-icon" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.8333 17H2.16667C1.52234 17 1 16.5095 1 15.9044C1 14.0922 2.19724 12.4701 4.00426 11.8341L4.36303 11.7078C6.70803 10.8825 9.29197 10.8825 11.637 11.7078L11.9957 11.8341C13.8028 12.4701 15 14.0922 15 15.9044C15 16.5095 14.4777 17 13.8333 17Z" stroke="#01170A" stroke-linecap="square" stroke-linejoin="round"/>
        <path d="M6.22126 8.47276C7.33774 9.01134 8.66226 9.01134 9.77874 8.47276C10.8178 7.97152 11.5623 7.05858 11.8067 5.98588L11.8719 5.69958C12.1219 4.60262 11.8549 3.45773 11.1396 2.55928L11.0349 2.42771C10.3195 1.52912 9.19473 1 8 1C6.80527 1 5.68051 1.52913 4.96512 2.42771L4.86038 2.55928C4.14509 3.45773 3.8781 4.60262 4.12805 5.69958L4.19329 5.98588C4.43771 7.05858 5.18218 7.97152 6.22126 8.47276Z" stroke="#01170A" stroke-linecap="square" stroke-linejoin="round"/>
      </svg>
      <p className="header__aside-login-text">Вход &ensp; Регистрация</p>
      <svg className="header__aside-login-info-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.99079 4.42857V11.0571M8.99079 12.8857V13.3429M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="#01170A" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <p className="header__aside-login-text">О проекте</p>
    </div>
  )
}

export default LogIn
