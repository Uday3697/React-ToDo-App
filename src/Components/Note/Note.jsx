import React,{useContext} from 'react'
import './Note.css'
import {MdDeleteForever} from 'react-icons/md'
import {GlobalContext} from "../../globalContext"

const Note = ({id,text,date}) => {
  const {
    searchText,
    addNote,
    deleteNote,
  }=useContext(GlobalContext);

  return (
    <div className="note">
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever onClick={()=> alert(deleteNote(id))} className='delete-icon' size="1.3em" color='red' />
        </div>
    </div>
  )
}

export default Note 