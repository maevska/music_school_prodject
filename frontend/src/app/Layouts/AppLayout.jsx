import { Outlet } from 'react-router-dom';
import { NavBar } from '@/widgets'; 

export const AppLayout = () => (
    <>
        <NavBar />
        <Outlet />
    </>
);