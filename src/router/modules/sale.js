import NavMenu from '../../layouts/NavMenu';
import ApartmentSale from '../../views/sale/ApartmentSale';
import HouseSale from '../../views/sale/HouseSale';

export default [
    {
        name: 'sale',
        path: '/sale/',
        component: NavMenu,
        redirect: '/sale/apartmentsale',
        children: [
            {
                name: 'apartmentsale',
                path: 'apartmentsale',
                component: ApartmentSale,
            },
            {
                name: 'housesale',
                path: 'housesale',
                component: HouseSale,
            }
        ]
    }
]