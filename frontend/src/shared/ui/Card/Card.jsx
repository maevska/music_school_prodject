import "./Card.scss";

export const Card = ({ title, subtitle, children, onClick, hoverable = false }) => {
    return (
        <div
            className={`card ${hoverable ? "card--hoverable" : ""}`}
            onClick={onClick}
        >
            {title && <h3 className="card__title">{title}</h3>}
            {subtitle && <p className="card__subtitle">{subtitle}</p>}
            <div className="card__content">{children}</div>
        </div>
    );
};