import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: [
    { id: 1, title: "test1", body: "testedddddddd1" },
    { id: 2, title: "test2", body: "testedddddddd2" },
  ],
  reducers: {
    addNote(state, action) {
      state.push(action.payload);
    },
    deleteNote(state, action) {
      return state.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
