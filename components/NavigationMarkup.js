import React from 'react'
import { Navigation } from '@shopify/polaris'
import { ArrowLeftMinor, HomeMajor, OrdersMajor, ConversationMinor } from '@shopify/polaris-icons'

export const NavigationMarkup = () => {
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
            action={{
                icon: ConversationMinor,
                accessibilityLabel: 'Contact support',
                onClick: () => console.log('Contact support'),
            }}
            items={[
                {
                    label: 'Dashboard',
                    icon: HomeMajor,
                    onClick: () => {},
                },
                {
                    label: 'Jaded Pixel Orders',
                    icon: OrdersMajor,
                    onClick: () => {},
                },
            ]}
        />
    </Navigation>
}
