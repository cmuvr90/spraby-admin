import React from 'react'
import { Brands } from '../core/templates/Brands'

export default function(props) {
    return <Brands {...props} />
}

// /**
//  *
//  * @param context
//  */
// export const getServerSideProps = async (context) => {
//
//     const config = {
//         api: {
//             url: process.env['API_HOST'],
//         },
//     }
//
//     console.log('config = ', config)
//
//     return {
//         props: { config },
//     }
// }
