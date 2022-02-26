import { createSlice, nanoid } from "@reduxjs/toolkit";

const createHuman = (name) => ({
    id: nanoid(),
    name,
    taskIds: []
})

const initialState = [
    createHuman('Steve'),
    createHuman('Marc'),
    createHuman('Tanner'),
    createHuman('Aisha')
]

export const humanSlice = createSlice({
    name: 'humans',
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(createHuman(action.payload))
        }
    }
})