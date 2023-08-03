import React, {useState} from 'react'
import copy from "copy-to-clipboard";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Changed in capital letters", "success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Changed in small letters", "success");
    }
    const handleOnChange = (event)=>{
       console.log("value is changed nopw");
       setText(event.target.value);

    }
    const copyToClipboard = (event)=>{
        copy(text);
        props.showAlert("Text Copied!", "success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces", "success");
    }

    const clearAllData = (event)=>{
        setText("");
        props.showAlert("Removed All Data", "success");
    }

    const [text, setText] = useState("Enter text here");
  return (
    <>
    <div style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.title}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button type="button" className='btn btn-primary mx-2 mb-2' onClick={handleUpClick}>Convert To Uppercase</button>
        <button type="button" className='btn btn-secondary mx-1 mb-2' onClick={handleLowClick}>Convert To Lowercase</button>
        <button type="button" className='btn btn-success mx-1 mb-2' onClick={copyToClipboard}>Copy Above Text</button>
        <button type="button" className='btn btn-success mx-1 mb-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button type="button" className='btn btn-danger mx-1 mb-2' onClick={clearAllData}>Clear</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>Your Text Summary</h1>
        <p>Total no. of words {text.split(" ").filter((element)=> {return element.length!=0 }).length} and total no. of characters {text.length}</p>
        <p>Time to read {0.008 * text.split(" ").filter((element)=> {return element.length!=0 }).length} {text.length}</p>
    </div>
    <div className="container my-2" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>Preview</h1>
        <p>{text}</p>
    </div>
    </>
  )
}
