import NavMenu from '../../layouts/NavMenu';
import About from '../../views/about/About';

export default [
    {
        name: 'about',
        path: '/about',
        component: NavMenu,
        redirect: '/about/About',
        children: [
            {
                name: 'about',
                path: 'about',
                component: About,
            }
        ]
    }
];