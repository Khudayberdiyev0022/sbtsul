import React from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/icons/logoFT.svg";
import { Link } from "react-router-dom";
import {AiFillCaretDown} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.navbar}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <div className={style.titleAll}>
            <h2>
              TOSHKENT DAVLAT YURIDIK UNIVERSITETINING IXTISOSLASHTIRILGAN FILIALI
            </h2>
            <div className={style.titleName}>
              <div className={style.navbarLink}>
                <Link to="/filial">
                  Filial <span></span>
                </Link>
              </div>
              <div className={style.navbarLink}>
                <Link to="/tuzilma">
                  Tuzilma <span></span>
                  <AiFillCaretDown />
                </Link>
              </div>
              <div className={style.navbarLink}>
                <Link to="/faoliyat">
                  Faoliyat <span></span>
                </Link>
              </div>
              <div className={style.navbarLink}>
                <Link to="/talabalar">
                  Talabalar <span></span>
                </Link>
              </div>
              <div className={style.navbarLink}>
                <Link to="/qabul">
                  Qabul <span></span>
                </Link>
              </div>
              <div className={style.navbarLink}>
                <Link to="/bizhaqimizda">
                  Biz haqimizda <span></span>
                </Link>
              </div>
              <div className={style.navbarLink}>
                <Link to="/aloqa">
                  Aloqa <span></span>
                </Link>
              </div>
            </div>
          </div>
          <div className={style.languageBlock}>
            <div className={style.languageBox}>
              <Link to="/uzb">UZB</Link>
            </div>
            <div className={style.languageBox}>
              <Link to="/rus">RUS</Link>
            </div>
            <div className={style.languageBox}>
              <Link to="eng">ENG</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
