import React, { useState } from "react";
import { AuthModal, Footer, Information, Mail, MainCarousel, NavbarComponent, Start, WideCards } from "../../components";


export const NewProfessor: React.FC = () =>{
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
        <AuthModal isOpen={isOpen} setIsOpen={setIsOpen}/>
        <NavbarComponent isOpen={isOpen} setIsOpen={setIsOpen}/>
        <MainCarousel/>
        <Information/>
        <Mail/>
        <Start setIsOpen={setIsOpen}/>
        <Footer/>
        </>
    )
}