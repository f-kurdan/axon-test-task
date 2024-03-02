import React from 'react'

import { useNavigate } from 'react-router-dom';

import { useDeleteProductTypeMutation } from '../../store/apiSlice';
import '../../pages/main/table.css'

const Dialog = ({ isOpen, onClose, productTypeId }: {
    isOpen: boolean,
    onClose: () => void,
    productTypeId: string
}) => {
    const navigate = useNavigate()
    const [deleteProductType] = useDeleteProductTypeMutation()
    if (!isOpen) {
        return null
    }

    const handleDelete = () => {
        deleteProductType(productTypeId)
        navigate('/')
    }

    const handleClose = () => {
        onClose();
    };

    return (
        <dialog open={isOpen} className="dialog" onClick={handleClose}>
            <div className="dialog__content">
                <h3 className='dialog__title'>Удалить тип продукции?</h3>
                <div className="dialog__buttons">
                    <button className='dialog__close-button button'>Нет</button>
                    <button onClick={handleDelete} className='dialog__confirm-button button'>Да</button>
                </div>
            </div>
        </dialog>
    );
};

export default Dialog