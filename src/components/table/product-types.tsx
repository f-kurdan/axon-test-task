import React, { useMemo } from 'react';

import { useGetProductTypesQuery } from '../../store/apiSlice';
import Loader from './loader';
import Type from './type';

const ProductTypes = () => {
    const { data: productTypes = [],
        isSuccess } = useGetProductTypesQuery('');

    const sortedProductTypes = useMemo(() => {
        const sortedPosts = productTypes.slice()
        sortedPosts.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        
        return sortedPosts
    }, [productTypes])

    return (
        <>
            {isSuccess ? sortedProductTypes.map((productType, index) => (
                <tr key={productType.id}>
                    <Type productType={productType} index={index} />
                </tr>
            )) : <Loader />}
        </>
    )
}

export default ProductTypes