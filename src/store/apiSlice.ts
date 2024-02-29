import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ProductType } from '../models/productType'

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

  })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetProductTypesQuery, useGetProductTypeQuery } = apiSlice