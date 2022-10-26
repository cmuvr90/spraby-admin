import React from 'react'

/**
 *
 * @param Template
 * @returns
 */
export const MainLayout = Template => props => {
    return <div>
        <Template {...props} />
    </div>
}
