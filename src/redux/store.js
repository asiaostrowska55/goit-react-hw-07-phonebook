import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlicer';
import { filterReducer } from './filterSlicer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
