import { useState } from "react";
import "./NavBar.scss";
import logo from "@/shared/images/logo_tbh.webp";

export const NavBar = ({ left, actions }) => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navigation">
            <img className="logo" src={logo} alt="logo_school" width="60" height="60" />

            {left && (
                <div
                    className={`left${open ? " left--open" : ""}`}
                    onClick={() => setOpen(false)}
                >
                    {left}
                </div>
            )}

            <div className="actions">{actions}</div>

            {left && (
                <button
                    type="button"
                    className="burger"
                    aria-label="Menu"
                    aria-expanded={open}
                    onClick={() => setOpen((value) => !value)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            )}
        </nav>
    );
};