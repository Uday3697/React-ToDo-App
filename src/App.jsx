import "./App.css";
import NotesList from "./Components/NotesList/NotesList";
import { useEffect, useState } from "react";
import Search from "./Components/Search/Search";
import Header from "./Components/Header/Header";

import {GlobalContext} from './globalContext'

function App() {
  const [notes, setNotes] = useState([...JSON.parse(localStorage.getItem("react-notes-app-data") || "[]")]);
  const addNote = (text) => {
    // console.log(text);
    const date = new Date();
    const newNote = {
    
      id:date.getTime(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    // console.log({newNotes,id})
    setNotes(newNotes);
    return "Note Deleted!" ;
  };

  //Search In Notes
  const [searchText, setSearchText] = useState('');
 
  //save to local storage
  useEffect(() => {
    window.localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  },[notes]);

  useEffect(() => {
    const savedNotes = JSON.parse(window.localStorage.getItem("react-notes-app-data"));
    console.log({savedNotes})
    if (savedNotes) {
      setNotes(savedNotes); 
    }
  }, []);

  const value={
    searchText,
    addNote,
    deleteNote,
    setSearchText,
  }

  return (
    <div className="main-container">
      <GlobalContext.Provider value={value}>
      <Header />
      <Search  />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
  
      />
      <button className="floating-button">+</button>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
