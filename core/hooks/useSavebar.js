import React  from 'react'
import { useTopBar } from './useTopbar'

/**
 *
 * @param onSave
 * @param onDiscard
 * @returns {{active: (function(*=): {payload: {}, type: string})}}
 */
export function useSaveBar(onSave, onDiscard) {

    /**
     *
     * @type {{secondary: {unloading: (function(): {payload: {}, type: string}), loading: (function(*=): {payload: {}, type: string})}, current: *, active: (function(*=): {payload: {}, type: string}), reset: (function(): {payload: {}, type: string}), primary: {unloading: (function(): {payload: {}, type: string}), loading: (function(*=): {payload: {}, type: string})}}}
     */
    const topBar = useTopBar(
        {
            content: 'Save',
            onAction: onSaveAction,
        },
        {
            content: 'Discard',
            onAction: onDiscardAction,
        },
    )

    /**
     *
     * @returns {Promise<void>}
     */
    async function onSaveAction() {
        topBar.primary.loading()
        await onSave()
        topBar.primary.unloading()
    }

    /**
     *
     * @returns {Promise<void>}
     */
    async function onDiscardAction() {
        topBar.secondary.loading()
        await onDiscard()
        topBar.secondary.unloading()
    }

    return {
        active: topBar.active,
    }
}
