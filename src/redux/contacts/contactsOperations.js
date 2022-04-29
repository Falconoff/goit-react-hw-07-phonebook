// ------ without createAsyncThunk --------

// import * as contactsAPI from '../../service/apiService';
// import * as contactsActions from './contactsActions';

// ------- Operation -------
// export const fetchContacts = () => async dispatch => {
//   dispatch(contactsActions.fetchContactsRequest());
//   try {
//     const contacts = await contactsAPI.fetchContacts();
//     dispatch(contactsActions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError(error));
//   }
// };

// ------ createAsyncThunk --------

import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../../service/apiService';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const data = await contactsAPI.fetchContacts();
    return data;
  }
);
