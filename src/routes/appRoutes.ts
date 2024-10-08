import Dashboard from '@Views/Dashboard';
import Membership from '@Views/Membership';
import LogIn from '@Views/LogIn';
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
    component: Membership,
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
    component: LogIn,
    authenticated: false,
  },
];

export default appRoutes;
