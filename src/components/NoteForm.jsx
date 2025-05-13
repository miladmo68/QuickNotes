import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "./notesSlice";
import { v4 as uuidv4 } from "uuid";

const NoteForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      dispatch(addNote({ id: uuidv4(), title, body }));
      setTitle("");
      setBody("");
    }
  }

  return (
    <form className="flex flex-col items-center bg-white p-6 gap-4 rounded-xl shadow-lg border border-gray-200">
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
        onClick={handleSubmit}
        className="w-full max-w-md py-2 text-white font-semibold bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default NoteForm;
