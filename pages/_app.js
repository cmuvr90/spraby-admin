import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../core/redux/store'
import { MainLayout } from '../core/layouts/MainLayout'
import '../styles/index.scss'
import '@splidejs/react-splide/css'
import Head from 'next/head'
import en from '@shopify/polaris/locales/en.json'
import { AppProvider } from '@shopify/polaris'
import '@shopify/polaris/build/esm/styles.css'
import { Link } from '../components'
import { config } from '../core/config'
import Api from '../core/api'
import { BrandService } from '../core/services'

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const App = ({ Component, router, config, pageProps }) => {

    const api = new Api({ url: 'http://0.0.0.0/api/v1' })

    const services = {
        brand: new BrandService(api),
    }

    const Layout = MainLayout(Component)

    return <React.StrictMode>
        <Head>
            <title>app</title>
        </Head>
        <Provider store={store}>
            <AppProvider i18n={en} linkComponent={Link}>
                <Layout {...pageProps} router={router} services={services} />
            </AppProvider>
        </Provider>
    </React.StrictMode>
}

/**
 *
 * @returns {Promise<{config: {api: {url: string}}}>}
 */
// App.getInitialProps = async () => ({ config })


export default App
