import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type sidebarListItemType = {
  id: number;
  path: string;
  name: string;
  icon: string;
};
export interface sidebarListType {
  sidebarList: sidebarListItemType[];
  activeItemId: number | null;
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
      name: 'Sign In',
      icon: 'login',
    },
    {
      id: 5,
      path: '/settings',
      name: 'Settings',
      icon: 'settings',
    },
  ],
  activeItemId: 1,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setActiveItem(state, action: PayloadAction<number>) {
      return {
        ...state,
        activeItemId: action.payload,
      };
    },
    deleteItem() {},
  },
});

export { sidebarSlice };

export default sidebarSlice.reducer;
