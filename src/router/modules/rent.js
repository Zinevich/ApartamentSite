import NavMenu from '../../layouts/NavMenu';
import ApartmentRent from '../../views/rent/ApartmentRent';
import HouseRent from '../../views/rent/HouseRent';

export default [
    {
        name: 'rent',
        path: '/rent/',
        component: NavMenu,
        redirect: '/rent/ApartmentRent',
        children: [
            {
                name: 'apartmentrent',
                path: 'apartmentrent',
                component: ApartmentRent,
            },
            {
                name: 'houserent',
                path: 'houserent',
                component: HouseRent,
            }
        ]
    }
]