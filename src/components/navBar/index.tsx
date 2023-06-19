import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "./styles.css";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [navbar, setNavbar] = useState(true);
  const [togle, setTogle] = useState(true);

  const changeMenu = () => {
    setTogle(!togle);
    setMenu(!menu);
  };
  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setNavbar(false);
      setTogle(false);
    } else {
      setNavbar(true);
      setTogle(true);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navbar ? "navbar" : "navbar active"}>
      <div className={navbar? "navbar-container": "navbar-container active"}>
        <h1>RafCoder</h1>
        <ul className={menu ? "nav-menu active" : "nav-menu"}>
          <li onClick={changeMenu}>
            <a href="#about">Acerca de Mí</a>
          </li>
          <li onClick={changeMenu}>
            <a href="#tools">Tecnologías</a>
          </li>
          <li onClick={changeMenu}>
            <a href="#projects">Proyectos</a>
          </li>
        </ul>
        <div
          className={togle ? "menu-icon" : "menu-icon active"}
          onClick={changeMenu}
        >
          {menu ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
