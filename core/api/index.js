
export default class Api {

    constructor(credentials) {
        this.setCredentials(credentials)
    }

    /**
     *
     * @type {{DELETE: string, POST: string, GET: string, PUT: string}}
     */
    METHODS = {
        GET: 'get',
        POST: 'post',
        PUT: 'put',
        DELETE: 'delete',
    }

    /**
     *
     * @param credentials
     */
    setCredentials = credentials => {
        this.baseUrl = credentials.url
        // this.apiToken = credentials.apiToken
    }

    /**
     *
     * @param url
     * @param queries
     * @returns {Promise<*>}
     */
    get = async (url = '', queries = {}) => await this._fetch(url, queries, {
        method: this.METHODS.GET,
    })

    /**
     *
     * @param url
     * @param queries
     * @param data
     * @returns {Promise<*>}
     */
    post = async (url = '', queries = {}, data = {}) => await this._fetch(url, queries, {
        method: this.METHODS.POST,
        body: JSON.stringify(data),
    })

    /**
     *
     * @param url
     * @param queries
     * @param data
     * @returns {Promise<*>}
     */
    put = async (url = '', queries = {}, data = {}) => await this._fetch(url, queries, {
        method: this.METHODS.PUT,
        body: JSON.stringify(data),
    })

    /**
     *
     * @param url
     * @param queries
     * @param data
     * @returns {Promise<*>}
     */
    delete = async (url = '', queries = {}, data = {}) => await this._fetch(url, queries, {
        method: this.METHODS.DELETE,
        body: JSON.stringify(data),
    })

    /**
     *
     * @param url
     * @param queries
     * @param data
     * @returns {Promise<*>}
     * @private
     */
    async _fetch(url = '', queries = {}, data = {}) {
        const params = { ...data }
        const prepareQueries = this._prepareQueries({ ...queries })

        params.headers = params.headers ?? {}
        params.headers['Accept'] = 'application/json'
        params.headers['Content-Type'] = 'application/json; charset=utf-8'

        // console.log(`URL: ${this.baseUrl}${url}${prepareQueries}`);
        // console.log(`DATA: ${JSON.stringify(params)}`);

        console.log(`${this.baseUrl}${url}${prepareQueries}`, params);

        const response = await fetch(`${this.baseUrl}${url}${prepareQueries}`, params)

        console.log(`RESPONSE:`, response, response['ok']);

        if (response !== null && typeof response !== 'undefined') {
            if (response['ok']) {
                try {
                    return await response.json()
                } catch (e) {
                    return {}
                }
            } else {
                throw new Error(`${response?.statusText ?? 'Empty error message'}`)
            }
        }
        throw new Error(`Error`)
    }

    /**
     *
     * @param queries
     * @returns {string|string}
     * @private
     */
    _prepareQueries = queries => {
        let values = []
        for (let key in queries) {
            if (queries.hasOwnProperty(key) && queries[key] !== null && queries[key] !== '') {
                values.push(`${key}=${queries[key]}`)
            }
        }
        return values.length > 0 ? '?' + values.join('&') : ''
    }
}
