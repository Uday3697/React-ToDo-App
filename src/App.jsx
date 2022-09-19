import "./App.css";
import NotesList from "./Components/NotesList/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is notes 1",
      date: "15/09/2022",
    },
    {
      id: nanoid(),
      text: "this is notes second note",
      date: "15/09/2022",
    },
    {
      id: nanoid(),
      text: "this is third note",
      date: "15/09/2022",
    },
  ]);
  const addNote = (text) => {
    console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="main-container">
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
