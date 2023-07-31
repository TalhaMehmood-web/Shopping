import React from 'react';
import "../css/button.css";
const Button = (props) => {


    let {  btntxt , btnmargin} = props;
    const buttonStyle = {
 
        padding : "15px 25px" ,
        color : "white",
        fontSize : "17px",
        fontWeight : "900",
        opacity : "0.9",
        border : "none",
        marginTop:`${btnmargin}rem`,
        cursor : "pointer"
    }


  return (
    <div>
      <div className="button">
        <button id='btn'className='btn' style={buttonStyle} >{btntxt}</button>
      </div>
    </div>
  );
}

export default Button;
