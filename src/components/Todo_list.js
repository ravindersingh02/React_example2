import React, { useState } from "react";



function Todo_list(props){
   
   

    return(
        <>
        <li key={props.key}>
        <span>Delete </span>
        {props.value}
        </li>

        </>
    )
}
export default Todo_list;