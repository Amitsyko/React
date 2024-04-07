import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import noteContext from "../context/notes/noteContext"

export default function Noteitem(props) {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const { note, updateNote } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <div className='d-flex'>
                        <h5 className="card-title">{note.title}</h5>
                        <div className="icon mx-auto">
                            <DeleteIcon className='mx-2' onClick={() =>{deleteNote(note._id); props.showAlert("Note Deleted SuccessFully", "success")}}/>
                            <EditNoteIcon className='mx-2' onClick={() => {updateNote(note)}}/>
                        </div>
                    </div>
                    <p className="card-text">{note.description}</p>
                    <h6><span className="badge text-bg-success">{note.tag}</span></h6>
                </div>
            </div>
        </div>
    )
}
