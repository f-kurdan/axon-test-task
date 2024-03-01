import React, { useState } from 'react'
import Dropdown from '../../components/common/dropdown'
import Checkbox from '../../components/common/checkbox'
import '../create/create.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { Inputs } from '../../types/inputs'
import { useForm } from 'react-hook-form'
import { useUpdateProductTypeMutation } from '../../store/apiSlice'
import Dialog from '../../components/common/dialog'

const Edit = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const navigate = useNavigate()
    const location = useLocation();
    
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('productType') ?? '';
    const packsNumber = Number(queryParams.get('packsNumber'));
    const packageType = queryParams.get('packageType') ?? '';
    const isArchived = Boolean(queryParams.get('isArchived'));
    const description = queryParams.get('description') ?? '';
    
    const [updateProductType] = useUpdateProductTypeMutation()
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

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        data.packsNumber = Number(data.packsNumber)
        try {
            await updateProductType({ id, ...data }).unwrap()
            navigate('/')
        } catch (err) {
            console.error('Failed to save the post: ', err)
        }
    }

    
    const handleOpenDialog = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

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
                <button onClick={(e) => handleOpenDialog(e)} className='create-container__buttons__delete button'>
                    <span className='create-container__buttons__delete__text'>Удалить</span>
                </button>
                <Dialog
                    isOpen={isDialogOpen}
                    onClose={handleCloseDialog}
                    productTypeId={id} />
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <button className='create-container__buttons__cancel button'>Отмена</button>
                </Link>
                <button className='create-container__buttons__create button'>Сохранить</button>
            </div>
        </form>
    )
}

export default Edit