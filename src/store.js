import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./components/notesSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});
