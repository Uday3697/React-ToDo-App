import React from 'react';
import './AddNote.css'
import { useState } from 'react';

const AddNote = ({handleAddNote}) => {
    const charLimit=400;
    const [noteText, setNoteText] = useState(' ');
    const handleChange=(e)=>{
        // console.log(e.target.value)
        if(charLimit-e.target.value.length >=0){
            setNoteText(e.target.value)
        }
        
    }
    const handleClick=()=> {
        if(noteText.trim().length > 0 ){
            handleAddNote(noteText);
            setNoteText('')
        }
    }
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
