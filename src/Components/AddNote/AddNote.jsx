import React,{useContext} from 'react';
import './AddNote.css'
import { useState } from 'react';
import {GlobalContext} from "../../globalContext"
const AddNote = () => {
    const charLimit=400;
    const [noteText, setNoteText] = useState('');
    const handleChange=(event)=>{
        if(charLimit-event.target.value.length>=0){
            setNoteText(event.target.value)
        }
        
    }
    const handleClick=()=> {
        if(noteText.trim().length >0 ){
            addNote(noteText);
            setNoteText('')
        }
    }
    const {
        searchText,
        addNote,
        deleteNote,
      }=useContext(GlobalContext)
    
  return (
    <div className="new">
        <textarea cols="10" rows="12"
        placeholder='Type Here To Add Note...'
        value={noteText }
        onChange={handleChange}
        ></textarea>
        <div className="note-footer">
            <small>{charLimit-noteText.length} Remanining</small>
            <button className='save' onClick={handleClick}>Save</button>
        </div>
    </div>
    
  )
}

export default AddNote
