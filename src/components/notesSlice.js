import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      { id: 1, title: "test1", body: "testedddddddd1" },
      { id: 2, title: "test2", body: "testedddddddd2" },
    ],
    editMode: null,
  },
  reducers: {
    addNote(state, action) {
      state.items.push(action.payload);
    },
    deleteNote(state, action) {
      return state.items.filter((note) => note.id !== action.payload);
    },
    updateNote(state, action) {
      const { id, title, body } = action.payload;
      const note = state.items.find((n) => n.id === id);
      if (note) {
        note.title = title;
        note.body = body;
      }
    },
    setEditMode(state, action) {
      console.log(action.payload);
      state.editMode = action.payload;
    },
  },
});

export const { addNote, deleteNote, updateNote, setEditMode } =
  notesSlice.actions;
export default notesSlice.reducer;
