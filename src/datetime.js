import React from 'react';

const date = new Date();
const tt = new Date().getHours();
var msg="Good Morning";
var styling ={color:"Red"};
if(tt <= 18){
 msg="Good evening";
  styling ={color:"green"};
}
if(tt>=19 && tt<=24){
    msg="Good Night"; 
    styling ={color:"blue"};
}

const Datetime =()=>{
    return(
        <>
        <h1>Date Time</h1>
        <p>{`time is ${tt} `} and  <span style={styling}>{` ${msg}  `}</span></p>
        
        </>
    )
}
export default Datetime;
