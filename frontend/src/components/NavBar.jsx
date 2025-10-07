import { useState } from "react";
import "../styles/NavBar.css"

const NavBar = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <nav className="navbar-component">
            <div className="navbar-logo">
                <img src="#" alt="LogoSchool" />
            </div>

            <div className="main-menu">
                <ul className="menu-list">
                    <li>About school</li>
                    <li>Teachers</li>
                    <li>Stady process</li>
                    <li>Questions</li>
                    <li>Contacts</li>
                </ul>
            </div>

            <div className="btn-menu">
                <button onClick={() => setModalOpen(true)}>Start Stady</button>
            </div>
        </nav>
    );
};

export default NavBar;