import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        items: [],
        loading: false,
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        addItem: (state, action) => {
            state.items.push({text: action.payload, id: uuidv4(), isChecked: false});

        },
        // removeItem: (state, action) => {
        //     state.items = state.items.filter((item) => item.id !== action.payload);
        // },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        toggleItem: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload);
            console.log(action.payload, index)

            state.items[index].isChecked = !state.items[index].isChecked;
        },

    }
})
export default todoSlice;

//const targetItem = state.items.splice(index, 1)[0];
//targetItem.isChecked = !targetItem.isChecked;
// targetItem.isChecked
//     ? state.items.push(targetItem)
//     : state.items.unshift(targetItem);
