import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "./styles.css";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [navbar, setNavbar] = useState(true);

  const changeMenu = () => setMenu(!menu);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navbar ? "navbar" : "navbar active"}>
      <div className="navbar-container">
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
        <div className="menu-icon" onClick={changeMenu}>
          {menu ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
