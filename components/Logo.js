import React, { useMemo } from 'react'
import { Avatar } from '@shopify/polaris'

/**
 *
 * @param title
 * @param image
 * @returns {*}
 * @constructor
 */
const Logo = ({ title = null, image = null }) => {
    const initials = useMemo(() => title?.length > 1 ? title[0].toUpperCase() : null, [title])
    return <Avatar customer={false} initials={initials} source={image ?? null} size='medium' />
}

export default Logo
