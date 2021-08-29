import React, { useState } from "react";

export default function Textform(props) {
  const [text, settext] = useState("");

  let HandleUpclick = (event) => {
    let up = text.toUpperCase() ;
    //console.log(text.length);
    settext(up);
    props.showalert("Text converted to uppercase" , "success")
  };

  let HandleDwclick = () => {
    let low = text.toLowerCase() ;
    settext(low);
    props.showalert("Text converted to lowercase" , "success")
  };

  let HandleClearclick = () =>{
    settext("");
    props.showalert("Text Cleared" , "warning")
  }

  let Handleonchange = (event) => {
      settext(event.target.value)
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    settext(newText.join(" "));
    props.showalert("Extra spaces removed!", "success");
}

  // to capitalize the first character of any string
  const capitalize = () => {
        
    let firstchar = text.charAt(0); // storing the first char of the string
    let newText= firstchar.toUpperCase(); // converting that to uppercase
    settext(newText+text.slice(1)); // printing it with rest excluding the first char by using slice

}
  let Handlecopy = ()=>{
    let text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0 , 9999);
    navigator.clipboard.writeText(text.value);
    props.showalert("Text copied to clipboard" , "success")
  }
  return (
    <>
    <div className="mb-3 my-3">
      <h1>{props.heading}</h1>
      <textarea
        className="form-control"
        id="myBox"
        rows="8"
        value={text}
        onChange={Handleonchange}
        placeholder="Enter your text here"
        style={{backgroundColor : props.mode ==="light" ?"white":"#212529" , color : props.mode ==="light" ?"black":"white"}}
      ></textarea>

      <button className="btn btn-primary my-2 mx-1" onClick={HandleUpclick}>
        Convert to Uppercase
      </button>
      <button type="button" className="btn btn-primary mx-1 my-2" width="100vw" onClick={HandleDwclick}>
      Convert to Lowercase
      </button>
      <button type="button" className="btn btn-primary mx-1 my-2" onClick={HandleClearclick}>
      Clear-Text
      </button>
      <button type="button" className="btn btn-primary mx-1 my-2" onClick={capitalize}>
      Capitalize 1st letter 
      </button>
      <button type="button" className="btn btn-primary mx-1 my-2" onClick={Handlecopy}>
      Copy text
      </button>
      <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>
      Remove space
      </button>

    </div>
    <hr/>
    <div className="container">
        <h2>Your Test Summary</h2>
        <p>text having <b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
        
        <p>approx <b>{0.008 * text.split(" ").length}</b> minutes required to read </p>
    </div>
    <hr/>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in textarea to preview here  "}</p>
    <hr/>
    </>
  )
}
