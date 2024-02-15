import React, { FC, useContext, useState } from 'react'
import open from "../assets/open.svg"
import users from "../assets/users.svg"
import fire from "../assets/fire.svg"
import citadelitem from "../assets/citadelitem.svg"
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import HeadLab from '../components/Head'
import ManageButton from '../components/Button'
const LabPage:FC =() => {
  return (

       <>
          <Header/>
          <div className="container">
               <main>
                    <HeadLab/>
                    <ManageButton/>
               </main>
          </div>
            
       </>
  )
}

export default LabPage;