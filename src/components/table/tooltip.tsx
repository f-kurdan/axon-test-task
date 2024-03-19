import React from 'react'

const Tooltip = ({ isOpen, description }: { isOpen: boolean, description: string }) => {
    return description ? (
        <div className="tooltip-container">
            <dialog open={isOpen} className="tooltip__dialog">
                <span className="tooltip__text">
                    {description}
                </span>
            </dialog>
        </div>
    ) : null;
}

export default Tooltip