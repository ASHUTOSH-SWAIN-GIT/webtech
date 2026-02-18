import React from 'react';

const Card = ({ children, className = '', onClick, hover = false, style = {}, ...props }) => {
    return (
        <div
            className={`card ${hover ? 'card-hover' : ''} ${className}`}
            onClick={onClick}
            style={style}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
