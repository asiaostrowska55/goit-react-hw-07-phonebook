import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: '',
};

export const filterContactsSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});

export const { setFilter } = filterContactsSlice.actions;

export const filterReducer = filterContactsSlice.reducer;

// const filterInitialState = '';

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: filterInitialState,
//   reducers: {
//     setFilter: {
//       reducer(state, action) {
//         return action.payload;
//       },
//     },
//   },
// });

// export const { setFilter } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;

// import { createReducer } from '@reduxjs/toolkit';
// import { createAction } from '@reduxjs/toolkit';

// export const filterContacts = createAction('contact/filterContact');

// const initialState = '';
// export const filterReducer = createReducer(initialState, {
//   [filterContacts]: (state, action) => action.payload,
// });

// export default filterReducer;
