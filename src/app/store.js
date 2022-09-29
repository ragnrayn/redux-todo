import { configureStore } from '@reduxjs/toolkit';
import TodoSlice from '../Todo/Todo.slice';

export const store = configureStore({
  reducer: {
    todos: TodoSlice
  },
});
