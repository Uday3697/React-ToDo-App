import "./App.css";
import NotesList from "./Components/NotesList/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState(

    [
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
    ]
  );
  

  return (
    <div className="main-container">
      <NotesList notes={notes} />
      hihihi
    </div>
  );
}

export default App;
