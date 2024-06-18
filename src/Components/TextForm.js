import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleOnChange = (event) =>{
        console.log("On Changed");
        setText(event.target.value);
        
    }

    const handleLoClick = () =>{
        console.log("LowerCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted into lowercase!", "success");
    }

    const handleClearClick = () =>{
        console.log("text clear" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text is  cleared!", "success");
    }

    const handleExtraSpaces = () =>{
        //console.log("LowerCase was clicked" + text);
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces!", "success");
    }

    

    const [text, setText] = useState('');
    //text = "new text";  //Wrong way to change the state
    //setText ("new text");  //Wrong way to change the state
    
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
    <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3"> 
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-outline-primary mx-2"  onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-outline-primary mx-2"  onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-outline-primary mx-2"  onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-outline-primary mx-2"  onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>
  )
}
