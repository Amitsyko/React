
import React, { useState } from 'react'


export default function TabForm(props) {

    const handleUpChange = () => {
        // console.log("Handle Up Change");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Transform to UpperCase !","success");
    }

    const handleLoChange = () => {
        // console.log("Handle Up Change");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Transform to lowerCase !","success");
    }

    const handleClrChange = () => {
        let newText = document.getElementById("text");
        newText.style.color = "white";
        newText.style.background = "#0f5d7a";
        setText(newText.textContent);
        props.showAlert("Transform to Change Color !","success");
    }

    const handleClOfrChange = () => {
        let newText = document.getElementById("text");
        newText.style.color = "Black";
        newText.style.background = "White";
        setText(newText.textContent);
        props.showAlert("Transform to Hide Color !","success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter Your Text Here");

    return (
        <>
            <div className='container mt-5' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.head}</h1>
                <div className="mb-3">
                    <label className="form-label">{props.sub}</label>
                    <textarea id="text" className="form-control" onChange={handleOnChange} value={text} rows="3" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
                </div>
                <button type="button" disabled={text.length===0} className="btn btn-warning my-1" onClick={handleUpChange}>Convert to Upper Case</button>
                <button type="button" disabled={text.length===0} className="btn btn-danger ms-1 my-1" onClick={handleLoChange}>Convert to Lower Case</button>
                <button type="button" disabled={text.length===0} className="btn btn-info ms-1 my-1" onClick={handleClrChange}>Color ON</button>
                <button type="button" disabled={text.length===0} className="btn btn-dark ms-1 my-1" onClick={handleClOfrChange}>Color OFF</button>
            </div>

            <div className='container mt-5' style={{color: props.mode==='dark'?'white':'black'}}>
                <h4>Parameters</h4>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
                <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
                <h3>Preview</h3>
                {/* <p>{text.length> 0 ? text: "Enter text to Preview Here"}</p> */}
                <p>{text}</p>
            </div>
        </>
    )
}
