import React from "react";
import "./NotesList.css";
import Note from "../../Components/Note/Note";
import AddNote from "../AddNote/AddNote";

function NotesList({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className="notes-list">
      <AddNote handleAddNote={handleAddNote} />
      {notes.map((note) => {
        return (
          <Note
            id={note.text}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        );
      })}
    </div>
  );
}

export default NotesList;
