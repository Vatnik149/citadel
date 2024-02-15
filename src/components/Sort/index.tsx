import React, { FC, useContext, useState } from 'react'
import Selected from '../Selected';
import Searching from '../Search';

const Sort:FC =() => {
  const [name, setName] = useState<string>("Сергей Викторович")
  return (
    <section className='sorting'>
        <div className="sorting-block">
          <div className="selecting-block">
              <Selected/>
              <Selected/>
          </div>
          <Searching/>
        </div>
    </section>
  )
}

export default Sort;