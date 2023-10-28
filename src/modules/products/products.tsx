import React, { useState } from "react";
import {
  Categories, Footer, NavbarComponent, WideCards,
} from "../../components";
import { WideCategories } from "../../components/wide-categories";

export const Products: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NavbarComponent isOpen={isOpen} setIsOpen={setIsOpen} />
      <WideCards />
      <WideCategories/>
      <WideCards />
      <Categories />
      <WideCards />
      <Footer />
    </>
  );
};
