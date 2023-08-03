import React, {useState} from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroungColor: 'white'
    })
    const [btnText, setBtnText] = useState('Enable Dark Mode');

    const toggleStyle = ()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroungColor: 'black'
            })
            setBtnText('Enable Light Mode');
        } else {
            setMyStyle({
                color: 'black',
                backgroungColor: 'white'
            })
            setBtnText('Enable Dark Mode');
        }
    }
  return (
    <div>
        <div className="dropdown" data-bs-theme="light">
          <p>
TextUtils is simply a set of utility functions to do operations on String objects.
provide free tools to help you with your daily tasks. You will find tools for formatting source code, converters, 
tools for handling text, such as remove duplicate characters, empty lines, text sorter and many others. 
Check the current features below and feel free to recommend a new feature by contacting us</p>
  {/* <button style={myStyle} onClick={toggleStyle} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonLight" data-bs-toggle="dropdown" aria-expanded="false">
    {btnText}
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonLight">
    <li><a className="dropdown-item active" style={myStyle} href="/">Action</a></li>
    <li><a className="dropdown-item" style={myStyle} href="/">Action</a></li>
    <li><a className="dropdown-item" href="/">Another action</a></li>
    <li><a className="dropdown-item" href="/">Something else here</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item" href="/">Separated link</a></li>
  </ul> */}
</div>

      
    </div>
  )
}
