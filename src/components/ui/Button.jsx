'use client';

export default function Button({ children, onClick, className = '', type = 'button' }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`pixel-button ${className}`}
        >
            {children}
        </button>
    )
}