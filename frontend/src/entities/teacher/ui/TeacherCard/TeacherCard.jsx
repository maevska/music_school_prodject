import "./TeacherCard.scss";

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

const MonitorIcon = () => (
    <svg {...iconProps}>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
);

const UserIcon = () => (
    <svg {...iconProps}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const PinIcon = () => (
    <svg {...iconProps}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

export const TeacherCard = ({ teacher }) => {
    const { name, role, subjects, lessonFormat, location, experience, photo } = teacher;
    const isOnline = lessonFormat === "online";

    return (
        <article className="teacher-card">
            <div className="teacher-card__photo">
                <img src={photo} alt={name} loading="lazy" decoding="async" />

                <span className="teacher-card__badge">
                    <strong>{experience}</strong> years of experience
                </span>

                <div className="teacher-card__caption">
                    <h3 className="teacher-card__name">{name}</h3>
                    <p className="teacher-card__role">{role}</p>
                </div>
            </div>

            <div className="teacher-card__body">
                <ul className="teacher-card__tags">
                    {subjects.map((subject) => (
                        <li key={subject} className="teacher-card__tag">{subject}</li>
                    ))}
                </ul>

                <ul className="teacher-card__meta">
                    <li>
                        {isOnline ? <MonitorIcon /> : <UserIcon />}
                        <span>{isOnline ? "Online lessons" : "In-person lessons"}</span>
                    </li>
                    {location && (
                        <li>
                            <PinIcon />
                            <span>{location}</span>
                        </li>
                    )}
                </ul>
            </div>
        </article>
    );
};