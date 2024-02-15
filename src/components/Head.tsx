import React, { FC, useContext, useState } from 'react'
import open from "../assets/open.svg"
import users from "../assets/users.svg"
import fire from "../assets/fire.svg"
import citadelitem from "../assets/citadelitem.svg"
import { Link } from 'react-router-dom'
import Header from '../components/Header'
const HeadLab:FC =() => {
  return (

       <>
         <div className="about-lab">
               <div className="fio-block fio-block__about-lab">
                    <div className="creator creator__about-lab">
                         <p>Создатель <span>Петров И.М.</span></p>
                         <p className='date-create'>24 октября 2023 года</p>
                    </div>
                    <h4>Лабораторная работа №1<span>,DDoS-атака</span></h4>
                </div>
        </div>
       </>
  )
}

export default HeadLab;