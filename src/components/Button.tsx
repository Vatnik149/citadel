import React, { FC, useContext, useState } from 'react'
import open from "../assets/open.svg"
import users from "../assets/users.svg"
import fire from "../assets/fire.svg"
import citadelitem from "../assets/citadelitem.svg"
import { Link } from 'react-router-dom'
import Header from '../components/Header'
const ManageButton:FC =() => {
    const [nameBtn , setNameBtn] = useState<string>("Старт")

  return (
            <button className="">
                {nameBtn}
            </button>
  )
}

export default ManageButton;
