import React, { useState } from "react";
import { useEffect } from "react";


function APIcall(){
    const[data,setData]=useState([]);

   const getdata = async() =>{
        const api= await fetch('https://data.covid19india.org/data.json');
        const actualData=await  api.json(); 
        console.log(actualData)
        setData(actualData.statewise)
    }

    useEffect(()=>{
        getdata();
    },[])
   
    
   
    return(
        <>
        {data.map((val,index)=>{
            return(
                <>
                <p>{val.state}</p>
                </>
            )
        })}
        </>
    )
}
export default APIcall;