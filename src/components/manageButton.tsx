// ManageButtons.tsx
import React, { FC } from 'react';
import ManageButton, { IManageButton } from './Button';
import VMService from '../service/VMService';

export interface IManageButtonsProps {
  idLab: string | undefined;
}

const ManageButtons: FC<IManageButtonsProps> = ({ idLab }) => {
  async function startVM(idLab: string | undefined) {
    const startvm = await VMService.startVM(idLab);
    console.log(startvm);
  }
 


  async function stopVM(idLab: string | undefined) {
    const stopvm = await VMService.stopVM(idLab);
    console.log(stopVM);
  }

  async function otkatVM(idLab: string | undefined) {
    console.log("Откат");
  }

  return (
    <div className="manageButton-block">
      <ManageButton nameButton="Запуск" actionName="startBtn" actionFunction={() => startVM(idLab)} />
      <ManageButton nameButton="Стоп" actionName="stopBtn" actionFunction={() => stopVM(idLab)} />
      <ManageButton nameButton="Откат" actionName="otkatBtn" actionFunction={() => otkatVM(idLab)} />
    </div>
  );
};

export default ManageButtons;
