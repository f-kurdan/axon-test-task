import React from 'react'
import './table.css'

const Dialog = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    if (!isOpen) {
        return null
    }

    const handleClose = () => {
        onClose();
    };

    return (
        <dialog open={isOpen} className="dialog-overlay" onClick={handleClose}>
            <div className="dialog-content">
                <h3 className='dialog__title'>Удалить?</h3>
                <div className="dialog-buttons">
                    <button className='dialog__close-button button'>Нет</button>
                    <button className='dialog__confirm-button button'>Да</button>
                </div>
            </div>
        </dialog>
    );
};

export default Dialog