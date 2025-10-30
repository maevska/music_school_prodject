import { Outlet } from 'react-router-dom';
import { NavBar } from '@/widgets'; 

export const AuthLayout = () => (
    <>
        <NavBar />
        <Outlet />
    </>
);