import {
  ON_LOADING,
  ON_MESSAGE,
  ON_MODAL,
  ON_TOP_BAR
} from '../actions/layoutActions';

/**
 *
 * @type {{loading: boolean, message: null, topBar: {}, modal: {}}}
 */
const initialState = {
  loading: false,
  message: null,
  modal: {},
  topBar: {}
};

/**
 *
 * @param state
 * @param action
 * @returns {({loading: boolean, message: null, topBar: {}, modal: {}}&{message: *})|{loading: boolean, message: null, topBar: {}, modal: {}}|({loading: boolean, message: null, topBar: {}, modal: {}}&{loading: *})|({loading: boolean, message: null, topBar: {}, modal: {}}&{modal: *})|({loading: boolean, message: null, topBar: {}, modal: {}}&{topBar: *})}
 */
export const layoutReducer = (state = initialState, action) => {
  switch(action.type) {
    case ON_LOADING:
      return { ...state, loading: action.payload };
    case ON_MESSAGE:
      return { ...state, message: action.payload };
    case ON_MODAL:
      return { ...state, modal: action.payload };
    case ON_TOP_BAR:
      return { ...state, topBar: action.payload };
    default:
      return state;
  }
};
