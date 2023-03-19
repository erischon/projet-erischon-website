import { useState } from "react";

import { MenuIcon, CloseIcon } from "../components/icons";

import "../styles/navbarMenu.scss";

function NavbarMenu() {
  const [toggle, setToggle] = useState(false);
  const menuLink = [
    { name: "About", url: "/about" },
    { name: "Projets", url: "/projects" },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar__links">
        {menuLink.map((item) => (
          <li key={`link-${item.name}`} className="navbar__link">
            <a href={`${item.url}`}>{item.name}</a>
          </li>
        ))}
      </ul>

      <div className="navbar__menu">
        <div onClick={() => setToggle(true)}>
          <MenuIcon />
        </div>

        {toggle && (
          <div className="menu__container">
            <div onClick={() => setToggle(false)}>
              <CloseIcon />
            </div>
            <ul>
              {menuLink.map((item) => (
                <li key={item}>
                  <a href={`${item.url}`} onClick={() => setToggle(false)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavbarMenu;
