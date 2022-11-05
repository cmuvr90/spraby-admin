import {
    onChangeModal,
    onChangeModalPrimaryAction,
    onChangeModalSecondaryAction,
    onResetModal,
} from '../redux/actions/layoutActions'
import { useDispatch } from 'react-redux'

/**
 *
 * @returns {{secondary: {change: (function(*=, *=): {payload: {}, type: *}), setTitle: (function(*=, *=): {payload: {}, type: *}), unloading: (function(*=): {payload: {}, type: string}), loading: (function(*=, *=): {payload: {}, type: *})}, setContent: (function(*=): {payload: {}, type: string}), change: (function(*=): {payload: {}, type: string}), setTitle: (function(*=): {payload: {}, type: string}), unloading: (function(): {payload: {}, type: string}), loading: (function(*=): {payload: {}, type: string}), close: (function(): {payload: {}, type: string}), primary: {change: (function(*=): {payload: {}, type: string}), setTitle: (function(*=): {payload: {}, type: string}), unloading: (function(): {payload: {}, type: string}), loading: (function(*=): {payload: {}, type: string})}}}
 */
export function useModal() {
    const dispatch = useDispatch()

    /**
     *
     * @returns {{payload: {}, type: string}}
     */
    const close = () => dispatch(onResetModal())

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
     * @param value
     * @returns {{payload: {}, type: string}}
     */
    const setContent = (value = '') => change({ content: value })

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
    const primaryChange = (value = {}) => dispatch(onChangeModalPrimaryAction(value))

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
     * @param index
     * @param value
     * @returns {{payload: {}, type: *}}
     */
    const secondaryChange = (index = 1, value = {}) => dispatch(onChangeModalSecondaryAction({ index, value }))

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
        change,
        close,
        loading,
        unloading,
        setTitle,
        setContent,
        primary: {
            change: primaryChange,
            setTitle: primaryChangeTitle,
            loading: primaryLoading,
            unloading: primaryUnloading,
        },
        secondary: {
            change: secondaryChange,
            setTitle: secondaryChangeTitle,
            loading: secondaryLoading,
            unloading: secondaryUnloading,
        },
    }
}
