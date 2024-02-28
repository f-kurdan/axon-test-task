import React, { useState } from 'react'
import '../table/table.css'

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
                <h2>Dialog Title</h2>
                <p>This is the content of the dialog window.</p>
            </div>
        </dialog>
    );
};

export default Dialog