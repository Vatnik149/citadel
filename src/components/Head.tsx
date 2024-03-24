import React, { FC, useContext, useState } from 'react'
import open from "../assets/open.svg"
import users from "../assets/users.svg"
import fire from "../assets/fire.svg"
import citadelitem from "../assets/citadelitem.svg"
import { Link } from 'react-router-dom'
import Header from '../components/Header'

export interface IHeadLab{
     creator : string;
     dataCreate:string;
     number: string;
     nameLab:string;
}
const HeadLab:FC<IHeadLab> =({creator, dataCreate, number,nameLab }) => {
  return (

       <>
         <div className="about-lab">
               <div className="fio-block fio-block__about-lab">
                    <div className="creator creator__about-lab">
                         <p>Создатель <span>{creator}</span></p>
                         <p className='date-create'>{dataCreate}</p>
                    </div>
                    <h4>Лабораторная работа №{number}<span>,{nameLab}</span></h4>
                </div>
        </div>
       </>
  )
}

export default HeadLab;