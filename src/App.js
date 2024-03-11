import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Layout from './Layout';
import Home from './Home';
import Param from './components/Param';
import ProductDetail from './components/ProductDetail';
import Search from './components/Search';
import Error from './components/Error';



function APP(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<Aboutus />} />
                    <Route path="contact" element={<Contactus />} />
                    <Route path="product" element={<Param />} />
                    <Route path="product/:id" element={<ProductDetail />} />
                    <Route path="search" element={<Search />} />
                    {/* <Route path="*" element={<Error/>} /> */}
                    <Route path="*" element={<Navigate replace to="/" />} />
                   
                </Route>
            </Routes>
        </BrowserRouter>
           
        </>
    )
}
export default APP;
