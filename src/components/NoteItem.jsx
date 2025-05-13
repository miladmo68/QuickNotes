import React from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "./notesSlice";

const NoteItem = ({ note }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between gap-4 p-4 mb-4 rounded-xl shadow-md bg-white border border-gray-200">
      <div className="flex flex-col">
        <div className="text-xl font-bold text-gray-800">{note.title}</div>
        <div className="text-gray-600">{note.body}</div>
      </div>
      <button
        onClick={() => dispatch(deleteNote(note.id))}
        className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
      >
        Delete
      </button>
    </div>
  );
};

export default NoteItem;
