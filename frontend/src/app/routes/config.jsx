import {HomePage} from '@/pages/HomePage/HomePage'

export const routesConfig = [
    {
        path: '/',
        element: <HomePage/>,
    },

    {
        path: '*',
        element: <div>Page not found: 404</div>
    }
];
