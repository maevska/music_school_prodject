import { useState } from "react";
import "./Input.scss";

export const Input = ({
    label,
    placeholder,
    value,
    onChange,
    type = "text",
    icon,
    showPasswordToggle = false,
    error,
    disabled = false,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = type === "password" && showPasswordToggle
        ? (showPassword ? "text" : "password")
        : type;

    return (
        <div className="input-field">
            {label && <label className="input-field__label">{label}</label>}

            <div className="input-field__wrapper">
                {icon && <span className="input-field__icon">{icon}</span>}

                <input
                    className={`input-field__input ${error ? "input-field__input--error" : ""}`}
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                />

                {type === "password" && showPasswordToggle && (
                    <button
                        type="button"
                        className="input-field__toggle"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "Скрыть" : "Показать"}
                    </button>
                )}
            </div>

            {error && <span className="input-field__error">{error}</span>}
        </div>
    );
};
