import React, { useState } from "react";
import Todo_list from "./Todo_list";
import { useEffect } from "react";


function Accordion_content({question,answer}){
   
    const[show,setShow]=useState(false);
    const[cont,setcont]=useState(0);

    useEffect(()=>{
        setcont(cont + 1)
       
    },[])
    
   
    return(
        <>
        {cont}
            <div class={`accordion ${show ? 'show' : 'hidden'}`}>
                <h3>{question} <span onClick={()=>setShow(!show) }>{show ? "-" : "+"}</span></h3>
                {show && <p>{answer}</p>}
                
            </div>
        </>
    )
}
export default Accordion_content;