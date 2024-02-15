import React, { FC, useContext, useState } from 'react'
import open from "../assets/open.svg"
import users from "../assets/users.svg"
import fire from "../assets/fire.svg"
import citadelitem from "../assets/citadelitem.svg"
import LabItems from './Items'
const SortingItem:FC =() => {
  return (
   <div className="sortingitem-block">
        <LabItems/>
        <LabItems/>
        <LabItems/>
        <LabItems/>
        <LabItems/>
        <LabItems/>
   </div>
  )
}

export default SortingItem;