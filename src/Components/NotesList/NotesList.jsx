import React, {useContext}from "react";
import "./NotesList.css";
import Note from "../../Components/Note/Note";
import AddNote from "../AddNote/AddNote";


import {GlobalContext} from '../../globalContext'
function NotesList({ notes}) {
  const {
    searchText,
    addNote,
    deleteNote,
  }=useContext(GlobalContext)
  return (
    <div className="notes-list">
      <AddNote  />
      {notes.map((note) => {
        return (
          <Note
            id={note.id}
            text={note.text}
            date={note.date}
          />
        );
      })}
      
    </div>
  );
}

export default NotesList;
