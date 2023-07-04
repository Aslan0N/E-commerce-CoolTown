import React, { useContext, useState } from "react";
import { BsBag } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { GlobalContext } from "../Context/GlobalContext";

const Header = () => {
  const [opn, setOpn] = useState(false);
  const toggle = () => {
    setOpn(!opn);
  };
  document.body.style.overflow = opn ? "hidden" : "visible";

  const {  changeMood } = useContext(GlobalContext);
 

  // Translate
  const { t } = useTranslation();

  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <header style={{ display: opn ? "none" : "block" }}>
        <div className="item">
          <div className="logo">
            <img
              src="https://webstrot.com/html/cooltown/html/images/logo.png"
              alt=""
            />
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to={"/"} className={"nav-li"}>
                Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"} className={"nav-li"}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to={"/products"} className={"nav-li"}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to={"/gallery"} className={"nav-li"}>
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to={"/pages"} className={"nav-li"}>
                  Pages
                </NavLink>
              </li>
              <li>
                <NavLink to={"/blog"} className={"nav-li"}>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} className={"nav-li"}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* <button onClick={() => handleChange("az")}>Az</button>
          <button onClick={() => handleChange("en")}>En</button> */}
          <button onClick={changeMood}>change</button>
          <div className="i-con">
            <BsBag className="i" />
            <BiLogIn className="i mx-3" />
            <div className="my-bars" onClick={toggle}>
              <span className="one"></span>
              <span className="two"></span>
              <span className="three"></span>
            </div>
          </div>
        </div>
      </header>
      {/* Owerlay */}
      <section id="owerlay" className={opn ? "opn" : ""}>
        <div className={opn ? "my-close" : "my-close d-none"} onClick={toggle}>
          <span className="one"></span>
          <span className="two"></span>
        </div>
        <ul className={!opn ? "" : "opacity"}>
          <li>
            <NavLink className={"my-nav"} to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={"my-nav"} to={"about"}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className={"my-nav"} to={"products"}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className={"my-nav"} to={"gallery"}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink className={"my-nav"} to={"pages"}>
              Pages
            </NavLink>
          </li>
          <li>
            <NavLink className={"my-nav"} to={"blog"}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className={"my-nav"} to={"contact"}>
              Contact
            </NavLink>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Header;
