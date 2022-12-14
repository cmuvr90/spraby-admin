import React, { useEffect, useState } from 'react'
import { Page, Layout, Card, Button, Stack, FormLayout, TextField } from '@shopify/polaris'
import { useModal, useLoading, useMessage, useSaveBar } from '../../hooks'

export const HomePage = () => {
    const modal = useModal()
    const loading = useLoading()
    const message = useMessage()

    const saveBar = useSaveBar(
        () => new Promise(resolve => setTimeout(resolve, 1000)),
        () => new Promise(resolve => setTimeout(resolve, 1000)),
    )

    const [modalData, setModalData] = useState({ name: '', email: '' })

    useEffect(() => {
        modal.setContent(modalContent)
    }, [modalData])

    const onChangeModalData = value => setModalData(i => ({ ...i, ...value }))

    const modalContent = <FormLayout>
        <TextField
            label='Store name1'
            onChange={v => onChangeModalData({ 'name': v })}
            autoComplete='off'
            value={modalData.name}
        />
        <TextField
            type='email'
            label='Account email'
            onChange={v => onChangeModalData({ 'email': v })}
            autoComplete='email'
            value={modalData.email}
        />
    </FormLayout>

    const defaultModalSettings = {
        open: true,
        title: 'Modal title',
        content: modalContent,
        primaryAction: {
            content: 'Close',
            onAction: () => {
                modal.primary.loading()
                modal.setTitle('Closing...')
                setTimeout(modal.close, 1000)
            },
        },
        secondaryActions: [
            {
                content: 'Start loading button',
                onAction: () => {
                    modal.setTitle('Processing...')
                    modal.secondary.setTitle(1, 'Starting...')
                    setTimeout(() => modal.secondary.loading(1), 1000)
                    setTimeout(() => modal.secondary.unloading(1), 2000)
                    setTimeout(() => modal.secondary.setTitle(1, 'Finishing...'), 2000)
                    setTimeout(() => {
                        modal.setTitle('Modal title')
                        modal.secondary.setTitle(1, 'Start loading button')
                    }, 3000)
                },
            },
        ],
        loading: false,
    }

    return <Page>
        <Layout>
            <Layout.AnnotatedSection title='Loading'>
                <Card sectioned>
                    <Stack>
                        <Button onClick={loading.start}>Start</Button>
                        <Button onClick={loading.finish}>Finish</Button>
                    </Stack>
                </Card>
            </Layout.AnnotatedSection>
            <Layout.AnnotatedSection title='Toast'>
                <Card sectioned>
                    <Stack>
                        <Button onClick={() => message.info('Info')}>Info</Button>
                        <Button
                            onClick={() => message.info(['Info1', 'Info2', 'Info3', 'Info4'])}>Cascade</Button>
                        <Button onClick={() => message.error('Error')}>Error</Button>
                        <Button onClick={message.close}>Close</Button>
                    </Stack>
                </Card>
            </Layout.AnnotatedSection>
            <Layout.AnnotatedSection title='Modal'>
                <Card sectioned>
                    <Stack>
                        <Button
                            onClick={() => modal.change(defaultModalSettings)}
                        >Info</Button>
                    </Stack>
                </Card>
            </Layout.AnnotatedSection>
            <Layout.AnnotatedSection title='Save bar'>
                <Card sectioned>
                    <Stack>
                        <Button onClick={() => {
                            saveBar.active(true)
                        }}
                        >Info</Button>
                    </Stack>
                </Card>
            </Layout.AnnotatedSection>
        </Layout>
    </Page>
}
