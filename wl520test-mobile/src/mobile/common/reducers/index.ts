import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux'
import appsMessage from '../redux/modules/appsList'
import loginMessage from '../redux/modules/login'

export interface RootState {
  tabBar: TabBarStoreState;
  todos: TodoStoreState;
  router: RouterState;
  forget: any;
  dashboarddata: any;
  paymode: any;
}

const reducers = combineReducers<RootState>({
  appsMessage,
  loginMessage,
  router: routerReducer,
  routing: routerReducer,
} as any);

export { reducers }
