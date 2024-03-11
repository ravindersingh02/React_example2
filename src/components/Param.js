import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Products from "./Product";

const Param = () =>{
    const [card,setCard] = useState(Products);
    // setCard 
    console.log(card)
    return(
        <>
        <section className="card-section">
            {card.map((val,ind)=>{
                const {id,title,description}=val;
                return(
                    <div key={ id } className="card">
                        <h3>{title}</h3>
                        <p>{description} <Link to={`/product/${id}`}>See more</Link></p>
                    </div>
                )
            })}
        </section>
        </>
    )
}
export default  Param;