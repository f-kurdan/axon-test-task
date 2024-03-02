import React from 'react'

import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'

import { Inputs } from '../../types/inputs'
import Dropdown from './dropdown'

const PackageTypeInput = ({ register, errors, setValue, packageType }: {
    register: UseFormRegister<Inputs>,
    errors: FieldErrors<Inputs>,
    setValue: UseFormSetValue<Inputs>,
    packageType: string
}) => {
    return (
        <label className='create-container__label'>
            <span className={`${errors.packageType ? 'required' : ''}`}>Тип упаковки</span>
            <Dropdown register={register}
                setValue={setValue}
                packageType={packageType} />
        </label>
    )
}

export default PackageTypeInput