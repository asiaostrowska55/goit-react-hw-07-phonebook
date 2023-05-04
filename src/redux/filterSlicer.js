import { createReducer } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

export const filterContacts = createAction('contact/filterContact');

const initialState = '';
export const filterReducer = createReducer(initialState, {
  [filterContacts]: (state, action) => action.payload,
});

export default filterReducer;
