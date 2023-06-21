import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "./styles.css";
import useScroll from "../../hooks/useScroll";

const NavBar = (): JSX.Element => {
  const [menu, setMenu] = useState(false);

  const scrollY = useScroll();

  const changeMenu = (): void => {
    setMenu(!menu);
  };

  return (
    <nav className={scrollY >= 70 ? "navbar active" : "navbar"}>
      <div
        className={
          scrollY >= 70 ? "navbar-container active" : "navbar-container"
        }
      >
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
          className={scrollY >= 70 ? "menu-icon active" : "menu-icon"}
          onClick={changeMenu}
        >
          {menu ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
