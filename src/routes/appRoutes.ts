import Dashboard from '@Views/Dashboard';
import Membership from '@Views/Membership';
import Subscription from '@Views/Subscription';
import LogIn from '@Views/LogIn';
import AddMember from '@Components/Membership/AddMember';
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
    path: '/add-membership',
    name: 'Add Member',
    component: AddMember,
    authenticated: false,
  },
  {
    path: '/subscription',
    name: 'subcription ',
    component: Subscription,
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
