/*
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const contactsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setContactsAction: (state, action) => [...state, action.payload],

    delContactAction: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

export const { setContactsAction, delContactAction } = contactsSlice.actions;

// SELECTORS
export const getContactsArr = state => state.contacts.items;
*/

// ----------- HW-7 RTK Query ----------------
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://626a414a53916a0fbdf7e48a.mockapi.io/contacts',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    addNewContact: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddNewContactMutation,
} = contactsApi;

// SELECTORS
export const getContactsArr = state => state.contacts.queries.data;
