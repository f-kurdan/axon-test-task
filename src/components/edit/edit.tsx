import React from 'react'
import Dropdown from '../../common/dropdown'
import Checkbox from '../../common/checkbox'
import '../create/create.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { Inputs } from '../../types/inputs'
import { useForm } from 'react-hook-form'
import { useUpdateProductTypeMutation } from '../../store/apiSlice'

const Edit = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [updateProductType] = useUpdateProductTypeMutation()

    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('productType') ?? '';
    const packsNumber = Number(queryParams.get('packsNumber'));
    const packageType = queryParams.get('packageType') ?? '';
    const isArchived = Boolean(queryParams.get('isArchived'));
    const description = queryParams.get('description') ?? '';

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            packsNumber,
            packageType,    
            isArchived,
            description,
        }
    })
    const onSubmit: SubmitHandler<Inputs> = async(data) => {
        data.packsNumber = Number(data.packsNumber)
        try {
            await updateProductType({id, ...data}).unwrap()
            navigate('/')
        } catch (err) {
            console.error('Failed to save the post: ', err)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="create-container">
            <div className="create-container__title">
                <span>Редактирование типа продукции</span>
            </div>
            <label className='create-container__label'>
                <span className={`${errors.packageType ? 'required' : ''}`}>Кол-во пачек</span>
                <input 
                {...register("packsNumber", {
                    required: true,
                })}
                className='create-container__input' 
                type="number" />
            </label>
            <label className='create-container__label'>
                <span className={`${errors.packageType ? 'required' : ''}`}>Тип упаковки</span>
                <Dropdown register={register}
                    setValue={setValue}
                    packageType={packageType} />
            </label>
            <div className='create-container__checkbox'>
                Архивировано
                <Checkbox register={register} />
            </div>
            <label className='create-container__textarea-label'>
                Описание
                <textarea 
                 {...register("description")}
                className='create-container__textarea' />
            </label>
            <div className='create-container__buttons'>
                <button className='create-container__buttons__delete button'>
                    <span className='create-container__buttons__delete__text'>Удалить</span>
                </button>
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <button className='create-container__buttons__cancel button'>Отмена</button>
                </Link>
                <button className='create-container__buttons__create button'>Сохранить</button>
            </div>
        </form>
    )
}

export default Edit