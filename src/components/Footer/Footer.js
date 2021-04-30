import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import logoFooter from "../../assets/icons/logoFooter.svg";

const Footer = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.list}>
          <ul>
            <h3>Foydali sahifalar</h3>
            <li>
              <Link>Filial</Link>
            </li>
            <li>
              <Link>Tuzilma</Link>
            </li>
            <li>
              <Link>Ta'lim</Link>
            </li>
          </ul>
          <ul>
            <h3>Tuzilmalar</h3>
            <li>
              <Link>Kafedralar</Link>
            </li>
            <li>
              <Link>Bo'limlar</Link>
            </li>
            <li>
              <Link>Dekanatlar</Link>
            </li>
          </ul>
          <ul>
            <h2>Boshqa</h2>
            <li>
              <Link>Yangiliklar</Link>
            </li>
            <li>
              <Link>Qabul</Link>
            </li>
            <li>
              <Link>Aloqa</Link>
            </li>
          </ul>
        </div>
        <div className={style.blogLinks}>
          <Link>Facebook</Link>
          <Link>Telegram</Link>
          <img src={logoFooter} alt="logoFooter" />
          <Link>Youtube</Link>
          <Link>Instagram</Link>
        </div>
        <p className={style.copy}>
          Copyright ©2021 TDYU Ixtisoslashtirilgan filiali. All right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
