import { createSlice, current, getDefaultMiddleware } from "@reduxjs/toolkit"


const initialState = {
    todos: [],
}

const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
       addTodo: function(state, action) {
        state.todos.push(action.payload);
       },
       deleteTodo: function (state, action) {
        state.todos.splice(action.payload, 1);
       }
    },
})

export const { addTodo, deleteTodo } = TodoSlice.actions

export default TodoSlice.reducer