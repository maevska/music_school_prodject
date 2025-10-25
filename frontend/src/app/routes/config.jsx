import { HomePage } from '@/pages';
import { RegisterPage } from '@/pages';
import { LoginPage } from '@/pages';
import { AppLayout } from '../Layout/AppLayout';
import { Page404 } from '@/pages';


export const routesConfig = [
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/register',
                element: <RegisterPage />,
            },

            {
                path: '/login',
                element: <LoginPage />,
            },

            {
                path: '/home',
                element: <HomePage />,
            },

        ],
    },

    {
        path: '*',
        element: <Page404 />,
    }

];
