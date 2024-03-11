import React from "react";
import { useState } from "react";
import Products from "./Product";
import { useParams, useNavigate } from "react-router-dom";



const ProductDetail = () =>{
    let { id } = useParams();
    const product = Products.find(product => String(product.id) === id);
    const history = useNavigate();
    console.log(history)
    return(
        <>
        <section key={id} className="details-section">
                <img src="" alt="sssss"></img>
                <div>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <button onClick={()=> history('/product')}>Go Back</button>
                </div>
            </section>
        </>
    )
}
export default  ProductDetail;