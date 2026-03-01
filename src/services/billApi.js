import { api } from "./api";

export const billApi = api.injectEndpoints({
  endpoints: (builder) => ({
    fetchBill: builder.query({
      query: (params) => ({
        url: "/bill",
        method: "GET",
        params: {
          type: params?.type,
        },
      }),
      providesTags: (result, error, params) => [{ type: "Bills", params }],
    }),
    fetchBillDetails: builder.query({
      query: (id) => `/bill/${id}`,
      providesTags: (result, error, id) => [{ type: "Bills", id }],
    }),
    createBill: builder.mutation({
      query: (data) => ({
        url: "/bill/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Bills"],
    }),
  }),
  overrideExisting: false,
});

export const { useCreateBillMutation, useFetchBillQuery } = billApi;
