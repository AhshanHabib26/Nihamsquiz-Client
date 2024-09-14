import { TCategory } from "@/types/common.data";
import { baseApi } from "../../api/baseApi";
import { TResponseRedux } from "@/types";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/category",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),
    getAllCategories: builder.query({
      query: (args = {}) => {
        const params = new URLSearchParams();

        // Only append page and limit if they are provided
        if (args.page !== undefined && args.page !== null) {
          params.append("page", args.page.toString());
        }
        if (args.limit !== undefined && args.limit !== null) {
          params.append("limit", args.limit.toString());
        }
        Object.keys(args).forEach((key) => {
          if (
            key !== "page" &&
            key !== "limit" &&
            args[key] !== undefined &&
            args[key] !== null
          ) {
            params.append(key, args[key]);
          }
        });

        return {
          url: `/category?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["Category"],
      transformResponse: (response: TResponseRedux<TCategory[]>) => ({
        data: response.data,
        meta: response.meta,
      }),
    }),

    updateCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/category/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Category"],
    }),
    getSingleCategory: builder.query({
      query: (id) => ({
        url: `/category/${id}`,
        method: "GET",
      }),
      providesTags: ["Category"],
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
  useUpdateCategoryMutation,
  useGetSingleCategoryQuery
} = categoryApi;
