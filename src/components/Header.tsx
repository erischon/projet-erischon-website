import { useState } from "react";

import logo from "../assets/logo-fff-es.png";
import burger from "../assets/icons/burger.svg";
import close from "../assets/icons/close.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";

const Header = () => {
  const menuLink = ["About", "Services", "Experience", "Projets"];

  const [toggle, setToggle] = useState(false);

  return (
    <header className="">
      <div className="header__logo">
        <img src={logo} alt="Eri Schön's Logo" />
      </div>
      <nav className="navbar">
        <ul className="navbar__links">
          {menuLink.map((item) => (
            <li key={`link-${item}`} className="navbar__link">
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        <div className="navbar__menu">
          <img src={burger} onClick={() => setToggle(true)} />

          {toggle && (
            <div className="menu__container">
              <img src={close} onClick={() => setToggle(false)} />
              <ul>
                {menuLink.map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      <div className="social__container">
        <a
          href="https://twitter.com/erischon"
          className="home__social--link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} />
        </a>
        <a
          href="https://www.linkedin.com/in/ericschonhofen/"
          className="home__social--link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} />
        </a>
        <a
          href="https://github.com/erischon"
          className="home__social--link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} />
        </a>
      </div>
    </header>
  );
};

export default Header;
