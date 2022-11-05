import React from 'react'

export const ON_CHANGE_LOADING = 'ON_CHANGE_LOADING'
export const ON_CHANGE_MESSAGE = 'ON_CHANGE_MESSAGE'

export const ON_LOAD_MODAL = 'ON_LOAD_MODAL'
export const ON_CHANGE_MODAL = 'ON_CHANGE_MODAL'

export const ON_CHANGE_TOP_BAR = 'ON_CHANGE_TOP_BAR'
export const ON_CHANGE_TOP_BAR_PRIMARY_ACTION = 'ON_CHANGE_TOP_BAR_PRIMARY_ACTION'
export const ON_CHANGE_TOP_BAR_SECONDARY_ACTION = 'ON_CHANGE_TOP_BAR_SECONDARY_ACTION'

/**
 *
 * @param state
 * @returns {{payload: boolean, type: string}}
 */
export const onChangeLoading = (state = true) => ({
    type: ON_CHANGE_LOADING,
    payload: state,
})

/**
 *
 * @param message
 * @param error
 * @param duration
 * @returns {{payload: *, type: string}}
 */
export const onChangeMessage = (message = null, error = false, duration = 3000) => ({
    type: ON_CHANGE_MESSAGE,
    payload: message ? {
        content: Array.isArray(message) ? message.reverse() : [message],
        error: error,
        duration: duration,
    } : null,
})

/**
 *
 * @param params
 * @returns {{payload: {secondaryActions: [], onClose: payload.onClose, primaryAction: null, large: boolean, title: null, loading: boolean, open: boolean, content: null}, type: string}}
 */
export const onLoadModal = (params = {}) => ({
    type: ON_LOAD_MODAL,
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
 * @returns {{payload: {}, type: string}}
 */
export const onChangeModal = (params = {}) => ({
    type: ON_CHANGE_MODAL,
    payload: { ...params },
})

/**
 *
 * @param params
 * @returns {{payload: {}, type: string}}
 */
export const onChangeTopBar = (params = {}) => ({
    type: ON_CHANGE_TOP_BAR,
    payload: { ...params },
})

/**
 *
 * @returns {{payload: {}, type: string}}
 */
export const onResetTopBar = () => onChangeTopBar({
    active: false,
    title: null,
    saveAction: null,
    discardAction: null,
    alignContentFlush: false,
    fullWidth: true,
    contextControl: null,
    secondaryMenu: null,
});

/**
 *
 * @param params
 * @returns {{payload: {}, type: string}}
 */
export const onChangeTopBarPrimaryAction = (params = {}) => ({
    type: ON_CHANGE_TOP_BAR_PRIMARY_ACTION,
    payload: { ...params },
})

/**
 *
 * @param params
 * @returns {{payload: {}, type: string}}
 */
export const onChangeTopBarSecondayAction = (params = {}) => ({
    type: ON_CHANGE_TOP_BAR_SECONDARY_ACTION,
    payload: { ...params },
})
