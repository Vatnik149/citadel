import React, { FC, useContext, useState } from 'react'
import Selected from '../TypeSelected';
import Searching from '../Search';
import { Context } from '../..';

const Sort:FC =() => {
  const [name, setName] = useState<string>("Сергей Викторович")
  const {store} = useContext(Context);
  const kindList: { name: string, sortedProperty: string }[] = [
    {
      name: 'Все',
      sortedProperty: '',
    },
    {
      name: 'Соревнования',
      sortedProperty: 'competition',
    },
    {
      name: 'Лабораторные работы',
      sortedProperty: 'laboratory',
    },
    {
      name: 'Практические работы',
      sortedProperty: 'practical',
    }
  ];
  const groupList: { name: string, sortedProperty: string }[] = [
    {
      name: 'Все',
      sortedProperty: '',
    },
    {
      name: 'БИН-173',
      sortedProperty: 'БИН-173',
    },
    {
      name: 'ПИ-306',
      sortedProperty: 'ПИ-306',
    },
    {
      name: 'МЯУ-116',
      sortedProperty: 'МЯУ-116',
    }
  ];
  return (
    <section className='sorting'>
        <div className="sorting-block">
          <div className="selecting-block">
              <Selected selectedList={kindList} selectedstore={store.kindSearch} setSelectedStore={store.setKindSearch}/>
              <Selected selectedList={groupList} selectedstore={store.groupsSearch} setSelectedStore={store.setGroupsSearch}/>
          </div>
          <Searching/>
        </div>
    </section>
  )
}

export default Sort;