import Dashboard from '@Views/Dashboard';
import Membership from '@Views/Membership';
import Subscription from '@Views/Subscription';
import Settings from '@Views/Settings';
import LogIn from '@Views/LogIn';
import AddMember from '@Components/Membership/AddMember';
import GeneralInfoForm from '@Components/AccountSettings/GeneralInfo/Form/GeneralInfoForm';
import AddSubscription from '@Components/Subscription/AddSubscription';
import { IRoute } from './types';

const appRoutes: IRoute[] = [
  {
    path: '/dashboard',
    name: 'Dashboard ',
    component: Dashboard,
    authenticated: false,
  },
  {
    path: '/membership',
    name: 'Membership ',
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
    path: '/add-package',
    name: 'Add packagge ',
    component: AddSubscription,
    authenticated: false,
  },
  {
    path: '/login',
    name: 'login ',
    component: LogIn,
    authenticated: false,
  },
  {
    path: '/settings',
    name: 'settings ',
    component: Settings,
    authenticated: false,
  },
  {
    path: '/general-settings',
    name: 'General Settings ',
    component: GeneralInfoForm,
    authenticated: false,
  },
];

export default appRoutes;
