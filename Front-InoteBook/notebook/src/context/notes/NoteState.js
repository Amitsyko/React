import NoteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:8000"
  const noteInitial = []

  const [notes, setNotes] = useState(noteInitial)

  //Get all note
  const getNotes = async (title, description, tag) => {

    //API Call--
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
       "auth-token":  localStorage.getItem("token")
     },
   });
    const json = await response.json()
    console.log(json)
    setNotes(json);
}

  //Add a note
  const addNote = async (title, description, tag) => {

       //API Call--
       const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
      body: JSON.stringify({title, description, tag}), 
      });

      const note = await response.json(); 
      setNotes(notes.concat(note))

    //   console.log(json);

    // console.log("Adding a Note")
    // const note = {
    //   "_id": "6606d5dea278863378339df2d",
    //   "user": "660cf66a81b7e1c7c645f791",
    //   "title": title,
    //   "description": description,
    //   "tag": tag,
    //   "date": "1712152042127",
    //   "__v": 0
    // };
    // setNotes(notes.concat(note))

  }
  //Delete a note--
  
  const deleteNote = async (id) => {
    //API Call--
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
    });
    const json = response.json(); 
    console.log(json);

    console.log("I am deleting this Note " + id);
    const newNotes = notes.filter((note)=> {return note._id !== id});
    setNotes(newNotes);
  }
  //Edit a note--
  const editNote = async (id, title, description, tag) => {
    //API Call--
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({title, description, tag}), 
    });
    const json = response.json(); 
    console.log(json);
  
    //Logic to edit in client--
  let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  }
  return (

    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {/* Make sure you children spelling must be correct-- */}
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;


