import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import style from "./Rahbariyat.module.css";
import VanillaTilt from "vanilla-tilt";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const Rahbariyat = () => {
  const options = {
    scale: 0.9,
    speed: 1000,
    max: 30,
  };

  return (
    <div className={style.main}>
      <div className={style.container}>
        <Tilt options={options}>
          <div className={style.cardVanilla}>
            <div className={style.content}>
              <h3>Djuraev Ixtiyor Baxtiyorovich</h3>
              <Link href="/baxtiyorovich">Read more</Link>
            </div>
          </div>
        </Tilt>
        <Tilt options={options}>
          <div className={style.cardVanilla1}>
            <div className={style.content}>
              <h3>Xurozov Zafar Kaxramonovich</h3>
              <Link href="/kaxramonovich">Read more</Link>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Rahbariyat;
