export const ON_LOADING = 'ON_LOADING'
export const ON_MESSAGE = 'ON_MESSAGE'
export const ON_MODAL = 'ON_MODAL'
export const ON_TOP_BAR = 'ON_TOP_BAR'

/**
 *
 * @param state
 * @returns {{payload: boolean, type: string}}
 */
export const onLoading = (state = true) => ({
    type: ON_LOADING,
    payload: state,
})

/**
 *
 * @param message
 * @param error
 * @param duration
 * @returns {{payload: *, type: string}}
 */
export const onMessage = (message = null, error = false, duration = 3000) => ({
    type: ON_MESSAGE,
    payload: message ? {
        content: Array.isArray(message) ? message : [message],
        error: error,
        duration: duration,
    } : null,
})

/**
 *
 * @param params
 * @returns {{payload: {secondaryActions: [], onClose: payload.onClose, primaryAction: null, large: boolean, title: null, loading: boolean, open: boolean, content: null}, type: string}}
 */
export const onModal = (params = {}) => ({
    type: ON_MODAL,
    payload: {
        large: false,
        open: false,
        title: null,
        content: null,
        primaryAction: null,
        secondaryActions: [],
        loading: false,
        onClose: () => {},
        ...params,
    },
})

/**
 *
 * @param params
 * @returns {{payload: ({}&{discardAction: null, saveAction: null, active: boolean, title: null}), type: string}}
 */
export const onTopBar = (params = {}) => ({
    type: ON_TOP_BAR,
    payload: {
        active: false,
        title: null,
        saveAction: null,
        discardAction: null,
        ...params,
    },
})
