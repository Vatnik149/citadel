import React, { FC, useContext, useState } from 'react'

const Searching:FC =() => {
  return (
    <div className="search">
        <input type="text" name="search" id="search" placeholder='Поиск' />
    </div>
  )
}

export default Searching;