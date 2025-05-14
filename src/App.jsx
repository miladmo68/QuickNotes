import React, { useState } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";

const App = () => {
  // const [editMode, setEditMode] = useState("");
  // console.log(editMode);
  return (
    <div className="flex flex-col items-center gap-4 ">
      <h1 className="text-4xl m-6 font-extrabold text-cyan-600">Quick Notes</h1>
      {/* <NoteForm editMode={editMode} />
      <NoteList setEditMode={setEditMode} /> */}
      <NoteForm />
      <NoteList />
    </div>
  );
};

export default App;
