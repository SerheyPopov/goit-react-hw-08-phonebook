import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './Operations';
import {
  handlePending,
  handleFulfielledGet,
  handleFulfielledAdd,
  handleFulfielledDelete,
  handleRejected,
} from '../components/Services/FunctionSlice';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    phoneContacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfielledGet)
      .addCase(addContact.fulfilled, handleFulfielledAdd)
      .addCase(deleteContact.fulfilled, handleFulfielledDelete)
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      );
  },
});
export const ContactsReducer = contactsSlice.reducer;
