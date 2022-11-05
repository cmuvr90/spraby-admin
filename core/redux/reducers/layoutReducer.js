import {
    ON_CHANGE_LOADING,
    ON_CHANGE_MESSAGE,
    ON_CHANGE_MODAL,
    ON_LOAD_MODAL,
    ON_CHANGE_TOP_BAR,
    ON_CHANGE_TOP_BAR_PRIMARY_ACTION,
    ON_CHANGE_TOP_BAR_SECONDARY_ACTION,
} from '../actions/layoutActions'

/**
 *
 * @type {{loading: boolean, message: null, topBar: {}, modal: {}}}
 */
const initialState = {
    loading: false,
    message: null,
    modal: {},
    topBar: {},
}

/**
 *
 * @param state
 * @param action
 * @returns {{loading: boolean, message: null, topBar: {}, modal: {}}|{loading: boolean, message: null, topBar, modal: {}}|{loading: boolean, message, topBar: {}, modal: {}}|{loading, message: null, topBar: {}, modal: {}}|{loading: boolean, message: null, topBar: {}, modal}}
 */
export const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_CHANGE_LOADING:
            return { ...state, loading: action.payload }
        case ON_CHANGE_MESSAGE:
            return { ...state, message: action.payload }
        case ON_LOAD_MODAL:
            return { ...state, modal: { ...action.payload } }
        case ON_CHANGE_MODAL:
            return { ...state, modal: { ...state.modal, ...action.payload } }
        case ON_CHANGE_TOP_BAR:
            return { ...state, topBar: { ...state.topBar, ...action.payload } }
        case ON_CHANGE_TOP_BAR_PRIMARY_ACTION:
            return {
                ...state,
                topBar: {
                    ...state.topBar,
                    saveAction: {
                        ...state.topBar.saveAction,
                        ...action.payload,
                    },
                },
            }
        case ON_CHANGE_TOP_BAR_SECONDARY_ACTION:
            return {
                ...state,
                topBar: {
                    ...state.topBar,
                    discardAction: {
                        ...state.topBar.discardAction,
                        ...action.payload,
                    },
                },
            }
        default:
            return state
    }
}
