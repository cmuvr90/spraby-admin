import React from 'react'
import { Navigation } from '@shopify/polaris'
import { HomeMajor, ManagedStoreMajor } from '@shopify/polaris-icons'
import { useRouter } from 'next/router'

export const AdminMenu = () => {

    const route = useRouter()

    return <Navigation location={route.route}>
        <Navigation.Section
            items={[
                {
                    label: 'Dashboard',
                    icon: HomeMajor,
                    url: '/dashboard',
                },
                {
                    label: 'Brands',
                    icon: ManagedStoreMajor,
                    url: '/brands',
                },
                {
                    label: 'Options',
                    icon: ManagedStoreMajor,
                    url: '/options',
                },
                {
                    label: 'Categories',
                    icon: ManagedStoreMajor,
                    url: '/categories',
                },
                {
                    label: 'Collections',
                    icon: ManagedStoreMajor,
                    url: '/collections',
                },
            ]}
        />
    </Navigation>
}
