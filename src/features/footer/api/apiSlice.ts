import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const fakeUrl = 'https://www.figma.com/';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  tagTypes: ['Post_Ticket'],
  baseQuery: fetchBaseQuery(
    {
      baseUrl: fakeUrl,
    }),
  endpoints: builder => ({
    sendResultTicket: builder.mutation<any, { firstField: number[], secondField: number[], isTicketWon: boolean }>({
      query: ({firstField, secondField, isTicketWon}) => ({
        url: 'user{id}/ticket{id}',
        method: 'POST',
        body: {
          firstField,
          secondField,
          isTicketWon,
        },
      }),
      invalidatesTags: ['Post_Ticket'],
    }),
  }),
});
