import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: '',
};

export const filterContactsSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterStatus: (state, action) => action.payload,
  },
});

export const { setFilterStatus } = filterContactsSlice.actions;

export const filterReducer = filterContactsSlice.reducer;

// import { createReducer } from '@reduxjs/toolkit';
// import { createAction } from '@reduxjs/toolkit';

// export const filterContacts = createAction('contact/filterContact');

// const initialState = '';
// export const filterReducer = createReducer(initialState, {
//   [filterContacts]: (state, action) => action.payload,
// });

// export default filterReducer;
