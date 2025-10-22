import './Button.scss';


export const Button = ({ children, onClick, type = 'button', disabled = false, className = '', }) => {
    return (
        <button
            type={type}
            className={`button ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

