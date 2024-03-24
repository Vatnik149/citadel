import React, { FC, useContext, useState } from 'react'
import open from "../assets/open.svg"
import users from "../assets/users.svg"
import fire from "../assets/fire.svg"
import citadelitem from "../assets/citadelitem.svg"
import { Link } from 'react-router-dom'
import Header from '../components/Header'

export interface ILabDesc {
  nameLab: string;
  description: string;
}
const LabComponent:FC<ILabDesc> = ({ nameLab, description }) => {
    return (
      <div className="lab-container">
        <div className="top-block">
          <h3 className='teorHead'>Теоретические сведения</h3>
          <p className='nameLab'>{nameLab}</p>
        </div>
        <div className="bottom-block">
          <textarea value={description} readOnly />
        </div>
      </div>
    );
  };
  
  export default LabComponent;
