import { onChangeModal, onLoadModal } from '../redux/actions/layoutActions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'

/**
 *
 * @returns {{secondary: {current: (function(*): *), change: (function(*=, *=): {payload: {}, type: string}), setTitle: (function(*=, *=): {payload: {}, type: string}), unloading: (function(*=): {payload: {}, type: string}), loading: (function(*=, *=): {payload: {}, type: string})}, load: (function(*=): {payload: {secondaryActions: *[], onClose: payload.onClose, primaryAction: null, large: boolean, title: null, loading: boolean, open: boolean, content: null}, type: string}), change: (function(*=): {payload: {}, type: string}), setTitle: (function(*=): {payload: {}, type: string}), unloading: (function(): {payload: {}, type: string}), loading: (function(*=): {payload: {}, type: string}), close: (function(): {payload: {secondaryActions: *[], onClose: payload.onClose, primaryAction: null, large: boolean, title: null, loading: boolean, open: boolean, content: null}, type: string}), primary: {current, change: (function(*=): {payload: {}, type: string}), setTitle: (function(*=): {payload: {}, type: string}), unloading: (function(): {payload: {}, type: string}), loading: (function(*=): {payload: {}, type: string})}}}
 */
export function useModal() {
    const dispatch = useDispatch()
    const modal = useSelector(state => state.layout.modal)
    const settings = useRef({})

    useEffect(() => {
        settings.current = modal
    }, [modal])

    /**
     *
     * @returns {{payload: {secondaryActions: *[], onClose: payload.onClose, primaryAction: null, large: boolean, title: null, loading: boolean, open: boolean, content: null}, type: string}}
     */
    const close = () => dispatch(onLoadModal())

    /**
     *
     * @param params
     * @returns {{payload: {secondaryActions: *[], onClose: payload.onClose, primaryAction: null, large: boolean, title: null, loading: boolean, open: boolean, content: null}, type: string}}
     */
    const load = (params = {}) => dispatch(onLoadModal({
        open: true,
        title: 'title',
        content: 'content',
        secondaryActions: [{
            content: 'Close',
            onAction: close,
        }],
        ...params,
    }))

    /**
     *
     * @param params
     * @returns {{payload: {}, type: string}}
     */
    const change = (params = {}) => dispatch(onChangeModal(params))

    /**
     *
     * @param value
     * @returns {{payload: {}, type: string}}
     */
    const setTitle = (value = '') => change({ title: value })

    /**
     *
     * @returns {{payload: {}, type: string}}
     */
    const loading = (value = true) => change({ loading: value })

    /**
     *
     * @returns {{payload: {}, type: string}}
     */
    const unloading = () => loading(false)

    /**
     *
     * @param value
     * @returns {{payload: {}, type: string}}
     */
    const primaryChange = (value = {}) => change({ primaryAction: { ...settings.current.primaryAction, ...value } })

    /**
     *
     * @param value
     * @returns {{payload: {}, type: string}}
     */
    const primaryChangeTitle = (value = '') => primaryChange({ content: value })

    /**
     *
     * @param value
     * @returns {{payload: {}, type: string}}
     */
    const primaryLoading = (value = true) => primaryChange({ loading: value })

    /**
     *
     * @returns {{payload: {}, type: string}}
     */
    const primaryUnloading = () => primaryLoading(false)

    /**
     *
     * @param buttonIndex
     * @param value
     */
    const secondaryChange = (buttonIndex = 1, value = {}) => change(({
        secondaryActions: settings.current.secondaryActions.map(
            (i, index) => index === buttonIndex - 1 ? { ...i, ...value } : { ...i }),
    }))

    /**
     *
     * @param i
     * @param value
     * @returns {{payload: {}, type: string}}
     */
    const secondaryChangeTitle = (i = 1, value = '') => secondaryChange(i, { content: value })

    /**
     *
     * @param i
     * @param value
     * @returns {{payload: {}, type: string}}
     */
    const secondaryLoading = (i = 1, value = true) => secondaryChange(i, { loading: value })

    /**
     *
     * @param i
     * @returns {{payload: {}, type: string}}
     */
    const secondaryUnloading = i => secondaryLoading(i, false)


    return {
        load,
        change,
        close,
        loading,
        unloading,
        setTitle,
        primary: {
            current: settings.current.primaryAction,
            change: primaryChange,
            setTitle: primaryChangeTitle,
            loading: primaryLoading,
            unloading: primaryUnloading,
        },
        secondary: {
            current: i => settings.current.secondaryActions[i - 1],
            change: secondaryChange,
            setTitle: secondaryChangeTitle,
            loading: secondaryLoading,
            unloading: secondaryUnloading,
        },
    }
}
