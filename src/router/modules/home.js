import NavMenu from '../../layouts/NavMenu';
import Home from '../../views/home/Home';

export default [
    {
        name: 'home',
        path: '/home',
        component: NavMenu,
        redirect: '/home/Home',
        children: [
            {
                name: 'Home',
                path: 'Home',
                component: Home
            }
        ]
    }
]