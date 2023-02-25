import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Works from "../pages/Works";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Testimonials from "../pages/Testimonials";

export const useRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/works" element={<Works/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/testimonials" element={<Testimonials/>}/>
        </Routes>
    )
}
