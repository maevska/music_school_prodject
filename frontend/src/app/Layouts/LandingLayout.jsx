import { Outlet } from 'react-router-dom';
import { NavBar, Footer } from '@/widgets';
import { Button } from '@/shared';

const MENU = [
    { label: "School", href: "#school" },
    { label: "Events", href: "#events" },
    { label: "Teachers", href: "#teachers" },
    { label: "Questions", href: "#questions" },
    { label: "Contacts", href: "#contacts" },
];

export const LandingLayout = () => {
    const menu = (
        <ul className="menu">
            {MENU.map((item) => (
                <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                </li>
            ))}
        </ul>
    );

    const actions = (
        <Button variant="primary" className="login-btn" onClick={() => alert("Нажали кнопку входа")}>
            Login
        </Button>
    );

    return (
        <>
            <NavBar left={menu} actions={actions} />
            <Outlet />
            <Footer />
        </>
    );
};