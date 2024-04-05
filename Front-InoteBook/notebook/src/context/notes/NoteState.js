import NoteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
    const noteInitial = [
        {
          "_id": "660d4dd899df732bd757bff6",
          "user": "660cf66a81b7e1c7c645f791",
          "title": "My-Title1",
          "description": "We can go",
          "tag": "personal",
          "date": "1712147928018",
          "__v": 0
        },
        {
          "_id": "660d4dd899df732bd757bff8",
          "user": "660cf66a81b7e1c7c645f791",
          "title": "My-Title1",
          "description": "We can go",
          "tag": "personal",
          "date": "1712147928492",
          "__v": 0
        },
        {
          "_id": "660d5dea278863378339df2d",
          "user": "660cf66a81b7e1c7c645f791",
          "title": "My-Title1",
          "description": "We can go",
          "tag": "personal",
          "date": "1712152042127",
          "__v": 0
        },
        {
          "_id": "660d5dea278863378339df2d",
          "user": "660cf66a81b7e1c7c645f791",
          "title": "My-Title1",
          "description": "We can go",
          "tag": "personal",
          "date": "1712152042127",
          "__v": 0
        },
        {
          "_id": "660d5dea278863378339df2d",
          "user": "660cf66a81b7e1c7c645f791",
          "title": "My-Title1",
          "description": "We can go",
          "tag": "personal",
          "date": "1712152042127",
          "__v": 0
        },
        {
          "_id": "660d5dea278863378339df2d",
          "user": "660cf66a81b7e1c7c645f791",
          "title": "My-Title1",
          "description": "We can go",
          "tag": "personal",
          "date": "1712152042127",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(noteInitial)
    return (
        
        <NoteContext.Provider value={ {notes, setNotes} }>

        {/* Make sure you children spelling must be correct-- */}
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;


