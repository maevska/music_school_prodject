import {HomePage} from '@/pages';
import { RegisterPage } from '@/pages';
import {LoginPage} from '@/pages'


export const routesConfig = [
    {
        path: '/',
        element: <HomePage/>,
    },

    {
        path: '/register',
        element: <RegisterPage/>,
    },

    {
        path: '/login',
        element: <LoginPage/>,
    },

    {
        path: '*',
        element: <div>Page not found: 404</div>,
    }
];
