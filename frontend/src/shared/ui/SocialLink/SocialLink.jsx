import "./SocialLink.scss";

const iconProps = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
};

const ICONS = {
    instagram: (
        <svg {...iconProps}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    ),
    telegram: (
        <svg {...iconProps}>
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
    ),
};

// variant: "lime" — залитая лаймовая, "ghost" — прозрачная с рамкой (для тёмного фона).
// Без children получается круглая кнопка-иконка, тогда обязательно передайте label.
export const SocialLink = ({ type, href, variant = "lime", label, children, className = "" }) => {
    const classes = [
        "social-link",
        `social-link--${variant}`,
        children ? "" : "social-link--round",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <a
            className={classes}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={children ? undefined : label}
        >
            {ICONS[type]}
            {children && <span>{children}</span>}
        </a>
    );
};