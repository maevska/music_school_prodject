import { HomePage } from '@/pages';
import { RegisterPage } from '@/pages';
import { LoginPage } from '@/pages';
import { AppLayout } from '../Layouts/AppLayout';
import { AuthLayout } from '../Layouts/AuthLayout';
import { Page404 } from '@/pages';


export const routesConfig = [
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
        path: '*',
        element: <Page404 />,
    }

];
