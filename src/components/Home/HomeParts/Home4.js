import React from 'react'
import style from './Home4.module.css'
import Countup from 'react-countup'

const Home4 = () => {
   return (
      <div className={style.main}>
         <div className={style.container}>
            <div className={style.staticBlock}>
               <div className={style.staticBox}>
               <Countup
               start={1991}
                  end={2019}
                  duration={15}
                  suffix="yil"
                  className={style.countText}
                  >
                  </Countup>
                  <p>TDYU Ixtisoslashtirilgan filiali tashkil topgan</p>
               </div>
               <div className={style.staticBox}>
               <Countup
                  end={5}
                  duration={15}
                  separator=","
                  className={style.countText}
                  >
                  </Countup>
                  <p>TDYU Ixtisoslashtirilgan filialida kafedralar soni</p>
               </div>
               <div className={style.staticBox}>
                  <Countup
                  end={2347}
                  duration={15}
                  separator=","
                  suffix="ta"
                  className={style.countText}
                  >
                  </Countup>
                  <p>TDYU Ixtisoslashtirilgan filialida talabalar soni</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home4
