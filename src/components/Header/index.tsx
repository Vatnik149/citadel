import React, { FC, useContext, useEffect, useState } from 'react';
import log from '../../assets/logo.svg';
import citadelLogo from '../../assets/citadellogo.svg';
import burgeropen from '../../assets/Burger.svg';
import closemenu from '../../assets/closeburger.svg';
import browser from '../../assets/menuicons/Browser.svg';
import layers from '../../assets/menuicons/Layers.svg';
import mail from '../../assets/menuicons/Mail.svg';
import user from '../../assets/menuicons/User.svg';
import moon from '../../assets/Moon.svg';
import sun from '../../assets/Sun.svg';
import polcit from '../../assets/polcit.svg'
import logout from '../../assets/Logout.svg'
import { Context } from '../..';
const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const {store} = useContext(Context);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  

  const handleQuit = () => {
    store.logout(); // Corrected method invocation
    window.location.href = '/';
  }
  

  return (
    <header className="header">
      <div className="header-container">
        <div className="brand-logo">
          <div className="logo header-logo ">
            <img src={log} alt="Logo" />
          </div>
          <div className="namebrand header-namebrand">
            <p>Киберполигон</p>
            <img src={citadelLogo} alt="" />
          </div>
        </div>
        <div className="menu-block">
          <div className="menu-button" onClick={toggleMenu}>
            <img src={menuOpen ? closemenu : burgeropen} alt="" />
          </div>
        </div>
      </div>
      <div className={menuOpen ? "menu-item active" : "menu-item"}>
            <div className="menu-head">
                <div className = 'toggle-switch'>
                <div className="pic-switch">
                    <img src={moon} alt="" />
                    <img src={sun} alt="" />
                  </div>
                <label>
                    <input type = 'checkbox'/>
                    
                    <span className = 'slider'></span>
                </label>
            </div>
            <div className="menu-block">
          <div className="menu-button" onClick={toggleMenu}>
            <img src={menuOpen ? closemenu : burgeropen} alt="" />
          </div>
        </div>
            
            </div>
            <nav>
              <ul>
                <li>
                  <div className="icon">
                    <img src={browser} alt="" />
                  </div>
                  <p>Главная</p>
                </li>
                <li>
                  <div className="icon">
                    <img src={layers} alt="" />
                  </div>
                  <p>Задания</p>
                </li>
                <li>
                  <div className="icon">
                    <img src={mail} alt="" />
                  </div>
                  <p>Сообщения</p>
                </li>
                <li>
                  <div className="icon">
                    <img src={user} alt="" />
                  </div>
                  <p>Личный кабинет</p>
                </li>
              </ul>
            </nav>
            <div className="menu-footer">
              <div className="quit" onClick={() => handleQuit()}>
              <div className="icon" >
                    <img src={logout} alt="" />
                  </div>
                  <p>Выйти</p>
              </div>
              <div className="pic-footer">
                  <img src={polcit} alt=""  />
              </div>
            </div>
          </div>
    </header>
  );
};

export default Header;
