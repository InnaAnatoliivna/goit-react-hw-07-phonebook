import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        items: '',
        isLoading: false,
        error: null
    },
    reducers: {
        updateFilter(state, action) {
            return action.payload;
        },
    },
});

export const { updateFilter } = filterSlice.actions;
export default filterSlice.reducer;