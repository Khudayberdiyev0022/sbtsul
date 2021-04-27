import React, { useState } from 'react'
import style from './NavbarMobile.module.css'
import { FiMenu } from 'react-icons/fi'
import { VscClose } from 'react-icons/vsc'
import logo from "../../assets/icons/logoFT.svg";
import { Link } from 'react-router-dom';


function NavbarMobile() {
    const [clicked, setClicked] = useState(false)


    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.mainPart}>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    {
                        clicked ? <VscClose onClick={() => setClicked(false)} /> : <FiMenu onClick={() => setClicked(true)} />
                    }
                </div>
                <div className={clicked ? `${style.subPart} ${style.open}` : `${style.subPart} ${style.close}`}>
                    <div className={style.titleName}>
                        <div className={style.navbarLink}>
                            <Link datatext='Filial' to="/filial">
                                Filial <span></span>
                            </Link>
                        </div>
                        <div className={style.navbarLink}>
                            <Link datatext='Tuzilma' to="/tuzilma">
                                Tuzilma <span></span>
                            </Link>
                        </div>
                        <div className={style.navbarLink}>
                            <Link datatext='Faoliyat' to="/faoliyat">
                                Faoliyat <span></span>
                            </Link>
                        </div>
                        <div className={style.navbarLink}>
                            <Link datatext='Talabalar' to="/talabalar">
                                Talabalar <span></span>
                            </Link>
                        </div>
                        <div className={style.navbarLink}>
                            <Link datatext='Qabul' to="/qabul">
                                Qabul <span></span>
                            </Link>
                        </div>
                        <div className={style.navbarLink}>
                            <Link datatext='Biz haqimizda' to="/bizhaqimizda">
                                Biz haqimizda <span></span>
                            </Link>
                        </div>
                        <div className={style.navbarLink}>
                            <Link datatext='Aloqa' to="/aloqa">
                                Aloqa <span></span>
                            </Link>
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
    )
}

export default NavbarMobile
