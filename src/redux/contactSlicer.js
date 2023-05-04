import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const endpointApi = 'https://6454036cc18adbbdfead9cc5.mockapi.io/contacts/';

const initialState = {
  contacts: [],
  query: '',
  error: null,
  status: 'idle',
};

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get(apiEndpoint);
  return response.data;
});

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(endpointApi, contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContacts',
  async contactId => {
    try {
      await axios.delete(`${endpointApi}/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      });
  },
});

// extraReducers: {
//   [fetchContacts.pending](state) {
//     state.isLoading = true;
//   },
//   [fetchContacts.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.contacts = action.payload;
//   },
//   [fetchContacts.rejected](state,action){
//     state.isLoading=false
//     state.error=action.payload
//     state.contacts=[]
//   },
//   [addContact.pending](state){
//     state.isLoading=true
//   },
//   [addContact.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.contacts.push(action.payload);
//   },
//   [addContact.rejected](state,action){
//     state.isLoading=false
//     state.error=action.payload

//   },
//   [deleteContact.pending](state){
//     state.isLoading=true
//   },
//   [deleteContact.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     const index=state.contacts.findIndex(contact => contact.id === action.payload.id)
//     state.contacts.splice(index,1)
//   },
//   [deleteContact.rejected](state,action){
//     state.isLoading=false
//     state.error=action.payload
//   },
// },

// .addCase(fetchContacts.pending, state => {
//   state.status = 'loading';
// })
// .addCase(fetchContacts.fulfilled, (state, action) => {
//   state.status = 'succeeded';
//   state.error = null;
//   state.contacts = action.payload;
// })
// .addCase(fetchContacts.rejected, (state, action) => {
//   state.status = 'failed';
//   state.error = action.error.message;
//   state.contacts = action.payload;
// })
// .addCase(fetchContacts.fulfilled, (state, action) => {
//   state.status = 'succeeded';
//   state.error = null;
//   state.contacts = action.payload;
// })
