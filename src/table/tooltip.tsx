import React from 'react'

const Tooltip = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <div className="tooltip-container">
            <dialog open={isOpen} className="tooltip">
                <span>
                    Описание продукции.В несколько строк
                </span>
            </dialog>
        </div>
    );
}

export default Tooltip