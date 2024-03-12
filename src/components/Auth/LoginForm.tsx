import React, { FC, useContext, useState } from 'react'
import loginicon from '../../assets/icons/logininput.svg'
import passicon from '../../assets/icons/passinput.svg'
import {observer} from "mobx-react-lite";
import { Link } from 'react-router-dom';
import { Context } from '../..';

const LoginForm:FC =() => {
  const [login, setLogin] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [service, setService] = useState<string>("pam")
  
  const {store} = useContext(Context);


  const handleData = (event:any) =>{
    event.preventDefault();
    store.login(password, "pam", login);
  }
  
  return (
    <div className="form_block">
      <form action="">
          <div className="login_block">
              <input type="text" name="login" id="login" placeholder='Логин' onChange={e => setLogin(e.target.value)} />
          </div>
          <div className="password_block">
              <input type="text" name="password" id="password" placeholder='Пароль' onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="info_block">
              <div className="reset_password">
                  Забыли пароль?
              </div>
              <div className="button-block">
                <div className="submit-button">
                  <button onClick={(event:any) => handleData(event)}>Войти</button>
                </div>
              </div>
          </div>
      </form>
    </div>
  )
}

export default observer(LoginForm);