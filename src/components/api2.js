import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';

const  API2 =() =>{
    const[val,setVal]=useState(1);
    const[val1,setVal1]=useState();
    const[name,setname]=useState();

    useEffect(()=>{
        async function getdata(){
            const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${val}`);  
            // const vall=await res.data;
            console.log(res.data);
            setVal1(res.data.moves.length);
            setname(res.data.name);
        }
        getdata();

    },[val]);

  
    return(
        <>
        <h2>Name is  {name}</h2>
        <h2>Moves {val1}</h2>
        <h2>value is {val}</h2>
        <select value={val} onChange={(event)=>  setVal(event.target.value)} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
       
        </>
    )
}
export default API2;