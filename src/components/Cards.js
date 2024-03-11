import React from "react";
import Heading from "./Heading";

function Cards(props){
    return(
        <>
        <div>
           <Heading name={props.name}/>
            <p>Crads details: {props.details}</p>
        </div>
        </>
    )
}
export default Cards;