import React, { FC, useCallback, useContext, useState } from 'react'
import { Context } from '..'
import debounce from 'debounce';

const Searching:FC =() => {
  const [value, setValue] = useState('')
  const {store} = useContext(Context);

  const updateSearchValue = useCallback(
    debounce((str)=>{
      store.setThemeSearch(str)
      console.log(store.themeSearch)
    }, 1000),
    [],
  )
  const onChangeInput = (e:any)=>{
    setValue(e.target.value)
    updateSearchValue(e.target.value)
  }
  return (
    <div className="search">
        <input type="text" onChange={(e) => onChangeInput(e)} value={value}  name="search" id="search" placeholder='Название...' />
    </div>
  )
}

export default Searching;