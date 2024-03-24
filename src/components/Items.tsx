import React, { FC, useContext, useState } from 'react'
import open from "../assets/open.svg"
import users from "../assets/users.svg"
import fire from "../assets/fire.svg"
import citadelitem from "../assets/citadelitem.svg"
import { Link } from 'react-router-dom'
import { ITaskList } from '../models/ITaskList'


const LabItems:FC<ITaskList> =({id,kind, number, theme, group,complexity,start_at, author  }) => {
  const newGroup = group.replace(/\[|\]/g, '');
  return (

        <Link to={`/labpage-details/${id}`} className="items">
            <div className="info">
                <div className="namedesc">
                    <h2>{kind} {number}</h2>
                    <p>{theme}</p>
                </div>
                <div className="footer">
                    <div className="icons-info">
                        <button>
                            <img src={open} alt=""  />
                            <p>Открыть</p>
                        </button>
                        <button>
                            <img src={users} alt=""  />
                            <p>Участники: {newGroup}</p>
                        </button>
                        <button>
                            <img src={fire} alt=""  />
                            <p>Сложность: {complexity}/10</p>
                        </button>
                    </div>
                    <div className="name-date">
                        <div className="name">
                            <p>{author.replace('teacher : ', '')}</p>
                        </div>
                        <div className="date">
                            <p>{start_at}</p>
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