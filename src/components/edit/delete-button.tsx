import React, { useState } from 'react'

import Dialog from '../common/dialog'

const DeleteButton = ({ id }: { id: string }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpenDialog = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <>
            <button onClick={(e) => handleOpenDialog(e)} className='buttons__delete button'>
                Удалить
            </button>
            <Dialog
                isOpen={isDialogOpen}
                onClose={handleCloseDialog}
                productTypeId={id} />
        </>
    )
}

export default DeleteButton