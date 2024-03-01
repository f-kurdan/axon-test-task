import React from 'react'
import Checkbox from '../../components/common/checkbox'
import Dropdown from '../../components/common/dropdown'
import './create.css'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { Inputs } from '../../types/inputs'
import { useAddProductTypeMutation } from '../../store/apiSlice'
import { Link } from 'react-router-dom'

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
            console.error('Failed to save the post: ', err)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="create-container">
            <div className="create-container__title">
                <span>Создание типа продукции</span>
            </div>
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
            <label className='create-container__label'>
                <span className={`${errors.packageType ? 'required' : ''}`}>Тип упаковки</span>
                <Dropdown register={register}
                    setValue={setValue} 
                    packageType={''}/>
            </label>
            <div className='create-container__checkbox'>
                Архивировано
                <Checkbox register={register} />
            </div>
            <label className='create-container__textarea-label'>
                Описание
                <textarea {...register("description")}
                    className='create-container__textarea' />
            </label>
            <div className='create-container__buttons'>
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <button className='create-container__buttons__cancel button'>Отмена</button>
                </Link>
                <button className='create-container__buttons__create button'>Создать</button>
            </div>
        </form>
    )
}

export default Create