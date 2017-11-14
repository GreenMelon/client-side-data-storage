/**
 * routesborder
 */

import NotFound from '../pages/404';
import Index from '../pages/index';

export default [
    {
        path: '/',
        redirect: '/index'
    }, {
        path: '/index',
        component: Index
    },

    {
        path: '*',
        component: NotFound
    }

];
