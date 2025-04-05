import { useState } from "react";
import "./header.css";
import { AlignRight, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header id="home">
      <nav>
        <div className="nav__header">
          <div className="nav__logo">
            <a href="#">
              <img src="./assets/logo-white.png" alt="logo" />
            </a>
          </div>

          <div className="nav_menu__btn">
            {open ? (
              <X
                onClick={() => {
                  setOpen(false);
                }}
              />
            ) : (
              <AlignRight
                onClick={() => {
                  setOpen(true);
                }}
              />
            )}
          </div>
        </div>

        <ul className={`nav__links ${open ? "open" : ""}`}>
          <li
            onClick={() => {
              setOpen(false);
            }}
          >
            <a href="#home">HOME</a>
          </li>
          <li
            onClick={() => {
              setOpen(false);
            }}
          >
            <a href="#about">ABOUT US</a>
          </li>
          <li
            onClick={() => {
              setOpen(false);
            }}
          >
            <a href="#service">SERVICES</a>
          </li>
          <li className="nav__logo">
            <a href="#home">
              <img src="./assets/logo-white.png" alt="" />
            </a>
          </li>
          <li
            onClick={() => {
              setOpen(false);
            }}
          >
            <a href="#client">CLIENT</a>
          </li>
          <li
            onClick={() => {
              setOpen(false);
            }}
          >
            <a href="#blog">BLOG</a>
          </li>
          <li
            onClick={() => {
              setOpen(false);
            }}
          >
            <a href="#contact">CONTACT US</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
