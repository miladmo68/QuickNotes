import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, setEditMode, updateNote } from "./notesSlice";
import { v4 as uuidv4 } from "uuid";

const NoteForm = () => {
  const notes = useSelector((state) => state.notes.items);
  const editMode = useSelector((state) => state.notes.editMode);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const isEditing = editMode !== null;

  useEffect(() => {
    if (isEditing) {
      const note = notes.find((note) => note.id === editMode);
      if (note) {
        setTitle(note.title);
        setBody(note.body);
      } else {
        setTitle("");
        setBody("");
      }
    }
  }, [editMode, isEditing, notes]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

    if (isEditing) {
      dispatch(updateNote({ id: editMode, title, body }));
    } else {
      dispatch(addNote({ id: uuidv4(), title, body }));
    }
    dispatch(setEditMode(null));
    setTitle("");
    setBody("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center bg-white p-6 gap-4 rounded-xl shadow-lg border border-gray-200"
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body..."
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
      />
      <button
        type="submit"
        className="w-full max-w-md py-2 text-white font-semibold bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
      >
        {isEditing ? "Save Changes" : "Add Note"}
      </button>
    </form>
  );
};

export default NoteForm;
