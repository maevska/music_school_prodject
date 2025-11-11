import { Outlet } from 'react-router-dom';
import { NavBar } from '@/widgets';
import { Button } from '@/shared';

export const LandingLayout = () => {
    const menu = (
        <ul className="menu">
            <li>School</li>
            <li>Events</li>
            <li>Teachers</li>
            <li>Questions</li>
            <li>Contacts</li>
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
        </>
    );
};