import React,{ useState }  from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
        //console.log("uppercase was clicked")
        let newText=text.toUpperCase();

        setText(newText)
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();

        setText(newText)
        props.showAlert("Converted to LowerCase","success");

    }
    const handleOnChange=(event)=>{
        //console.log("on changed")
        setText(event.target.value)
    }
    //declare new state variable, which we will call text;
    const[text,setText]=useState('Enter your text')
    //text="new text" //wrong way to update text
    //setText("new text") 

  return (
    <>
    <div>
      <div className={`mb-3 text-${props.mode==='dark'? 'light':'dark'}`}>
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div className={`mb-3 text-${props.mode==='dark'? 'light':'dark'}`}>
        <h3>{props.heading}</h3>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
        <button className='btn btn-primary mx-3' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary' onClick={handleLoClick}>Convert to lowercase</button>
       <div className={`container my-4 text-${props.mode==='dark'? 'light':'dark'} `}>
            <h3> your text summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2> Preview</h2>
            <p>{text}</p>
        </div>
    </div>    
    </>
  )
}
