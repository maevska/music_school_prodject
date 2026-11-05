import "./SchoolHistory.scss";

// TODO: заменить годы и тексты на реальную историю школы.
const HISTORY = [
    {
        year: "20XX",
        title: "The idea",
        text: "Add here how the idea of the school appeared and who stood behind it.",
    },
    {
        year: "20XX",
        title: "First students",
        text: "Add here how the school started: the first group, the first lessons, the first teachers.",
    },
    {
        year: "20XX",
        title: "Growing the team",
        text: "Add here when the team of teachers grew and which programs and methods were introduced.",
    },
    {
        year: "20XX",
        title: "Events and community",
        text: "Add here when the first concerts and themed parties took place and the student community formed.",
    },
    {
        year: "Today",
        title: "To Be Heard",
        text: "Add here where the school is now: number of students, countries, achievements and plans.",
    },
];

export const SchoolHistory = () => {
    return (
        <section className="history-section" id="school">
            <h2 className="history-title">Our history</h2>
            <p className="history-description">
                Add here a short introduction about how the school was founded and what it stands for.
            </p>

            <ol className="history-timeline">
                {HISTORY.map((item, index) => (
                    <li key={index} className="history-item">
                        <span className="history-item__year">{item.year}</span>
                        <h3 className="history-item__title">{item.title}</h3>
                        <p className="history-item__text">{item.text}</p>
                    </li>
                ))}
            </ol>
        </section>
    );
};