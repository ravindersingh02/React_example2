import React from "react";
import { useContext } from "react";
import { Fname, Lname } from "./ComponentA";


const ComponentC = () =>{
    const ffname =useContext(Fname);
    const llname =useContext(Lname);

    return(
        <>
            <h3>{ffname.name} {llname.desg}</h3>
        </>
    )
}
export default ComponentC;