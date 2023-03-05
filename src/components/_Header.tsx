import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiMenu5Fill } from "react-icons/ri";
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";

import logo from "../assets/logo-fff-es.png";

function Header() {
  const menuLink = ["About", "Services", "Experience", "Projets"];

  const [toggle, setToggle] = useState(false);

  const styles = {
    socialLink:
      "text-xl text-[var(--clr-text-light)] rotate-[-90deg] mr-[1rem] hover:text-[var(--clr-secondary)]",
    socialLine:
      "before:block before:absolute before:bottom-[45%] before:left-[100%] before:ml-[0.5rem] before:mr-[4rem] before:content-none w-[8rem] before:h-[0.1rem] before:bg-[var(--clr-background-light)]",
    socialContainer:
      "hidden md:flex gap-2 m-0 p-0 fixed bottom-[14rem] rotate-90 translate-x-[1rem] translate-y-[4rem]",
  };

  return (
    <header className="flex justify-between items-center py-[2rem] px-[1rem] bg-[blue]">
      <div className="w-[30px] h-[30px]">
        <img src={logo} alt="Eri Schön's Logo" />
      </div>

      <nav className="flex">
        <ul className="justify-start items-center gap-2.5 hidden md:flex">
          {menuLink.map((item) => (
            <li key={`link-${item}`} className="list-none">
              <a
                href={`#${item}`}
                className="uppercase text-sm font-semibold hover:text-[#ffc107]"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="w-[35px] h-[35px] relative flex justify-center items-center md:hidden">
          <RiMenu5Fill onClick={() => setToggle(true)} />

          {toggle && (
            <div className="fixed top-0 bottom-0 right-0 z-50 w-1/2 h-vh flex justify-end items-end flex-col bg-[#2f4365]">
              <IoClose onClick={() => setToggle(false)} />

              <ul className="m-0 mt-[3rem] p-0 h-[100%] w-[100%] flex justify-start items-start flex-col">
                {menuLink.map((item) => (
                  <li key={item} className="m-[1rem]">
                    <a
                      href={`#${item}`}
                      onClick={() => setToggle(false)}
                      className="hover:text-[#ffc107] decoration-none text-[1rem] uppercase font-semibold ease-in-out"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      <div className={`${styles.socialContainer} ${styles.socialLine}`}>
        <a
          href="https://twitter.com/erischon"
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/ericschonhofen/"
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://github.com/erischon"
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub />
        </a>
      </div>
    </header>
  );
}

export default Header;
