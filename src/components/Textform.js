import React, { useState } from 'react'

export default function Textform(props) {
    const [Text , SetText] = useState("");
    const handleUpClick = ()=>{
        let newtext = Text.toUpperCase();
        SetText(newtext);
        props.showalert("Coverted to uppercase" , "success");
    }
    const handlechange = (event)=>{
        SetText(event.target.value);
    }
    const handlelowClick = ()=>{
        SetText(Text.toLowerCase());
        props.showalert("Coverted to lowercase" , "success");
    }
    const handleClear = ()=>{
        let newText = " ";
        SetText(newText);
        props.showalert("Text has been cleared" , "success");
    }
    const handleCopy = ()=>{
        var text = document.querySelector("#exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Text has been copied" , "success");
    }
    return (
        <>
        <div className="container" style={{color: props.Mode ==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label"> Textarea</label>
            <textarea className="form-control" value = {Text} onChange = {handlechange} style ={{backgroundColor: props.Mode ==='light'?'white':'grey', color:props.Mode ==='light'?'black':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick = {handleUpClick}>Covert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick = {handlelowClick}>Covert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick = {handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick = {handleCopy}>Copy Text</button>
        
        </div>
        <div className="container my-3" style={{color: props.Mode ==='light'?'black':'white'}}>
            <h2>Your text summary</h2>
            <p>
                <b>{Text.split(" ").length}</b> words and <b>{Text.length}</b> charecters
            </p>
            <p> U can read this in {0.008*Text.split(" ").length} minutes</p>
            <h3> Preview</h3>
            <p> {Text.length===0?"Enter text above to preview here":Text} </p>
        </div>
        </>
    )
}
