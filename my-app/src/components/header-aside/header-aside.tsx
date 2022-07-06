import React from "react";
import ReactDOM from "react-dom"
import './header-aside.scss';
import '../../utils/variables.scss';
import '../../utils/mixins.scss';
import Header from "../header/header";

function Header__aside(): JSX.Element {
  return (
    <aside className="header__aside">
      <svg width="90" height="20" viewBox="0 0 90 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M33.2735 17L32.5778 14.948H28.154L27.4584 17H23.7838L28.6892 4.4H32.0427L37.0551 17H33.2735ZM31.7394 12.23L30.3659 8.324L28.9924 12.23H31.7394Z"
          fill="#31B768"/>
        <path d="M37.7533 17V3.77H41.0711V17H37.7533Z" fill="#31B768"/>
        <path d="M42.7967 17V3.77H46.1145V17H42.7967Z" fill="#31B768"/>
        <path d="M55.8861 7.532H51.4088V9.548H55.4224V12.59H51.4088V17H47.9483V4.4H55.8861V7.532Z" fill="#31B768"/>
        <path
          d="M61.8285 17.324C60.2588 17.324 58.9626 16.838 57.9399 15.866C56.929 14.882 56.4236 13.64 56.4236 12.14C56.4236 10.628 56.929 9.386 57.9399 8.414C58.9626 7.442 60.2588 6.956 61.8285 6.956C63.3982 6.956 64.6885 7.448 65.6993 8.432C66.722 9.404 67.2334 10.64 67.2334 12.14C67.2334 13.64 66.722 14.882 65.6993 15.866C64.6766 16.838 63.3863 17.324 61.8285 17.324ZM60.3301 13.706C60.7226 14.114 61.222 14.318 61.8285 14.318C62.435 14.318 62.9285 14.114 63.309 13.706C63.7015 13.298 63.8977 12.776 63.8977 12.14C63.8977 11.504 63.7015 10.982 63.309 10.574C62.9285 10.166 62.435 9.962 61.8285 9.962C61.4242 9.962 61.0615 10.058 60.7404 10.25C60.4312 10.43 60.1874 10.688 60.009 11.024C59.8307 11.348 59.7415 11.72 59.7415 12.14C59.7415 12.776 59.9377 13.298 60.3301 13.706Z"
          fill="#31B768"/>
        <path
          d="M73.2475 17.324C71.6778 17.324 70.3816 16.838 69.3588 15.866C68.348 14.882 67.8426 13.64 67.8426 12.14C67.8426 10.628 68.348 9.386 69.3588 8.414C70.3816 7.442 71.6778 6.956 73.2475 6.956C74.8172 6.956 76.1075 7.448 77.1183 8.432C78.141 9.404 78.6524 10.64 78.6524 12.14C78.6524 13.64 78.141 14.882 77.1183 15.866C76.0956 16.838 74.8053 17.324 73.2475 17.324ZM71.7491 13.706C72.1415 14.114 72.641 14.318 73.2475 14.318C73.854 14.318 74.3475 14.114 74.728 13.706C75.1205 13.298 75.3167 12.776 75.3167 12.14C75.3167 11.504 75.1205 10.982 74.728 10.574C74.3475 10.166 73.854 9.962 73.2475 9.962C72.8432 9.962 72.4805 10.058 72.1594 10.25C71.8502 10.43 71.6064 10.688 71.428 11.024C71.2497 11.348 71.1605 11.72 71.1605 12.14C71.1605 12.776 71.3567 13.298 71.7491 13.706Z"
          fill="#31B768"/>
        <path
          d="M86.7178 3.77H90V17H87.5384L87.2351 16.28C86.4027 16.976 85.4335 17.324 84.3276 17.324C82.853 17.324 81.64 16.838 80.6887 15.866C79.7373 14.894 79.2616 13.652 79.2616 12.14C79.2616 10.628 79.7373 9.386 80.6887 8.414C81.64 7.442 82.853 6.956 84.3276 6.956C85.2076 6.956 86.0043 7.184 86.7178 7.64V3.77ZM83.2216 13.742C83.6378 14.162 84.1551 14.372 84.7735 14.372C85.3919 14.372 85.9032 14.162 86.3076 13.742C86.7238 13.31 86.9319 12.776 86.9319 12.14C86.9319 11.828 86.8724 11.534 86.7535 11.258C86.6465 10.982 86.4978 10.748 86.3076 10.556C86.1173 10.352 85.8854 10.196 85.6119 10.088C85.3503 9.968 85.0708 9.908 84.7735 9.908C84.1551 9.908 83.6378 10.124 83.2216 10.556C82.8173 10.976 82.6151 11.504 82.6151 12.14C82.6151 12.776 82.8173 13.31 83.2216 13.742Z"
          fill="#31B768"/>
        <path
          d="M15.676 0.00599351C11.5996 -0.244902 9.67439 7.46469 9.67439 7.46469C9.67439 7.46469 8.62398 1.71157 4.84326 1.78174C2.59728 1.82355 -0.913072 3.70383 0.219359 9.53285C0.948441 13.2868 3.51291 15.963 5.80907 17.6706C5.89212 16.7936 6.14956 15.5566 6.03779 14.6774C5.92188 14.1326 5.59097 13.878 5.23937 13.5074C4.81584 13.0609 4.49088 12.4786 4.49088 11.7815C4.49088 11.7167 4.50356 11.5466 4.50356 11.5466L5.01143 7.02562H5.42927L5.28231 11.8018C5.27843 11.9444 5.38166 12.0624 5.51051 12.0624H5.58631C5.71231 12.0624 5.81451 11.9496 5.81451 11.8101L5.81554 7.02762L6.25873 7.02704V11.8101C6.25873 11.9493 6.36093 12.0624 6.48693 12.0624C6.61292 12.0624 6.71512 11.9493 6.71512 11.8101V7.02762L7.11692 7.02647V11.776C7.11692 11.9155 7.21886 12.0283 7.3446 12.0289H7.43178C7.56063 12.0292 7.66412 11.9115 7.6605 11.7691L7.53139 7.02704L7.98959 7.02762L8.48608 11.7932C8.48608 11.7932 8.48737 11.8952 8.48505 11.9355C8.44934 12.5771 8.15491 13.0508 7.76631 13.4973C7.44317 13.8685 7.08277 14.2497 6.93219 14.7492C6.84396 15.64 7.10683 16.8661 7.17358 17.723C7.19272 17.9696 7.2098 18.2807 7.22481 18.635C8.706 19.5563 9.82549 20 9.82549 20C9.82549 20 11.0715 19.5853 12.7002 18.4585C12.7131 18.2758 12.7268 18.0977 12.7416 17.927C12.8399 16.8128 13.2567 15.0557 12.7597 14.2855C11.8534 13.9819 10.8133 12.6161 10.8138 10.7017C10.8138 8.80337 11.7421 7.05683 13.3899 7.02704V7.0259C13.3979 7.0259 13.4254 7.0259 13.4331 7.0259V7.02704C15.0812 7.05683 16.0097 8.80337 16.0097 10.7017C16.0092 12.6161 14.9707 13.9822 14.0636 14.2855C13.6354 14.9494 13.8942 16.3451 14.0295 17.4323C15.41 16.248 16.8879 14.5831 18.0542 12.2907C21.3379 5.83472 19.7524 0.256602 15.676 0.00599351Z"
          fill="#31B768"/>
        <path
          d="M11.8837 9.26505C11.8883 9.12987 11.8987 9.04825 11.8987 9.04825C11.8987 9.04825 11.8511 9.10896 11.7929 9.23699C11.7334 9.36301 11.6614 9.54745 11.5983 9.77715C11.5341 10.0051 11.4767 10.2792 11.4464 10.5794C11.4141 10.8801 11.4045 11.2066 11.4617 11.5483C11.4927 11.7259 11.5385 11.876 11.5942 12.0321C11.6521 12.181 11.7147 12.3219 11.7804 12.4545C11.9173 12.7174 12.0617 12.9463 12.2014 13.1307C12.339 13.3155 12.4702 13.4561 12.5732 13.5437C12.6738 13.6348 12.7517 13.654 12.7507 13.6477C12.747 13.6529 12.6945 13.6013 12.6368 13.4813C12.5765 13.3644 12.4989 13.1906 12.4115 12.9827C12.3256 12.773 12.2254 12.5298 12.1328 12.2678C12.0839 12.1378 12.0389 12.0023 12.0014 11.8651C11.9613 11.7336 11.9199 11.587 11.9054 11.4578C11.828 10.9053 11.8625 10.2838 11.8671 9.82642C11.8736 9.59443 11.8798 9.40024 11.8837 9.26505Z"
          fill="#31B768"/>
      </svg>
      <div className="header__aside-container">
        <p className="header__aside-text">Горячее</p>
        <p className="header__aside-text">Завтраки</p>
        <p className="header__aside-text">Салаты</p>
        <p className="header__aside-text">Закуски</p>
        <p className="header__aside-text">Десерты</p>
        <p className="header__aside-text">Напитки</p>
        <p className="header__aside-text">Статьи</p>
        <div className="header__aside-login">
          <p>Вход/Регистрация</p>
          <p>О проекте</p>
        </div>
      </div>
    </aside>
  )
}

export default Header__aside
