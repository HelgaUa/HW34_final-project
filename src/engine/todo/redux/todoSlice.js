import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        items: [],
        loading: false,
        search: '',
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        addItem: (state, action) => {
            state.items.push({text: action.payload, id: uuidv4(), isChecked: false});
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        toggleItem: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload);
            state.items[index].isChecked = !state.items[index].isChecked;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        clearSearch: (state) => {
            state.search = '';
        },
    }
})
export default todoSlice;

