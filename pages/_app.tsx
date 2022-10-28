import React, { FC } from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../core/redux/store'
import { MainLayout } from '../core/layouts/MainLayout'
import '../styles/index.scss'
import '@splidejs/react-splide/css'
import Head from 'next/head'
import en from '@shopify/polaris/locales/en.json'
import { AppProvider } from '@shopify/polaris'
import '@shopify/polaris/build/esm/styles.css'

/**
 *
 * @param Component
 * @param pageProps
 * @constructor
 */
const App: FC = ({ Component, pageProps }: AppProps) => {

    const Layout = MainLayout(Component)

    return <React.StrictMode>
        <Head>
            <title>app</title>
        </Head>
        <Provider store={store}>
            <AppProvider i18n={en}>
                <Layout {...pageProps} />
            </AppProvider>
        </Provider>
    </React.StrictMode>
}

export default App
