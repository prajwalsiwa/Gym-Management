import { createSlice } from '@reduxjs/toolkit';

type sidebarListItemType = {
  id: number;
  path: string;
  name: string;
  icon: string;
};
export interface sidebarListType {
  sidebarList: sidebarListItemType[];
}

const initialState: sidebarListType = {
  sidebarList: [
    {
      id: 1,
      path: '/',
      name: 'Home',
      icon: 'home',
    },
    {
      id: 2,
      path: '/membership',
      name: 'Membership',
      icon: 'group',
    },
    {
      id: 3,
      path: '/subscription',
      name: 'Subscription',
      icon: 'subscriptions',
    },
    {
      id: 4,
      path: '/login',
      name: 'signin',
      icon: 'login',
    },
  ],
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {},
});

export { sidebarSlice };

export default sidebarSlice.reducer;
