import React, {useState} from 'react'

export default function TextForm(props) {
    const handleupclick = ()=>{
        // console.log("uppercase is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "Success");
    }

    const handleloclick = ()=>{
      // console.log("uppercase is clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase", "success");
    }
 
    const handleonchange = (event)=>{
        // console.log("Changed to uppercase");
        setText(event.target.value);
    }

    const handleclear = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("All Text Cleared", "success");
    }

    const handleCopy =  () => {
      //  var text = document.getElementById("exampleFormControlTextarea1");
      //  text.select();
       navigator.clipboard.writeText(text);
       props.showAlert("Text Copied", "success");
      //  document.getSelection().removeAllRanges();
    }

    const handleExtraspace =  () => {
      let new_text = text.split(/[  ]+/) ;
      setText(new_text.join(" "));
      props.showAlert("All extra space is removed", "success");
   }

    const handlePaste = async () => {
      try {
        const textFromClipboard = await navigator.clipboard.readText();
        setText(textFromClipboard);
        setPasteSuccess('Pasted!');
      } catch (err) {
        setPasteSuccess('Failed to paste!');
      }
      props.showAlert("Pasted", "success");
    }
    


    const [text, setText] = useState('');
    // const [copySuccess, setCopySuccess] = useState('');
    const [pasteSuccess, setPasteSuccess] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#050a3d'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handleonchange} 
           style={{backgroundColor: props.mode === 'light'?'white':'#13466e', color: props.mode === 'dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupclick}>Convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloclick}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclear}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button  className="btn btn-primary mx-1 my-1" onClick={handlePaste}>Paste</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraspace}>Remove ExtraSpace</button>

        {/* {copySuccess && <p>{copySuccess}</p>} */}
        {pasteSuccess && <p>{pasteSuccess}</p>}
        
    </div>
    <div className="container my-3" style={{color: props.mode === 'light'?'#050a3d':'white'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words and {text.length} Characters </p>
      <h2>Preview</h2>
      {text.length > 0 ? text: 'Write something in the TextBox'}
    </div>
    </>
  ) 
}
