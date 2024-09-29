import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  todos: [];
}

const initialState: CounterState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export const {} = todoSlice.actions;

export default todoSlice.reducer;
