import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: '',
};

export const filterContactsSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setFilter } = filterContactsSlice.actions;
export const filterReducer = filterContactsSlice.reducer;
