import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './reducers/contactsSlice';
import filterSlice from './reducers/filterSlice';


export const store = configureStore({
    reducer: {
        contacts: contactsSlice,
        filter: filterSlice,
    },
    devTools: true,
})



