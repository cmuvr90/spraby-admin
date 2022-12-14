import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import think from 'redux-thunk';
import {indexReducer} from './reducers/indexReducer';
import {layoutReducer} from './reducers/layoutReducer';
import { composeWithDevTools } from '@redux-devtools/extension';


/**
 *
 * @type {Reducer<CombinedState<unknown>>}
 */
const rootReducer = combineReducers({
  index: indexReducer,
  layout: layoutReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(think)));
