import React, { useState } from "react";



function Forms(){
    const[fullname,setFullname]=useState({
        fname:"",
        lname:"",
    });
    // const[showname,setshowname]=useState();

   const changeevent= (event)=> {
    var value = event.target.value;
    var name = event.target.name;
    console.log(value)
    setFullname( (pre) =>{
        return{
            ...pre,
            [name] : value
        }
        
    });
   
   }
    const submitt =(event)=>{
        event.preventDefault();
        // setshowname(fullname)
    }
   

    return(
        <>
         <h2>{fullname.fname} {fullname.lname} {fullname.email}</h2>
        <form onSubmit={submitt}>
       
        <input type="text" 
            onChange={changeevent}
            name="fname"
            placeholder="first name"
            value={fullname.fname}
        />
        <input type="text" 
            onChange={changeevent}
            name="lname"
            placeholder="last name"
            value={fullname.lname}
        />
        <input type="email" 
            onChange={changeevent}
            name="email"
            placeholder="email"
            value={fullname.email}
        />
        <button type="submit">Submit</button>
        </form> 
        </>
    )
}
export default Forms;