import "./NavBar.scss"

export const NavBar = ({ left, actions }) => {
    return (
        <nav className="navigation">
            <div className="logo">p</div>

            <div className="left">{left}</div>

            <div className="actions">{actions}</div>
        </nav>
    );
};

