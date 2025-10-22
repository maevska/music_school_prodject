import "./Container.scss";

export const Container = ({ children, className = "", fluid = false, maxWidth = "1200px", ...props }) => {
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


