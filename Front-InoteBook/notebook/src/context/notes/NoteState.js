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
       "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwY2Y2NmE4MWI3ZTFjN2M2NDVmNzkxIn0sImlhdCI6MTcxMjIwODAyMn0.xCKs3lKH1NIM6GxYYiwdYi7Y88OvfJVe8OawrwtCoR0"
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
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwY2Y2NmE4MWI3ZTFjN2M2NDVmNzkxIn0sImlhdCI6MTcxMjIwODAyMn0.xCKs3lKH1NIM6GxYYiwdYi7Y88OvfJVe8OawrwtCoR0"
        },
      body: JSON.stringify({title, description, tag}), 
      });

    console.log("Adding a Note")
    const note = {
      "_id": "6606d5dea278863378339df2d",
      "user": "660cf66a81b7e1c7c645f791",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "1712152042127",
      "__v": 0
    };
    setNotes(notes.concat(note))

  }
  //Delete a note--
  
  const deleteNote = async (id) => {
    //API Call--
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwY2Y2NmE4MWI3ZTFjN2M2NDVmNzkxIn0sImlhdCI6MTcxMjIwODAyMn0.xCKs3lKH1NIM6GxYYiwdYi7Y88OvfJVe8OawrwtCoR0"
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwY2Y2NmE4MWI3ZTFjN2M2NDVmNzkxIn0sImlhdCI6MTcxMjIwODAyMn0.xCKs3lKH1NIM6GxYYiwdYi7Y88OvfJVe8OawrwtCoR0"
      },
      body: JSON.stringify({title, description, tag}), 
    });
    const json = response.json(); 
  
    //Logic to edit in client--
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }
  return (

    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>

      {/* Make sure you children spelling must be correct-- */}
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;


