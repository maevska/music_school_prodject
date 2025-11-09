import { HomePage, RegisterPage, LoginPage, Page404, Landing} from '@/pages';
import { AppLayout } from '../Layouts/AppLayout';
import { AuthLayout } from '../Layouts/AuthLayout';

export const routesConfig = [
    {
        path: '/',
        element: <AppLayout />,
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
                path: '/home',
                element: <HomePage />,
            },

    {
        path: '*',
        element: <Page404 />,
    },

];
