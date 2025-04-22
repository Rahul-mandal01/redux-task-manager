import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload);
    },
    removeTask: (state, action) => {
      state.list = state.list.filter((task, i) => i !== action.payload);
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;