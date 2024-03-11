import React, { useState } from "react";
import Todo_list from "./Todo_list";



function Todo(){
   const[input,setInput]=useState("");
   const[todos,setTodos]=useState([]);

   const inputvalue = (e) =>{
        const value= e.target.value;
        setInput(value)
   }
   
    const handleSubmit = (event) =>{
        event.preventDefault();
        setTodos(()=>{
            return [...todos,input];
            
        });
        setInput("");
        
    }
    const deleteItem = (id) =>{
        setTodos(()=>{
           return todos.filter((arr,index)=>{
            return index !==id
        })
        })
        console.log(id)
    }
    return(
        <>
        
        <form onSubmit={handleSubmit}>
            <input type="text" 
                onChange={inputvalue}
                value={input}
            />
            <button type="submit" >submit</button>
            
        </form>
        {todos.map((val,id)=><li key={id} id={id}><span onClick={()=>{deleteItem(id)}}> X </span>{val}</li>)}
       

        </>
    )
}
export default Todo;