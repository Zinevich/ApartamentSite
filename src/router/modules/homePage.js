import NavMenu from '../../layouts/NavMenu';
import HomePage from '../../views/home/HomePage';

export default [
    {
        name: 'home',
        path: '/home',
        component: NavMenu,
        redirect: '/home/HomePage',
        children: [
            {
                name: 'HomePage',
                path: 'HomePage',
                component: HomePage
            }
        ]
    }
]