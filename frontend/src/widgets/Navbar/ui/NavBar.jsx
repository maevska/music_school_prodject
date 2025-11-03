import "./NavBar.scss";
import logo from "@/shared/images/logo_tbh.png"; 

export const NavBar = ({ left, actions }) => {
    return (
        <nav className="navigation">
            <div className="logo">
                <img src={logo} alt="logo_school" /> 
            </div>

            <div className="left">{left}</div>
            <div className="actions">{actions}</div>
        </nav>
    );
};
