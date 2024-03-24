// Button.tsx
import React, { FC, useState } from 'react';

export interface IManageButton {
  nameButton: string;
  actionName: string;
  actionFunction: Function;
}

const ManageButton: FC<IManageButton> = ({ nameButton, actionName, actionFunction }) => {
  const [nameBtn, setNameBtn] = useState<string>("Старт");

  return (
    <button className={`button button__${actionName}`} onClick={() => actionFunction()}>
      {nameButton}
    </button>
  );
};

export default ManageButton;
