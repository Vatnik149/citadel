import React, { FC, useContext, useEffect, useState } from 'react'
import open from "../assets/open.svg"
import users from "../assets/users.svg"
import fire from "../assets/fire.svg"
import citadelitem from "../assets/citadelitem.svg"
import LabItems from './Items'
import { ITaskList } from '../models/ITaskList'
import TasksService from '../service/TasksService'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
const SortingItem:FC =() => {
  const [tasks, setTasks] = useState<ITaskList[]>([]);
  const {store} = useContext(Context)

  async function fetchData() {
    try {
      const response = await TasksService.getAllTask(store.kindSearch, store.themeSearch, store.groupsSearch);
      console.log(response.data.data); 
      setTasks(response.data.data);
      console.log(tasks);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  }



  useEffect(() => {
    fetchData();
  }, [store.kindSearch, store.themeSearch, store.groupsSearch]);
  return (
   <div className="sortingitem-block">

    {
      tasks.map((task, index) => (
        <LabItems key={index} id={task.id} kind={task.kind} number={task.number} theme={task.theme} group={task.group} complexity={task.complexity} start_at={task.start_at} author={task.author} />
      ))
    }
        
   </div>
  )
}

export default observer(SortingItem);