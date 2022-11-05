import React, { useCallback, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Frame,
    ContextualSaveBar,
    Loading,
    Toast,
    Modal,
} from '@shopify/polaris'
import { TopBarMarkup } from '../../components/TopBarMarkup'
import { NavigationMarkup } from '../../components/NavigationMarkup'
import { onChangeMessage, onLoadModal } from '../redux/actions/layoutActions'

/**
 *
 * @param Template
 * @returns
 */
export const MainLayout = Template => props => {
    const dispatch = useDispatch()

    const loading = useSelector(state => state.layout.loading)
    const message = useSelector(state => state.layout.message)
    const modal = useSelector(state => state.layout.modal)
    const topBar = useSelector(state => state.layout.topBar)

    const loadingMarkup = loading ? <Loading /> : null

    const toastMarkup = useMemo(() => message ? message.content.map(i =>
        <Toast key={i} {...message} content={i} onDismiss={() => dispatch(onChangeMessage())} />,
    ) : null, [message])

    const modalMarkup = <Modal
        large={modal.large}
        open={modal.open}
        onClose={() => dispatch(onLoadModal())}
        title={modal.title}
        primaryAction={modal.primaryAction}
        secondaryActions={modal.secondaryActions}
        loading={modal.loading}
    >
        <Modal.Section>{modal.content}</Modal.Section>
    </Modal>

    const contextualSaveBarMarkup = topBar.active ? <ContextualSaveBar
        message={topBar.title}
        saveAction={topBar.saveAction}
        discardAction={topBar.discardAction}
        alignContentFlush={topBar.alignContentFlush}
        fullWidth={topBar.fullWidth}
        contextControl={topBar.contextControl}
        secondaryMenu={topBar.secondaryMenu}
    /> : null

    const [mobileNavigationActive, setMobileNavigationActive] = useState(false)
    const skipToContentRef = useRef(null)
    const toggleMobileNavigationActive = useCallback(() => setMobileNavigationActive((mobileNavigationActive) => !mobileNavigationActive), [])

    const logo = {
        width: 124,
        topBarSource: 'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
        contextualSaveBarSource: 'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999',
        url: 'http://jadedpixel.com',
        accessibilityLabel: 'Jaded Pixel',
    }

    return <Frame
        logo={logo}
        topBar={<TopBarMarkup />}
        navigation={<NavigationMarkup />}
        showMobileNavigation={mobileNavigationActive}
        onNavigationDismiss={toggleMobileNavigationActive}
        skipToContentTarget={skipToContentRef.current}
    >
        {contextualSaveBarMarkup}
        {loadingMarkup}
        {toastMarkup}
        {modalMarkup}
        <Template {...props} />
    </Frame>
}
