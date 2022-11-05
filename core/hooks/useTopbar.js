import { useDispatch } from 'react-redux'
import {
    onChangeTopBar,
    onResetTopBar,
    onChangeTopBarPrimaryAction,
    onChangeTopBarSecondayAction,
} from '../redux/actions/layoutActions'
import React from 'react'

/**
 *
 * @param primaryAction
 * @param secondaryAction
 * @returns {{secondary: {unloading: (function(): {payload: {}, type: string}), loading: (function(*=): {payload: {}, type: string})}, current: *, active: (function(*=): {payload: {}, type: string}), reset: (function(): {payload: {}, type: string}), primary: {unloading: (function(): {payload: {}, type: string}), loading: (function(*=): {payload: {}, type: string})}}}
 */
export function useTopBar(primaryAction, secondaryAction) {
    const dispatch = useDispatch()

    /**
     *
     * @returns {{payload: {}, type: string}}
     */
    const reset = () => dispatch(onResetTopBar())

    /**
     *
     * @param value
     * @returns {{payload: {}, type: string}}
     */
    const change = value => dispatch(onChangeTopBar({
        saveAction: primaryAction,
        discardAction: secondaryAction,
        ...value,
    }))

    /**
     *
     * @param value
     * @returns {{payload: {}, type: string}}
     */
    const active = (value = true) => change({ active: value })

    /**
     *
     * @param value
     * @returns {{payload: {}, type: string}}
     */
    const loadingPrimaryAction = (value = true) => dispatch(onChangeTopBarPrimaryAction({ loading: value }))

    /**
     *
     * @returns {{payload: {}, type: string}}
     */
    const unloadingPrimaryAction = () => loadingPrimaryAction(false)

    /**
     *
     * @param value
     * @returns {{payload: {}, type: string}}
     */
    const loadingSecondaryAction = (value = true) => dispatch(onChangeTopBarSecondayAction({ loading: value }))

    /**
     *
     * @returns {{payload: {}, type: string}}
     */
    const unloadingSecondaryAction = () => loadingSecondaryAction(false)

    return {
        active,
        reset,
        primary: {
            loading: loadingPrimaryAction,
            unloading: unloadingPrimaryAction,
        },
        secondary: {
            loading: loadingSecondaryAction,
            unloading: unloadingSecondaryAction,
        },
    }
}
