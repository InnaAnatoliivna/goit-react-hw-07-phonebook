import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'redux/operations';

const handlePending = state => state.isLoading = true;

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoading: false,
        error: null
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [addContact.pending]: handlePending,
        [deleteContact.pending]: handlePending,

        [fetchContacts.rejected]: handleRejected,
        [addContact.rejected]: handleRejected,
        [deleteContact.rejected]: handleRejected,

        [fetchContacts.fulfilled]: {},
        [addContact.fulfilled](state, action) {
            state.contacts.push(action.payload);
        },
        [deleteContact.fulfilled](state, action) {
            return {
                contacts: state.contacts.filter(({ id }) => id !== action.payload),
            };
        },
    }
}
);
export default contactsSlice.reducer;
    // reducers: {
    //     addContact(state, action) {
    //         state.contacts.push(action.payload);
    //     },
    //     deleteContact(state, action) {
    //         return {
    //             contacts: state.contacts.filter(({ id }) => id !== action.payload),
    //         };
    //     },
    // },


// export const { addContact, deleteContact } = contactsSlice.actions;
// export default contactsSlice.reducer;