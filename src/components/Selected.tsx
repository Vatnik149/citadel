import React, { FC, useContext, useState } from 'react'

const Selected:FC =() => {
  return (
    <select className='select' name="hero">
        <option className='option'>Все</option>
        <option className='option' value="t1">Иные мероприятия</option>
        <option className='option' value="t2">Лабораторные работы</option>
        <option className='option' value="t3">Практические работы</option>
   </select>
  )
}

export default Selected;