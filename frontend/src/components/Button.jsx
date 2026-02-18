import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', icon, ...props }) => {
    // variants are mapped to CSS classes defined in index.css
    const variantClass = `btn-${variant}`;

    return (
        <button
            className={`btn ${variantClass} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
            {icon && <span style={{ marginLeft: '0.5rem' }}>{icon}</span>}
        </button>
    );
};

export default Button;
