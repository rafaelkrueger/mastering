import React, { useState } from "react";
import { AuthModal, Course, Footer, NavbarComponent, WideCards } from "../../components";


export const Product: React.FC = () =>{
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
        <AuthModal isOpen={isOpen} setIsOpen={setIsOpen}/>
        <NavbarComponent isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Course/>
        <WideCards/>
        <Footer/>
        </>
    )
}