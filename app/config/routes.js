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
import DeleteData from '../pages/indexed-database/operate-data/delete-data';

import OpenCursor from '../pages/indexed-database/open-cursor/001';
import Count from '../pages/indexed-database/open-cursor/count';
import Range from '../pages/indexed-database/range/001';
import MultiEntry from '../pages/indexed-database/multi-entry/001';

import WebSql from '../pages/web-sql/index';
import OpenDatabase from '../pages/web-sql/open-database/001';
import CreateTable from '../pages/web-sql/create-table/001';
import Transaction from '../pages/web-sql/transaction/001';

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
    { path: '/indexed-database/operate-data/delete-data', component: DeleteData },

    { path: '/indexed-database/open-cursor/001', component: OpenCursor },
    { path: '/indexed-database/open-cursor/count', component: Count },
    { path: '/indexed-database/range/001', component: Range },
    { path: '/indexed-database/multi-entry/001', component: MultiEntry },

    { path: '/web-sql', component: WebSql },
    { path: '/web-sql/open-database/001', component: OpenDatabase },
    { path: '/web-sql/create-table/001', component: CreateTable },
    { path: '/web-sql/transaction/001', component: Transaction },

    { path: '*', component: NotFound }

];
