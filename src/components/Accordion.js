import React, { useState } from "react";
import Accordion_content from "./Accordion_content";
import Todo_list from "./Todo_list";

const Arr =[
    {
        id:1,
        question: "What is your name",
        answer:"My name is Ravinder"
    },
    {
        id:2,
        question: "What is your design",
        answer:"frontend Developer"
    },
    {
        id:3,
        question: "How much experience",
        answer:"10 Years"
    }
]

function Accordion(){
   const [Acc,setAcc]=useState(Arr)
    const[show,setShow]=useState(false);
    
   
    return(
        <>
      {Acc.map((val,ind)=>{
        const {id}=val;
        return (
            <Accordion_content key={id} {...val} />
        )
      })}
        </>
    )
}
export default Accordion;