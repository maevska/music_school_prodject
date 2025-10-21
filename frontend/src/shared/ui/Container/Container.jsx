import "./Container.scss";

/**
 * Универсальный контейнер для переиспользования.
 *
 * Props:
 * - fluid (boolean) — если true, контейнер занимает всю ширину экрана
 * - maxWidth (string) — максимальная ширина контейнера (по умолчанию 1200px)
 * - className (string) — дополнительные классы
 * - children — содержимое контейнера
 */
const Container = ({ children, className = "", fluid = false, maxWidth = "1200px", ...props }) => {
    const classes = ["container", fluid ? "container--fluid" : "", className]
        .filter(Boolean)
        .join(" ");

    const style = fluid ? {} : { maxWidth };

    return (
        <div className={classes} style={style} {...props}>
            {children}
        </div>
    );
};

export default Container;
