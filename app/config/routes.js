/**
 * routesborder
 */

import NotFound from '../pages/404';
import Index from '../pages/index';

import IndexedDB from '../pages/indexed-database/index';
import CreateDatabase from '../pages/indexed-database/create-database/001';
import CreateObjectStore from '../pages/indexed-database/create-object-store/001';
import DefinePrimaryKey from '../pages/indexed-database/define-primary-key/001';
import DefineIndex from '../pages/indexed-database/define-index/001';

import CreateData from '../pages/indexed-database/operate-data/create-data';
import ReadData from '../pages/indexed-database/operate-data/read-data';
import UpdateData from '../pages/indexed-database/operate-data/update-data';

export default [

    { path: '/', redirect: '/index' },
    { path: '/index', component: Index },

    { path: '/indexed-database', component: IndexedDB },
    { path: '/indexed-database/create-database/001', component: CreateDatabase },
    { path: '/indexed-database/create-object-store/001', component: CreateObjectStore },
    { path: '/indexed-database/define-primary-key/001', component: DefinePrimaryKey },
    { path: '/indexed-database/define-index/001', component: DefineIndex },

    { path: '/indexed-database/operate-data/create-data', component: CreateData },
    { path: '/indexed-database/operate-data/read-data', component: ReadData },
    { path: '/indexed-database/operate-data/update-data', component: UpdateData },

    { path: '*', component: NotFound }

];
