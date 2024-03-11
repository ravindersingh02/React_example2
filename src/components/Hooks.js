import React, { useState } from "react";

let loctime= new Date().toLocaleTimeString();

function Hooks(){
const [color,setColor]=useState("White");
const [count,setCount]=useState(0);
const [time,setTime]=useState(loctime);
const stcol=()=>{
    setColor("Red");
    setCount((c)=>c+1);
    setCount(count + 2);
}
const demotime = () =>{
    setTime(new Date().toLocaleTimeString())
}
setInterval(demotime,1000)

    return(
        <>
        <div>
           My fav color is {color} and count is {count}
        </div>
        <button onClick={stcol}>color</button>
        <h2>time change challange</h2>
        <p>{time}</p>
        <button onClick={demotime}>update time</button>
        </>
    )
}
export default Hooks;