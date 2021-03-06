import React from 'react'
import style from './Home2.module.css'
import president from '../../../assets/img/pr.jpg'

const Home2 = () => {
   return (
      <div className={style.main}>
         <div className={style.container}>
            <div className={style.textPresident}>
            <h2>O'ZBEKISTON RESPUBLIKASI PREZIDENTINING 7 FEVRAL 2019 YILDAGI PQ–4166-SON QARORI</h2>
            <h3>Ixtisoslashtirilgan filial tashkil etildi</h3>
            </div>
            <div className={style.bgAll}>
               <div className={style.leftImg}>
                  <img src={president} alt="president" />
               </div>
               <div className={style.rightText}>
                  <div className={style.rightCenter}>
                     <p>O'zbekiston Respublikasi Prezidentining 07.02.2019 yildagi “Huqubuzarliklar profilaktikasi va jamoa xavfsizligi ta'minlash sohasida kadrlar tayyorlash tizimini takomillashtirishga doir qo'shimcha chora-tadbirlar to'g'risida”gi PQ–4166-son qarori bilan Toshkent davlat yuridik universitetining Ixtisoslashtirilgan filiali tashkil etilgan.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Home2
