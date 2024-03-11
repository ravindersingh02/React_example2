import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import ComponentB from "./ComponentB";

const Fname=createContext();
const Lname=createContext();
const name="DAhiya"
const details={
    name:"Ravinder",
    desg:"Frontend"
}

const ComponentA = () =>{
    const[det,setDet]=useState(details);

    
    return(
        <>
        <Fname.Provider value={details}>
            <Lname.Provider value={det}>
                <ComponentB/>
            </Lname.Provider>
        </Fname.Provider>
           
        </>
    )
}
export default ComponentA;
export {Fname,Lname} ;