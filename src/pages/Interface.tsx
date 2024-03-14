import React, { FC, useContext, useEffect, useState } from 'react'
import loginicon from '../../assets/icons/logininput.svg'
import passicon from '../../assets/icons/passinput.svg'
import {observer} from "mobx-react-lite";
import tg from "../../assets/icons/tg.svg"
import citadelshadow from "../../assets/citadelshadow.svg"
import citadel from "../../assets/citadel.svg"
import { Link } from 'react-router-dom';
import LoginForm from '../components/Auth/LoginForm';
import Header from '../components/Header';
import Sort from '../components/Sort';
import Events from '../components/Events';
import SortingItem from '../components/SortingItem';
import TasksService from '../service/TasksService';
import { ITaskList } from '../models/ITaskList';
import { store } from '..';

const Interface:FC =() => {

  function removeElementByStyles() {
    const elements = document.querySelectorAll('div[style="position: absolute; pointer-events: none; color: rgba(130, 130, 130, 0.62); z-index: 100000; width: 100%; text-align: center; bottom: 50%; right: 0px; letter-spacing: 5px; font-size: 24px;"]');
  
    elements.forEach((element) => {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }
    }, []);
  }

  useEffect(()=>{
    removeElementByStyles();
    console.log(store.username)
  })

 
  return (
    <div className="interface ">
        <Header/>
        <main className='container'>
          <div className="interface-items">
            <div className="fio-block">
                    <h4>Здравствуйте, <span>{store.username}</span></h4>
                </div>
              <section className='sortItems-block'>
                <Sort/>
                <SortingItem/>
              </section>
          </div>
            <Events/>
            
           
        </main>
    </div>
  )
}

export default observer(Interface);