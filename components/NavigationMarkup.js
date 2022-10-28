import React, { useState, useCallback } from 'react'
import { Navigation, ActionList } from '@shopify/polaris'
import { ArrowLeftMinor, HomeMajor, OrdersMajor, ConversationMinor } from '@shopify/polaris-icons'

export const NavigationMarkup = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [modalActive, setModalActive] = useState(false)

    const toggleIsLoading = useCallback(
        () => setIsLoading((isLoading) => !isLoading),
        [],
    )

    const toggleModalActive = useCallback(
        () => setModalActive((modalActive) => !modalActive),
        [],
    )


    return <Navigation location='/'>
        <Navigation.Section
            items={[
                {
                    label: 'Back to Shopify',
                    icon: ArrowLeftMinor,
                },
            ]}
        />
        <Navigation.Section
            separator
            title='Jaded Pixel App'
            items={[
                {
                    label: 'Dashboard',
                    icon: HomeMajor,
                    onClick: toggleIsLoading,
                },
                {
                    label: 'Jaded Pixel Orders',
                    icon: OrdersMajor,
                    onClick: toggleIsLoading,
                },
            ]}
            action={{
                icon: ConversationMinor,
                accessibilityLabel: 'Contact support',
                onClick: toggleModalActive,
            }}
        />
    </Navigation>
}
