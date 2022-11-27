import React from 'react'
import { default as NextLink } from 'next/link'

/**
 *
 * @param url
 * @param external
 * @param children
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
const Link = ({ url, external, children, ...rest }) => {
    return <NextLink href={url} passHref>
        <a href={url} {...rest} >{children}</a>
    </NextLink>
}

export default Link
