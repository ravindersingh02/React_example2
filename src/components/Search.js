import React, { useState } from "react";

const Search = () => {
    const[search,setSearch]=useState("");
    const img= `https://source.unsplash.com/600x400/?${search}`;

    const inputval = (event)=>{
        const data=event.target.value;
        setSearch(data);

    }
    return(
        <>
            <input type="text"
            placeholder="Seach here"
            onChange={inputval}
            value={search}
             />
             {search !== "" ? 
             <img src={img} />
             :
             null
             }
            
        </>
    )
}
export default Search;