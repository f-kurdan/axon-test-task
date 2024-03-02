import React from 'react'

import {
    useLocation,
    useNavigate
} from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { useForm } from 'react-hook-form'

import { useUpdateProductTypeMutation } from '../../store/apiSlice'
import Checkbox from '../../components/common/checkbox'
import { Inputs } from '../../types/inputs'
import Buttons from '../../components/common/buttons'
import PacksNumberInput from '../../components/common/packs-number-input'
import PackageTypeInput from '../../components/common/package-type-input'
import Textarea from '../../components/common/textarea'
import '../create/create.css'

const Edit = () => {
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
            console.error('Ошибка при сохранении: ', err)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="create-container">
            <div className="create-container__title">
                <span>Редактирование типа продукции</span>
            </div>
            <PacksNumberInput
                register={register}
                errors={errors} />
            <PackageTypeInput
                register={register}
                errors={errors}
                setValue={setValue}
                packageType={packageType} />
            <Checkbox register={register} />
            <Textarea register={register} />
            <Buttons page={'edit'} id={id} />
        </form>
    )
}

export default Edit