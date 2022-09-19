import "./App.css";
import NotesList from "./Components/NotesList/NotesList";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Search from "./Components/Search/Search";
import Header from "./Components/Header/Header";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "my first note",
      date: "15/09/2022",
    },
    {
      id: nanoid(),
      text: "My second Note",
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

  //Search In Notes
  const [searchText, setSearchText] = useState('');

  //save to local storage
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  },[notes]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes); 
    }
  }, []);

  return (
    <div className="main-container">
      <Header />
      <Search handleSearchNote={searchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
