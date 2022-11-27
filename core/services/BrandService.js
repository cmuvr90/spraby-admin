class BrandService {

    constructor(api) {
        this.api = api
    }

    query = {
        list: async () => await this.api.get('/brands/list'),
    }
}

export default BrandService
