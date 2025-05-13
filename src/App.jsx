import React from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";

const App = () => {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <h1 className="text-4xl m-6 font-extrabold text-cyan-600">Quick Notes</h1>
      <NoteForm />
      <NoteList />
    </div>
  );
};

export default App;
