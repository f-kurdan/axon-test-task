import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
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
    addProductType: builder.mutation<ProductType, Partial<ProductType>>({
      query: body => ({
        url: '/',
        method: 'POST',
        body: body
      }),
      invalidatesTags: ['ProductTypes'],
    }),
    updateProductType: builder.mutation<ProductType, Partial<ProductType>>({
      query: body => ({
        url: '/',
        method: 'PATCH',
        body: body
      }),
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
  useUpdateProductTypeMutation } = apiSlice