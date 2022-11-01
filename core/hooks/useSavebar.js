import React, { useEffect } from 'react'
import { useTopBar } from './useTopbar'

/**
 *
 * @param onSave
 * @param onDiscard
 * @returns {{active: (function(*=): {payload: {discardAction: null, fullWidth: boolean, saveAction: null, secondaryMenu: null, active: boolean, alignContentFlush: boolean, title: null, contextControl: null}, type: string})}}
 */
export function useSaveBar(onSave, onDiscard) {

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

    useEffect(() => {
        topBar.load({ open: false })
    }, [])

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
        active: topBar.open,
    }
}
