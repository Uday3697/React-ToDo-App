import React from 'react'
import './NotesList.css'
import Note from "../../Components/Note/Note"
function NotesList({notes}){
  return (
    <div className="notes-list">
      {notes.map(
        (note)=>{
          return (
            <Note id={note.text} text={note.text} date={note.date}  />
          )
        }
      )}
      <Note />

    </div>
  )
}

export default NotesList


