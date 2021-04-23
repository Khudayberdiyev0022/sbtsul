import React from 'react'
import { Link } from 'react-router-dom'
import style from './Home6.module.css'
import {pictures} from '../ExtraCards/Photo'

const Home6 = () => {
   return (
      <div className={style.main}>
       <div className={style.linkBlock}>
       <Link to="/fotolavhalar">Universitet hayotidan fotolavhalar</Link>
       </div>
       <div className={style.container}>
         {
            pictures.map((picture, index) => {
               return(
                  <img key={index} src={picture.img} alt="students" />
               )
            })
         }
       <button type="submit"><Link to="/fotolavhalar">Barcha rasmlarni ko'rish...</Link></button>
       </div>
      </div>
   )
}

export default Home6
