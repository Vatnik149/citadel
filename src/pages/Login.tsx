import React, { FC, useContext, useState } from 'react'
import loginicon from '../../assets/icons/logininput.svg'
import passicon from '../../assets/icons/passinput.svg'
import {observer} from "mobx-react-lite";
import tg from "../assets/icons/tg.svg"
import citadelshadow from "../assets/citadelshadow.svg"
import citadel from "../assets/citadel.svg"
import { Link } from 'react-router-dom';
import LoginForm from '../components/Auth/LoginForm';

const Login:FC =() => {
  return (
    <div className="login-form">
      <div className="menu-block">
          <div className="pic-block">
              <img src={citadelshadow} alt=""  />
          </div>
      </div>
      <div className="login-block">
            <div className="pic-block">
                <img src={citadel} alt=""  />
            </div>
            <LoginForm/>
            <div className="more-info">
        <div className="description">
          <p>Узнайте больше о нас </p>
          <a href="">
            <img src={tg} alt="" />
            Citadel
          </a>
        </div>
      </div>
      </div>
      
        
    </div>
  )
}

export default observer(Login);