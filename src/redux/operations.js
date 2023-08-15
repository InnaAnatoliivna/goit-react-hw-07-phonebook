import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64db94af593f57e435b12a93.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');

            console.log(response)//////////////////////////////////////////
            console.log(response.data)/////////////////////////////////////

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk('contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', contact);

            console.log(response)//////////////////////////////////////////
            console.log(response.data)/////////////////////////////////////

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (idContact, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${idContact}`);

            console.log(response)//////////////////////////////////////////
            console.log(response.data)/////////////////////////////////////

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
