import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CreateProductTypeDto } from '../types/createProductTypeDto'
import { ProductType } from '../types/productType'

export const apiSlice = createApi({
  reducerPath: 'productTypesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8081/productTypes' }),
  tagTypes: ['ProductTypes'],
  endpoints: builder => ({
    getProductTypes: builder.query<ProductType[], any>({
      query: () => '/',
      providesTags: ['ProductTypes'],
    }),
    getProductType: builder.query<ProductType, string>({
      query: (productTypeId: string) => `/${productTypeId}`,
      providesTags: ['ProductTypes'],
    }),
    addProductType: builder.mutation<CreateProductTypeDto, Partial<CreateProductTypeDto>>({
      query: body => ({
        url: '/',
        method: 'POST',
        body: body
      }),
      invalidatesTags: ['ProductTypes'],
    }),
    updateProductType: builder.mutation<ProductType, Partial<CreateProductTypeDto> & { id: string }>({
      query: (productType) => {
      const { id, ...body } = productType
      {
        return {
        url: `/${productType.id}`,
        method: 'PATCH',
        body: body
      }}},
      invalidatesTags: ['ProductTypes'],
    }),
    deleteProductType: builder.mutation({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ProductTypes'],
    })
  })
})

export const {
  useGetProductTypesQuery,
  useGetProductTypeQuery,
  useAddProductTypeMutation,
  useUpdateProductTypeMutation,
  useDeleteProductTypeMutation } = apiSlice