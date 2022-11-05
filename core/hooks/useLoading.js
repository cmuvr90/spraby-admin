import { onChangeLoading } from '../redux/actions/layoutActions'
import { useDispatch } from 'react-redux'

/**
 *
 * @returns {{start: (function(*=): {payload: boolean, type: string}), finish: (function(): {payload: boolean, type: string})}}
 */
export function useLoading() {
    const dispatch = useDispatch()

    /**
     *
     * @param value
     * @returns {{payload: boolean, type: string}}
     */
    const start = (value = true) => dispatch(onChangeLoading(value))

    /**
     *
     * @returns {{payload: boolean, type: string}}
     */
    const finish = () => start(false)

    return { start, finish }
}
