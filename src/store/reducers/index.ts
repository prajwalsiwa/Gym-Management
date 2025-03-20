import {
  AnyAction,
  CombinedState,
  combineReducers,
  Reducer,
} from '@reduxjs/toolkit';
import sidebarSlice, { sidebarListType } from '@Store/slices/sidebarSlice';
import authSlice from '@Store/slices/authSlice';
import common, { CommonState } from '../slices/common';
import loader, { LoaderState } from '../slices/loader';

export interface IRootReducer {
  common: CommonState;
  loader: LoaderState;
  sidebarSlice: sidebarListType;
  authSlice: any;
}

const rootReducer: Reducer<
  CombinedState<IRootReducer>,
  AnyAction
> = combineReducers({
  common,
  loader,
  sidebarSlice,
  authSlice,
});

export default rootReducer;
