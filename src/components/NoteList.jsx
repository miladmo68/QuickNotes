import React from "react";
import NoteItem from "./NoteItem";
import { useSelector } from "react-redux";

const NoteList = () => {
  const notes = useSelector((state) => state.notes.items);
  // console.log(notes);

  return (
    <ul>
      <h1 className="text-2xl m-6 font-extrabold text-cyan-600">Notes</h1>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
};

export default NoteList;
