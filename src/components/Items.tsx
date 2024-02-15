import React, { FC, useContext, useState } from 'react'
import open from "../assets/open.svg"
import users from "../assets/users.svg"
import fire from "../assets/fire.svg"
import citadelitem from "../assets/citadelitem.svg"
import { Link } from 'react-router-dom'
const LabItems:FC =() => {
  return (

        <Link to={"/labpage-details/:id"} className="items">
            <div className="info">
                <div className="namedesc">
                    <h2>Лабораторная работа №1</h2>
                    <p>DDoS-атака</p>
                </div>
                <div className="footer">
                    <div className="icons-info">
                        <button>
                            <img src={open} alt=""  />
                            <p>Открыть</p>
                        </button>
                        <button>
                            <img src={users} alt=""  />
                            <p>Участники: 5/28</p>
                        </button>
                        <button>
                            <img src={fire} alt=""  />
                            <p>Сложность: 3/10</p>
                        </button>
                    </div>
                    <div className="name-date">
                        <div className="name">
                            <p>Петров И. M.</p>
                        </div>
                        <div className="date">
                            <p>24 октября 2023 года</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pic-block">
                <img src={citadelitem} alt=""  />
            </div>
        </Link>
     
  )
}

export default LabItems;