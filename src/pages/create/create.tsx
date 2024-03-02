import React from 'react'

import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'

import { Inputs } from '../../types/inputs'
import { useAddProductTypeMutation } from '../../store/apiSlice'
import Checkbox from '../../components/common/checkbox'
import PacksNumberInput from '../../components/common/packs-number-input'
import PackageTypeInput from '../../components/common/package-type-input'
import Textarea from '../../components/common/textarea'
import Buttons from '../../components/common/buttons'
import './create.css'

const Create = () => {
    const navigate = useNavigate()
    const [addProductType] = useAddProductTypeMutation()
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        data.packsNumber = Number(data.packsNumber)
        try {
            await addProductType(data).unwrap()
            navigate('/')
        } catch (err) {
            console.error('Ошибка при сохранении: ', err)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="create-container">
            <div className="create-container__title">
                <span>Создание типа продукции</span>
            </div>
            <PacksNumberInput
                register={register}
                errors={errors} />
            <PackageTypeInput
                register={register}
                errors={errors}
                setValue={setValue}
                packageType={''} />
            <Checkbox register={register} />
            <Textarea register={register} />
            <Buttons page={''} id='' />
        </form>
    )
}

export default Create