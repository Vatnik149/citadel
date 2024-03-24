import React, { FC, useState } from 'react';

export interface SelectedProps {
  selectedList: {
    name: string,
    sortedProperty: string
  }[];
  selectedstore: string;
  setSelectedStore: Function;
}

const Selected: FC<SelectedProps> = ({ selectedList, selectedstore, setSelectedStore }) => {
  const [selectedOption, setSelectedOption] = useState("all"); // Изначально выбрана опция "Все"

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    setSelectedStore(value);
    console.log(selectedstore);
    console.log(selectedOption);
  }

  return (
    <div>
      <select className="select" name="hero" value={selectedOption} onChange={handleSelectChange}>
        {selectedList.map((item, index) => (
          <option className="option" key={index} value={item.sortedProperty}>{item.name}</option>
        ))}
      </select>
    </div>
  );
}

export default Selected;
