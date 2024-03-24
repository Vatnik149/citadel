import React, { FC, useContext, useEffect, useState } from 'react'
import open from "../assets/open.svg"
import users from "../assets/users.svg"
import fire from "../assets/fire.svg"
import citadelitem from "../assets/citadelitem.svg"
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import HeadLab from '../components/Head'
import ManageButton from '../components/Button'
import TasksService from '../service/TasksService'
import { ITaskList } from '../models/ITaskList'
import { ITask } from '../models/ITask'
import ManageButtons from '../components/manageButton'
import LabItems from '../components/Items'
import LabDesc from '../components/LabDesc'
import particis from "../assets/users.svg";
const LabPage:FC =() => {
     const {id} = useParams<string>()
     const [labInfo, setLabInfo] = useState<ITask | null>(null)
     const [groupsLength,setGroupsLength] = useState<number>(0)

     async function getOneLab (){
          const oneLab = await TasksService.getOneTask(`${id}`)
          setLabInfo(oneLab.data.data)
          
          console.log(labInfo)
     }
     useEffect(()=>{
          getOneLab()
     }, [])
  return (

       <>
          <Header/>
          <div className="container">
               
               <main>
                    
                    {
                         labInfo && (
                              <div key={labInfo.id} style={{display:"flex", gap:"30px"}}>
                                   <div  className="lab-info">
                                        <HeadLab creator={labInfo.author} number={labInfo.number} dataCreate={labInfo.start_at} nameLab={labInfo.theme}/>
                                        <ManageButtons idLab={id}/>
                                        <div className="sortingitem-block">
                                        <LabItems id={labInfo.id} kind={labInfo.kind} number={labInfo.number} theme={labInfo.theme} group="" complexity={labInfo.complexity} start_at={labInfo.start_at} author={labInfo.author}/>
                                        </div>
                                        <LabDesc description={labInfo.description} nameLab={labInfo.theme}/>
                                   </div>
                                   <div  className="lab-group">
                                        <div className="lab-vm">
                                        <h1 className="context__text">
                                             Список машин
                                        </h1>
                                        <div className="vm-items">

                                        {
                                        labInfo.groups.map((group: any, index: number) => (
                                             <div  key={index}>
                                                  {/* Проверяем, что group.student определен и имеет хотя бы один элемент */}
                                                  {group.students && (
                                                       <>
                                                            {group.students.map((student: any, studentIndex: number) => (
                                                            <div key={studentIndex} className="vm-item">
                                                                 {/* Выводим имя студента */}
                                                                 <h3 className="userid">{student.replace('student : ', '')}</h3>
                                                                 {/* Выводим IP адрес */}
                                                                 <p className="ipadrs">ip: 192.168.0.100</p>
                                                                 {/* Кнопка */}
                                                                 <button className='btn btn__copyIp'>
                                                                      <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                           <path d="M16.2046 10.2824L10.5234 15.9636C9.03716 17.4498 6.62749 17.4498 5.14125 15.9636V15.9636C3.65501 14.4773 3.65501 12.0676 5.14125 10.5814L5.29075 10.4319L7.52449 8.25309M12.6165 6.69429L6.84987 12.4609C6.35446 12.9563 6.35446 13.7595 6.84987 14.2549V14.2549C7.34528 14.7504 8.14851 14.7504 8.64392 14.2549L15.6066 7.29231C16.5974 6.30148 16.5974 4.69504 15.6066 3.70421V3.70421C14.6157 2.71338 13.0093 2.71338 12.0184 3.70421L10.9719 4.75074L9.55163 6.17103" stroke="white" strokeWidth="0.87921" strokeLinecap="round"/>
                                                                      </svg>
                                                                 </button>
                                                            </div>
                                                            ))}
                                                       </>
                                                  )}
                                             </div>
                                        ))
}


                                             
                                        </div>
                                        <p className='participants'>Участники {}28</p>
                                        </div>
                                        <div className="recent-events">
            <div className="recent-title">
                <h2>Связанные события</h2>
                </div>
                <div className="recent-items">
                    <div className="recent-item">
                        <div className="recent-status">
                            <p>Статус: <span>Завершен</span></p>
                        </div>
                        <div className="recent-participants-date">
                            <div className="recent-participants">
                                <img src={particis} alt=""  />
                                <p>Участиник</p>
                            </div>
                            <div className="recent-date">
                                <p>07 окт</p>
                            </div>
                        </div>
                        <div className="name-recent-events">
                            <h2>CTF 2 курс</h2>
                            <button>Подробнее</button>
                        </div>
                    </div>
                </div>
                                        </div>
                                   </div>

                              </div>
                         )
                    }



               </main>
          </div>
            
       </>
  )
}

export default LabPage;