import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Frame,
    ContextualSaveBar,
    Loading,
    Toast,
    Modal
} from '@shopify/polaris'
import { TopBarMarkup } from '../../components/TopBarMarkup'
import { NavigationMarkup } from '../../components/NavigationMarkup'

/**
 *
 * @param Template
 * @returns
 */
export const MainLayout = Template => props => {
    const dispatch = useDispatch();

    const loading = useSelector(state => state.layout.loading);
    const message = useSelector(state => state.layout.message);
    const modal = useSelector(state => state.layout.modal);
    const topBar = useSelector(state => state.layout.topBar);






    const defaultState = useRef({
        emailFieldValue: 'dharma@jadedpixel.com',
        nameFieldValue: 'Jaded Pixel',
    })

    const [mobileNavigationActive, setMobileNavigationActive] = useState(false)
    const skipToContentRef = useRef(null)
    const [isDirty, setIsDirty] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [modalActive, setModalActive] = useState(false);

    const [supportSubject, setSupportSubject] = useState('');
    const [supportMessage, setSupportMessage] = useState('');


    const handleSubjectChange = useCallback(
        (value) => setSupportSubject(value),
        [],
    );
    const handleMessageChange = useCallback(
        (value) => setSupportMessage(value),
        [],
    );

    const [nameFieldValue, setNameFieldValue] = useState(
        defaultState.current.nameFieldValue,
    )
    const [emailFieldValue, setEmailFieldValue] = useState(
        defaultState.current.emailFieldValue,
    )
    const [storeName, setStoreName] = useState(
        defaultState.current.nameFieldValue,
    )
    const toggleToastActive = useCallback(
        () => setToastActive((toastActive) => !toastActive),
        [],
    );

    const toggleModalActive = useCallback(
        () => setModalActive((modalActive) => !modalActive),
        [],
    );

    const [toastActive, setToastActive] = useState(false)

    const loadingMarkup = isLoading ? <Loading /> : null


    const toggleMobileNavigationActive = useCallback(
        () =>
            setMobileNavigationActive(
                (mobileNavigationActive) => !mobileNavigationActive,
            ),
        [],
    )

    const logo = {
        width: 124,
        topBarSource: 'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
        contextualSaveBarSource: 'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999',
        url: 'http://jadedpixel.com',
        accessibilityLabel: 'Jaded Pixel',
    }

    const handleSave = useCallback(() => {
        defaultState.current.nameFieldValue = nameFieldValue
        defaultState.current.emailFieldValue = emailFieldValue

        setIsDirty(false)
        setToastActive(true)
        setStoreName(defaultState.current.nameFieldValue)
    }, [emailFieldValue, nameFieldValue])

    const handleDiscard = useCallback(() => {
        setEmailFieldValue(defaultState.current.emailFieldValue)
        setNameFieldValue(defaultState.current.nameFieldValue)
        setIsDirty(false)
    }, [])


    const toastMarkup = toastActive ? (
        <Toast onDismiss={toggleToastActive} content="Changes saved" />
    ) : null;

    const contextualSaveBarMarkup = isDirty ? (
        <ContextualSaveBar
            message='Unsaved changes'
            saveAction={{
                onAction: handleSave,
            }}
            discardAction={{
                onAction: handleDiscard,
            }}
        />
    ) : null

    const modalMarkup = (
        <Modal
            open={modalActive}
            onClose={toggleModalActive}
            title="Contact support"
            primaryAction={{
                content: 'Send',
                onAction: toggleModalActive,
            }}
        >
            <Modal.Section>
            </Modal.Section>
        </Modal>
    );

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