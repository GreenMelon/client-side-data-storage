/**
 * routesborder
 */

import NotFound from '../pages/404';
import Index from '../pages/index';

import IndexedDB from '../pages/indexed-database/index';
import CreateDatabase from '../pages/indexed-database/create-database/001';

export default [

    { path: '/', redirect: '/index' },
    { path: '/index', component: Index },

    { path: '/indexed-database', component: IndexedDB },
    { path: '/indexed-database/create-database/001', component: CreateDatabase },

    { path: '*', component: NotFound }

];
