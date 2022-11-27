import React, { useEffect, useState } from 'react'
import {
    Page,
    Layout,
    ResourceList,
    ResourceItem,
    TextStyle,
    Button,
    Stack,
    FormLayout,
    TextField,
} from '@shopify/polaris'
import {Logo} from '/components'
import { useMessage } from '../../hooks'

export const Brands = ({ services }) => {

    const toast = useMessage();
    const [brands, setBrands] = useState([])
    const [pagination, setPagination] = useState([])
    const [selectedItems, setSelectedItems] = useState([])
    const [params, setParams] = useState({
        sort: 'created_at:desc',
        search: '',
        fields: 'id,name,user_id,image_id',
        with: 'user,image',
        page: 1,
        limit: 10,
    })

    useEffect(() => {
        services.brand.query.list().then(i => {
            console.log(i);
        }).catch(e => {
            toast.error(e?.message || e);
            console.log(e)
        })

        // const brands = await services.brand.query.list();
        // setBrands(brands);
        //
        // console.log(brands);

    }, []);



    const onRemove = () => {}


    return <Page>
        <Layout>
            <ResourceList
                resourceName={{
                    singular: 'brand',
                    plural: 'brands',
                }}
                items={brands}
                renderItem={renderItem}
                selectedItems={selectedItems}
                onSelectionChange={setSelectedItems}
                promotedBulkActions={[{
                    content: 'Delete brands',
                    onAction: onRemove,
                }]}
                sortValue={params.sort}
                sortOptions={[
                    { label: 'New', value: 'created_at:desc' },
                    { label: 'Old', value: 'created_at:asc' },
                ]}
                onSortChange={value => onChange({ sort: value })}
            />
        </Layout>
    </Page>

    function renderItem(item) {
        const { id, name, user, image } = item
        return (
            <ResourceItem
                id={id}
                url={`/auth/brands/${id}`}
                media={<Logo title={name} image={image?.src} />}
                persistActions
                shortcutActions={[{
                    content: 'Login',
                    onAction: () => {},
                }]}
            >
                <h3>
                    <TextStyle variation='strong'>{name}</TextStyle>
                </h3>
                <TextStyle variation='subdued'>{user.email}</TextStyle>
            </ResourceItem>
        )
    }
}
