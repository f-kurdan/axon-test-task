import React, { useMemo } from 'react';
import { useGetProductTypesQuery } from '../../store/apiSlice';
import Type from './type';

const ProductTypes = () => {
    const { data: productTypes = [],
        isLoading,
        isSuccess,
        isError} = useGetProductTypesQuery('');

    const sortedProductTypes = useMemo(() => {
        const sortedPosts = productTypes.slice()
        sortedPosts.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        return sortedPosts
    }, [productTypes])

    if (isLoading) {
        return (<div>Загрузка...</div>)
    } else if (isError) {
        return (<div>{'Произошла ошибка'}</div>)
    }

    return (
        <>
            {isSuccess?  sortedProductTypes.map((productType, index) => (
                <tr key={productType.id}>
                    <Type productType={productType} index={index} />
                </tr>
            )) : null}
        </>
    )
}

export default ProductTypes