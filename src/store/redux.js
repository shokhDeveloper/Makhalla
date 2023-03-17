import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    posts: []
}
export const Reducers = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts(state, action){
            state.posts = action.payload
        }
    }
})
export const Action = Reducers.actions
export const Reducer = Reducers.reducer