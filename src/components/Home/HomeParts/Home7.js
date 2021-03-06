import React from "react";
import { Link } from "react-router-dom";
import style from "./Home7.module.css";
// import icon from "../../../assets/icons/website.svg";
import { structures } from "../ExtraCards/Photo";

const Home7 = () => {
  return (
    <div className={style.main}>
      <div className={style.linkBlock}>
        <Link to="/tuzilma">Tuzilma</Link>
      </div>
      <div className={style.container}>
        {structures.map((structure, index) => {
          return (
            <div key={index} className={style.box}>
              <img src={structure.icon} alt="icon" />
              <Link to={structure.to}>{structure.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home7;
