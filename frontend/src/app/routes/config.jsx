import { HomePage, RegisterPage, LoginPage, Page404, Landing } from '@/pages';
import { LandingLayout } from '../Layouts/LandingLayout';
import { AuthLayout } from '../Layouts/AuthLayout';
import { AppLayout } from '../Layouts/AppLayout';

export const routesConfig = [
    {
        path: '/',
        element: <LandingLayout />,
        children: [
            {
                path: '/',
                element: <Landing />,
            },
        ],
    },

    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/register',
                element: <RegisterPage />,
            },
        ],
    },

    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/home',
                element: <HomePage />,
            },
        ],
    },

    {
        path: '*',
        element: <Page404 />,
    },

];
