import React, { useState, useCallback } from 'react'
import { TopBar, ActionList } from '@shopify/polaris'


export const TopBarMarkup = () => {
    const [userMenuActive, setUserMenuActive] = useState(false)
    const [searchActive, setSearchActive] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [mobileNavigationActive, setMobileNavigationActive] = useState(false)

    const toggleUserMenuActive = useCallback(
        () => setUserMenuActive((userMenuActive) => !userMenuActive),
        [],
    )

    const handleSearchFieldChange = useCallback((value) => {
        setSearchValue(value)
        setSearchActive(value.length > 0)
    }, [])

    const handleSearchResultsDismiss = useCallback(() => {
        setSearchActive(false)
        setSearchValue('')
    }, [])

    const searchResultsMarkup = (
        <ActionList
            items={[{ content: 'Shopify help center' }, { content: 'Community forums' }]}
        />
    )

    const searchFieldMarkup = (
        <TopBar.SearchField
            onChange={handleSearchFieldChange}
            value={searchValue}
            placeholder='Search'
        />
    )

    const userMenuMarkup = (
        <TopBar.UserMenu
            actions={[
                {
                    items: [{ content: 'Community forums' }],
                },
            ]}
            name='Dharma'
            detail={'Jaded Pixel'}
            initials='D'
            open={userMenuActive}
            onToggle={toggleUserMenuActive}
        />
    )

    const toggleMobileNavigationActive = useCallback(
        () =>
            setMobileNavigationActive(
                (mobileNavigationActive) => !mobileNavigationActive,
            ),
        [],
    )


    return <TopBar
        showNavigationToggle
        userMenu={userMenuMarkup}
        searchResultsVisible={searchActive}
        searchField={searchFieldMarkup}
        searchResults={searchResultsMarkup}
        onSearchResultsDismiss={handleSearchResultsDismiss}
        onNavigationToggle={toggleMobileNavigationActive}
    />
}
