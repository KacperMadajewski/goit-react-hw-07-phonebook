import { createSlice } from '@reduxjs/toolkit';

const contactsList =
  localStorage.getItem('phoneContact') !== null
    ? JSON.parse(localStorage.getItem('phoneContact'))
    : [];

const contactsInitialState = contactsList;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    showContacts(state, action) {
      state = action.payload;
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
    addContact(state, action) {
      state.push(action.payload);
    },
  },
});

export const { showContacts, deleteContact, addContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
