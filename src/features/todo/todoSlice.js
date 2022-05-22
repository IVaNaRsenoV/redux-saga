import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    fetchData: (_, action) => {
      return {
        todos: action.payload,
      };
    },
  },
});

export default todoSlice.reducer;
export const { fetchData } = todoSlice.actions;
