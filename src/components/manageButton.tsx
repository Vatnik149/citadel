import React from 'react'
import ManageButton from './Button'

type Props = {}

export default function manageButton({}: Props) {
  return (
    <>
        <div className="managebButton-block">
            <ManageButton />
            <ManageButton/>
            <ManageButton/>
        </div>
    </>
  )
}