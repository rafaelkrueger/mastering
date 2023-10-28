import React, { useState } from 'react';
import { AuthModal,NavbarComponent, MainCarousel, WideCards, Information, Categories ,Footer } from '../../components';

export const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <AuthModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    <NavbarComponent isOpen={isOpen} setIsOpen={setIsOpen}/>
    <MainCarousel/>
    <WideCards/>
    <Information/>
    <Categories/>
    <Footer/>
    </>
  );
};
