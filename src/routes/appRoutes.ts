import Dashboard from '@Views/Dashboard';
import { IRoute } from './types';

const appRoutes: IRoute[] = [
  {
    path: '/',
    name: 'Dashboard ',
    component: Dashboard,
    authenticated: false,
  },
  {
    path: '/membership',
    name: 'Dashboard ',
    component: Dashboard,
    authenticated: false,
  },
  {
    path: '/subscription',
    name: 'subcription ',
    component: Dashboard,
    authenticated: false,
  },
  {
    path: '/login',
    name: 'login ',
    component: Dashboard,
    authenticated: false,
  },
];

export default appRoutes;
