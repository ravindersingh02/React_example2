import React, { useState } from "react";
import Todo_list from "./Todo_list";



function Inc_Dec(){
    const[count,setCount]=useState(0);

    const Increment =()=>{
        return setCount(count +1)
    }
    
        const Decrement =()=>{
            if(count > 0){
                return(
                    setCount(count - 1)
                ) 
                
            }
            else{
                alert("value must be greater then Zero")
            }
            
        }
    
    
   
    return(
        <>
        <h2>{count}</h2>
       <button onClick={Increment}>Increment</button>
       <button onClick={Decrement}>Decrement</button>
        </>
    )
}
export default Inc_Dec;