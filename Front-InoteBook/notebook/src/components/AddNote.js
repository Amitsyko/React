import React, { useState, useContext } from 'react'
import noteContext from "../context/notes/noteContext"

export default function AddNote(props) {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note,setNote] = useState({title: "", description: "", tag: ""})

    const handelOnClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
        props.showAlert("Notes Added SuccessFully", "success");
    } 

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
    
    return (
        <div>
            <div>
                <h1>Add Your Notes Here</h1>

                <form>
                    <div className="mb-3 mt-4">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={note.title} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                    </div>
                    <div className="mb-3 mt-4">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" id="description" name="description" value={note.description} rows="3" onChange={onChange} minLength={5} required></textarea>
                    </div>
                    <div className="mb-3 mt-4">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                    </div>
                    <button disabled={ note.title.length<5 || note.description.length<5 } type="submit" className="btn btn-primary" onClick={handelOnClick}>Add Note</button>
                </form>

            </div>
        </div>
    )
}
