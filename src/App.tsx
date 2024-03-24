import React, { useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './styles/main.scss';
import {observer} from "mobx-react-lite";
import LoginForm from './components/Auth/LoginForm';
import Store from './store';
import { Context } from '.';
import { IUser } from './models/IUser';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Interface from './pages/Interface';
import LabPage from './pages/LabPage';


function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const {store} = useContext(Context);

  useEffect(()=>{
    store.refreshToken();
  }, [])

  if(store.isLoading){
    return(
    <div>Загрузка...</div>
    )
  }
  if(!store.isAuth){
    return(
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    )
  }
  else{
    return (
      <Routes>
           <Route path="/" element={<Interface />} />
           <Route path="/labpage-details/:id" element={<LabPage />} />
      </Routes>

    );
  }
  
}

export default observer(App);
