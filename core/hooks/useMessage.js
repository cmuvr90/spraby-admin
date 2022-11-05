import { onChangeMessage } from '../redux/actions/layoutActions'
import { useDispatch } from 'react-redux'

/**
 *
 * @returns {{error: (function(*=, *=): {payload: *, type: string}), close: (function(): {payload: *, type: string}), info: (function(*=, *=): {payload: *, type: string})}}
 */
export function useMessage() {
    const dispatch = useDispatch()

    /**
     *
     * @param value
     * @param duration
     * @returns {{payload: *, type: string}}
     */
    const info = (value = '', duration = 3000) => dispatch(onChangeMessage(value, false, duration))

    /**
     *
     * @param value
     * @param duration
     * @returns {{payload: *, type: string}}
     */
    const error = (value = '', duration = 3000) => dispatch(onChangeMessage(value, true, duration))

    /**
     *
     * @returns {{payload: *, type: string}}
     */
    const close = () => dispatch(onChangeMessage())

    return { info, error, close }
}
