import React from 'react'

import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { Inputs } from '../../types/inputs'

const PacksNumberInput = ({ register, errors }: {
  register: UseFormRegister<Inputs>,
  errors: FieldErrors<Inputs>
}) => {
  return (
    <label className='create-container__label'>
      <span className={`${errors.packsNumber ? 'required' : ''}`}>Кол-во пачек</span>
      <input
        {...register("packsNumber", {
          required: true,
        })}
        className='create-container__input'
        placeholder=''
        type="number"
      />
    </label>
  )
}

export default PacksNumberInput