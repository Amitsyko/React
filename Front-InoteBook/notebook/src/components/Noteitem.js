import React from 'react'

export default function Noteitem(props) {
    const { note } = props;
    return (
      
            <div class="card col-3 mx-3 my-3">
                    <div class="card-body">
                        <h5 class="card-title">{note.title}</h5>
                        <p class="card-text">{note.description}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        
    )
}
