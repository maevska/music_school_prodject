import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";

export const Modal = ({ onClose, children, label = "Dialog" }) => {
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        const prevOverflow = document.body.style.overflow;

        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = prevOverflow;
        };
    }, [onClose]);

    return createPortal(
        <div className="modal" onClick={onClose}>
            <div
                className="modal__content"
                role="dialog"
                aria-modal="true"
                aria-label={label}
                onClick={(e) => e.stopPropagation()}
            >
                <button type="button" className="modal__close" aria-label="Close" onClick={onClose}>
                    ×
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
};