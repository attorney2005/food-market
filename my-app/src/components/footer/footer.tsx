import React from "react";
import './footer.scss';


function Footer(): JSX.Element {
  return (
    <div className="footer">
      <div className="footer-info">
        <p>AllFood © 2021 Все права защищены</p>
        <p><a>Политика конфиденциальности</a></p>
      </div>
      <ul className="footer__social-list">
        <li className="footer__social-item--pinterest">
          <a>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.04929 0C3.62218 0 0 3.69231 0 8.20513C0 11.5897 2.01233 14.4615 4.82958 15.6923C4.82958 15.0769 4.82957 14.4615 4.93018 13.8462C5.13141 13.1282 5.93634 9.33333 5.93634 9.33333C5.93634 9.33333 5.63451 8.82051 5.63451 8C5.63451 6.76923 6.33882 5.84615 7.14375 5.84615C7.84806 5.84615 8.25052 6.35897 8.25052 7.07692C8.25052 7.79487 7.74744 8.92308 7.54621 9.94872C7.34498 10.7692 7.94867 11.4872 8.85422 11.4872C10.3635 11.4872 11.3696 9.53846 11.3696 7.07692C11.3696 5.23077 10.1622 3.89744 8.04929 3.89744C5.6345 3.89744 4.12527 5.74359 4.12527 7.79487C4.12527 8.51282 4.3265 9.02564 4.62835 9.4359C4.72896 9.64103 4.82957 9.64103 4.72895 9.84615C4.72895 9.94872 4.62834 10.359 4.52772 10.4615C4.42711 10.6667 4.3265 10.7692 4.12527 10.6667C3.01849 10.1538 2.5154 8.92308 2.5154 7.48718C2.5154 5.1282 4.4271 2.35897 8.25052 2.35897C11.3696 2.35897 13.3819 4.61538 13.3819 7.07692C13.3819 10.2564 11.6715 12.7179 9.05545 12.7179C8.1499 12.7179 7.34498 12.2051 7.04313 11.6923C7.04313 11.6923 6.54004 13.5385 6.43942 13.9487C6.23819 14.5641 5.93636 15.1795 5.63451 15.6923C6.33882 15.8974 7.14374 16 7.94867 16C12.3758 16 15.998 12.3077 15.998 7.79487C16.0986 3.69231 12.4764 0 8.04929 0Z"
                fill="white"/>
            </svg>
          </a>
        </li>
        <li className="footer__social-item--fb">
          <a>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 8C16 3.6 12.4 0 8 0C3.6 0 0 3.6 0 8C0 12 2.9 15.3 6.7 15.9V10.3H4.7V8H6.7V6.2C6.7 4.2 7.9 3.1 9.7 3.1C10.6 3.1 11.5 3.3 11.5 3.3V5.3H10.5C9.5 5.3 9.2 5.9 9.2 6.5V8H11.4L11 10.3H9.1V16C13.1 15.4 16 12 16 8Z"
                fill="white"/>
            </svg>
          </a>
        </li>
        <li className="footer__social-item--youtube">
          <a>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.6 1.82143C15.4 1.07143 14.9 0.535714 14.2 0.321429C13 1.91586e-07 7.89999 0 7.89999 0C7.89999 0 2.90001 1.91586e-07 1.60001 0.321429C0.900006 0.535714 0.399997 1.07143 0.199997 1.82143C-3.05474e-06 3.21429 0 6 0 6C0 6 3.03984e-06 8.78571 0.300003 10.1786C0.500003 10.9286 0.999997 11.4643 1.7 11.6786C2.9 12 8 12 8 12C8 12 13 12 14.3 11.6786C15 11.4643 15.5 10.9286 15.7 10.1786C16 8.78571 16 6 16 6C16 6 16 3.21429 15.6 1.82143ZM6.39999 8.57143V3.42857L10.6 6L6.39999 8.57143Z"
                fill="white"/>
            </svg>
          </a>
        </li>
      </ul>
      <li className="footer__social-item--inst">
        <a>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 1.44578C10.1205 1.44578 10.4096 1.44578 11.2771 1.44578C12.0482 1.44578 12.4337 1.63855 12.7229 1.73494C13.1084 1.92771 13.3976 2.0241 13.6867 2.31325C13.9759 2.60241 14.1687 2.89157 14.2651 3.27711C14.3614 3.56627 14.4578 3.95181 14.5542 4.72289C14.5542 5.59036 14.5542 5.78313 14.5542 8C14.5542 10.2169 14.5542 10.4096 14.5542 11.2771C14.5542 12.0482 14.3614 12.4337 14.2651 12.7229C14.0723 13.1084 13.9759 13.3976 13.6867 13.6867C13.3976 13.9759 13.1084 14.1687 12.7229 14.2651C12.4337 14.3614 12.0482 14.4578 11.2771 14.5542C10.4096 14.5542 10.2169 14.5542 8 14.5542C5.78313 14.5542 5.59036 14.5542 4.72289 14.5542C3.95181 14.5542 3.56627 14.3614 3.27711 14.2651C2.89157 14.0723 2.60241 13.9759 2.31325 13.6867C2.0241 13.3976 1.83133 13.1084 1.73494 12.7229C1.63855 12.4337 1.54217 12.0482 1.44578 11.2771C1.44578 10.4096 1.44578 10.2169 1.44578 8C1.44578 5.78313 1.44578 5.59036 1.44578 4.72289C1.44578 3.95181 1.63855 3.56627 1.73494 3.27711C1.92771 2.89157 2.0241 2.60241 2.31325 2.31325C2.60241 2.0241 2.89157 1.83133 3.27711 1.73494C3.56627 1.63855 3.95181 1.54217 4.72289 1.44578C5.59036 1.44578 5.87952 1.44578 8 1.44578ZM8 0C5.78313 0 5.59036 0 4.72289 0C3.85542 0 3.27711 0.192772 2.79518 0.385543C2.31325 0.578314 1.83133 0.867471 1.3494 1.3494C0.867471 1.83133 0.674699 2.21687 0.385543 2.79518C0.192772 3.27711 0.0963856 3.85542 0 4.72289C0 5.59036 0 5.87952 0 8C0 10.2169 0 10.4096 0 11.2771C0 12.1446 0.192772 12.7229 0.385543 13.2048C0.578314 13.6867 0.867471 14.1687 1.3494 14.6506C1.83133 15.1325 2.21687 15.3253 2.79518 15.6145C3.27711 15.8072 3.85542 15.9036 4.72289 16C5.59036 16 5.87952 16 8 16C10.1205 16 10.4096 16 11.2771 16C12.1446 16 12.7229 15.8072 13.2048 15.6145C13.6867 15.4217 14.1687 15.1325 14.6506 14.6506C15.1325 14.1687 15.3253 13.7831 15.6145 13.2048C15.8072 12.7229 15.9036 12.1446 16 11.2771C16 10.4096 16 10.1205 16 8C16 5.87952 16 5.59036 16 4.72289C16 3.85542 15.8072 3.27711 15.6145 2.79518C15.4217 2.31325 15.1325 1.83133 14.6506 1.3494C14.1687 0.867471 13.7831 0.674699 13.2048 0.385543C12.7229 0.192772 12.1446 0.0963856 11.2771 0C10.4096 0 10.2169 0 8 0Z"
              fill="white"/>
            <path
              d="M8 3.85542C5.68675 3.85542 3.85542 5.68675 3.85542 8C3.85542 10.3133 5.68675 12.1446 8 12.1446C10.3133 12.1446 12.1446 10.3133 12.1446 8C12.1446 5.68675 10.3133 3.85542 8 3.85542ZM8 10.6988C6.55422 10.6988 5.30121 9.54217 5.30121 8C5.30121 6.55422 6.45783 5.30121 8 5.30121C9.44578 5.30121 10.6988 6.45783 10.6988 8C10.6988 9.44578 9.44578 10.6988 8 10.6988Z"
              fill="white"/>
            <path
              d="M12.241 4.72289C12.7733 4.72289 13.2048 4.29136 13.2048 3.75904C13.2048 3.22671 12.7733 2.79518 12.241 2.79518C11.7086 2.79518 11.2771 3.22671 11.2771 3.75904C11.2771 4.29136 11.7086 4.72289 12.241 4.72289Z"
              fill="white"/>
          </svg>
        </a>
      </li>
    </div>
  )
}

export default Footer;
