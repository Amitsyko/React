import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>
    {
        console.log("TransForm UpperCase was clicked")
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLpClick = () =>
    {
        console.log("TransForm LowerCase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClrChange = () =>
    {
        let newText = document.getElementById('myBox');
        newText.style.color = "yellow";
        newText.style.background = "Black";
        setText(newText.textContent);
        console.log("Change TextBox BackGround Color");
        
    }

    const handleClrOfChange = () =>
    {
        let newText = document.getElementById("myBox");
        newText.style.color ="black";
        newText.style.background="white";
        setText(newText.textContent);
    }

    const handleOnChange = (event) =>
    {
        console.log("Handle on change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Fill this Box here');
    return (
        <>
            <div>
            <h1>{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-danger" onClick={handleUpClick}>{props.btn}</button>
                <button type="button" className="btn btn-success ms-2" onClick={handleLpClick}>Click To LowerCase</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={handleClrChange}>Change Color</button>
                <button type="button" className="btn btn-primary ms-2" onClick={handleClrOfChange}>Change Color</button>
            </div>

            <div className="container mt-5">
                <h5>Paramerters</h5>
                <p>{text.split(" ").length} Words And {text.length} Characters</p>
                <h5>Reading Time</h5>
                <p>{0.08 * text.split(" ").length} Minutes to Read</p>
                <h5>Entered Text to Preview Here</h5>
                <p>{text}</p>
            </div>
        </>

    )
}
