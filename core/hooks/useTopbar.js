import { useDispatch, useSelector } from 'react-redux'
import { onTopBar } from '../redux/actions/layoutActions'
import React from 'react'

/**
 *
 * @param primaryAction
 * @param secondaryAction
 * @returns {{secondary: {unloading: (function(): {payload: {discardAction: null, fullWidth: boolean, saveAction: null, secondaryMenu: null, active: boolean, alignContentFlush: boolean, title: null, contextControl: null}, type: string}), loading: (function(*=): {payload: {discardAction: null, fullWidth: boolean, saveAction: null, secondaryMenu: null, active: boolean, alignContentFlush: boolean, title: null, contextControl: null}, type: string})}, current: *, load: (function(*=): {payload: {discardAction: null, fullWidth: boolean, saveAction: null, secondaryMenu: null, active: boolean, alignContentFlush: boolean, title: null, contextControl: null}, type: string}), close: (function(): {payload: {discardAction: null, fullWidth: boolean, saveAction: null, secondaryMenu: null, active: boolean, alignContentFlush: boolean, title: null, contextControl: null}, type: string}), open: (function(*=): {payload: {discardAction: null, fullWidth: boolean, saveAction: null, secondaryMenu: null, active: boolean, alignContentFlush: boolean, title: null, contextControl: null}, type: string}), primary: {unloading: (function(): {payload: {discardAction: null, fullWidth: boolean, saveAction: null, secondaryMenu: null, active: boolean, alignContentFlush: boolean, title: null, contextControl: null}, type: string}), loading: (function(*=): {payload: {discardAction: null, fullWidth: boolean, saveAction: null, secondaryMenu: null, active: boolean, alignContentFlush: boolean, title: null, contextControl: null}, type: string})}}}
 */
export function useTopBar(primaryAction, secondaryAction) {
    const dispatch = useDispatch()
    const topBar = useSelector(state => state.layout.topBar)

    /**
     *
     * @param value
     * @returns {{payload: {discardAction: null, fullWidth: boolean, saveAction: null, secondaryMenu: null, active: boolean, alignContentFlush: boolean, title: null, contextControl: null}, type: string}}
     */
    const change = value => dispatch(onTopBar(value))

    /**
     *
     * @param params
     * @returns {{payload: {discardAction: null, fullWidth: boolean, saveAction: null, secondaryMenu: null, active: boolean, alignContentFlush: boolean, title: null, contextControl: null}, type: string}}
     */
    const load = (params = {}) => change({
        active: true,
        saveAction: primaryAction,
        discardAction: secondaryAction,
        ...params,
    })

    /**
     *
     * @param value
     * @returns {{payload: {discardAction: null, fullWidth: boolean, saveAction: null, secondaryMenu: null, active: boolean, alignContentFlush: boolean, title: null, contextControl: null}, type: string}}
     */
    const open = (value = true) => change({ active: value })

    /**
     *
     * @returns {{payload: {discardAction: null, fullWidth: boolean, saveAction: null, secondaryMenu: null, active: boolean, alignContentFlush: boolean, title: null, contextControl: null}, type: string}}
     */
    const close = () => open(false)

    /**
     *
     * @param value
     * @returns {{payload: {discardAction: null, fullWidth: boolean, saveAction: null, secondaryMenu: null, active: boolean, alignContentFlush: boolean, title: null, contextControl: null}, type: string}}
     */
    const loadingPrimaryAction = (value = true) => change({
        saveAction: { ...topBar.saveAction, loading: value },
    })

    /**
     *
     * @returns {{payload: {discardAction: null, fullWidth: boolean, saveAction: null, secondaryMenu: null, active: boolean, alignContentFlush: boolean, title: null, contextControl: null}, type: string}}
     */
    const unloadingPrimaryAction = () => loadingPrimaryAction(false)


    /**
     *
     * @param value
     * @returns {{payload: {discardAction: null, fullWidth: boolean, saveAction: null, secondaryMenu: null, active: boolean, alignContentFlush: boolean, title: null, contextControl: null}, type: string}}
     */
    const loadingSecondaryAction = (value = true) => change({
        discardAction: { ...topBar.discardAction, loading: value },
    })

    /**
     *
     * @returns {{payload: {discardAction: null, fullWidth: boolean, saveAction: null, secondaryMenu: null, active: boolean, alignContentFlush: boolean, title: null, contextControl: null}, type: string}}
     */
    const unloadingSecondaryAction = () => loadingSecondaryAction(false)

    return {
        load,
        current: topBar,
        open,
        close,
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
