import React, {FC} from "react";
import type {AppProps} from 'next/app'
import {MainLayout} from "../core/layouts/MainLayout";
import '../styles/index.scss';
import '@splidejs/react-splide/css';
import Head from 'next/head';

/**
 *
 * @param Component
 * @param pageProps
 * @constructor
 */
const App: FC = ({Component, pageProps}: AppProps) => {
    const Layout = MainLayout(Component);
    return <React.StrictMode>
        <Head>
            <title>app</title>
        </Head>
        <Layout {...pageProps}/>
    </React.StrictMode>
}

export default App;