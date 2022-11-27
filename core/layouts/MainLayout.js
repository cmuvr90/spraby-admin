import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Frame, ContextualSaveBar, Loading, Toast, Modal } from '@shopify/polaris'
import { TopBarMarkup } from '../../components/TopBarMarkup'
import { onChangeMessage, onResetModal } from '../redux/actions/layoutActions'
import { AdminMenu } from '../menu/admin'

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

    const logo = {
        width: 124,
        topBarSource: 'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
        contextualSaveBarSource: 'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999',
        url: 'http://jadedpixel.com',
        accessibilityLabel: 'Jaded Pixel',
    }

    const [mobileNavigationActive, setMobileNavigationActive] = useState(false)

    /**
     *
     * @type {JSX.Element|null}
     */
    const loadingMarkup = loading ? <Loading /> : null

    /**
     *
     * @type {*|null}
     */
    const toastMarkup = message ? message.content.map(i =>
        <Toast key={i} {...message} content={i} onDismiss={() => dispatch(onChangeMessage())} />,
    ) : null

    /**
     *
     * @type {JSX.Element}
     */
    const modalMarkup = <Modal
        large={modal.large}
        open={modal.open}
        onClose={() => dispatch(onResetModal())}
        title={modal.title}
        primaryAction={modal.primaryAction}
        secondaryActions={modal.secondaryActions}
        loading={modal.loading}
    >
        <Modal.Section>{modal.content}</Modal.Section>
    </Modal>

    /**
     *
     * @type {JSX.Element|null}
     */
    const contextualSaveBarMarkup = topBar.active ? <ContextualSaveBar
        message={topBar.title}
        saveAction={topBar.saveAction}
        discardAction={topBar.discardAction}
        alignContentFlush={topBar.alignContentFlush}
        fullWidth={topBar.fullWidth}
        contextControl={topBar.contextControl}
        secondaryMenu={topBar.secondaryMenu}
    /> : null

    /**
     *
     * @type {function(): void}
     */
    const toggleMobileNavigationActive = useCallback(() => setMobileNavigationActive(v => !v), [])

    return <Frame
        logo={logo}
        topBar={<TopBarMarkup toggleMobileNavigationActive={toggleMobileNavigationActive} />}
        navigation={<AdminMenu />}
        showMobileNavigation={mobileNavigationActive}
        onNavigationDismiss={toggleMobileNavigationActive}
    >
        {contextualSaveBarMarkup}
        {loadingMarkup}
        {toastMarkup}
        {modalMarkup}
        <Template {...props} />
    </Frame>
}
