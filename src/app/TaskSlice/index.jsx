import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = [
    {
        id:1,
        name: 'Do homework'
    },
    {
        id:2,
        name: 'Run at morning'
    },
    {
        id:3,
        name: 'Attend the job interview'
    },
    {
        id:4,
        name: 'Go home'
    },
]

export const TaskSlice = createSlice({
    name: 'tasks',
    initialState: INITIAL_STATE,
    reducers:{}
});

export default TaskSlice.reducer;