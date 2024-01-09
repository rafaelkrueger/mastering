import React, { useState } from 'react';
import {CgProfile} from 'react-icons/cg'
import { Navbar, LinkList, ListElement, NavbarLogo, ContainerMenuIcon, ContainerIcons, NavbarResponsiveIcon, NavbarResponsiveContainer } from './styles';
import * as Ai from 'react-icons/ai'
import Logo from '../../images/master-logo.png'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useLocalStorage } from 'src/hooks/useLocalStorage';

export const NavbarComponent: React.FC<{ isOpen: boolean, setIsOpen:any }> = ({...props}) => {
  const [token, setToken] = useLocalStorage('accessToken', null)
  const [menuActive, setMenuActive] = useState(false)
  const [activeIcon, setActiveIcon] = useState(0)
  const [isIconActive, setIsIconActive] = useState(false)
  const navigate = useNavigate()

  const NavbarIconList = styled.div`
  width: 300px;
  position: absolute;
  top: 70px;
  z-index: 300;
  padding: 20px;
  background-color: white;
  box-shadow: 1px 1px 20px rgba(0,0,0,0.5);
  @media (max-width:600px){
    width: 100%;
    margin-top: 38%;
  }
  &::before {
    content: "";
    position: absolute;
    top: -20px;
    transform: translate(100%, 50%) rotate(135deg);
    width: 20px;
    height: 20px;
    background-color: white;
    left: ${activeIcon}px;
    transition: all 0.3s ease;
  }
`;


  return (
    <>
    <Navbar>
        <LinkList>
        {window.screen.availWidth > 600?
        <>
        <NavbarLogo onClick={()=>navigate("/")} src={Logo}/>
        <ListElement to='/'>Home</ListElement>
          <ListElement to='/recent'>Cursos</ListElement>
          <ListElement to='/create-course'>Começe a Ensinar</ListElement>
          <ListElement to='/afiliate'>Ser um Ajudante</ListElement>
          <ContainerIcons>
            <ListElement to="/"><CgProfile onClick={()=>{if(!token){props.setIsOpen(!props.isOpen)}else{navigate('/dashboard')}}} size={28}/></ListElement>
            <ListElement to="/cart"><Ai.AiOutlineShoppingCart onClick={()=>{setActiveIcon(141); setIsIconActive(true)}} size={28}/></ListElement>
            <ListElement to="/"><Ai.AiOutlineHeart onClick={()=>{setActiveIcon(241.5); setIsIconActive(true)} } size={28}/></ListElement>
          </ContainerIcons>
        </>:
        <ContainerMenuIcon>
            <NavbarResponsiveIcon onClick={()=>setMenuActive(!menuActive)} color="white"/>
        {menuActive?
        <NavbarResponsiveContainer>
              <ListElement to='/'>Home</ListElement>
              <ListElement to='/recent'>Mais Acessados</ListElement>
              <ListElement to='/create-course'>Começe a Ensinar</ListElement>
              <ListElement to='/afiliate'>Ser um Ajudante</ListElement>
              <ContainerIcons>
                <ListElement to="/"><CgProfile onClick={()=>{if(!token){props.setIsOpen(!props.isOpen)}else{navigate('/dashboard')}}} size={28}/></ListElement>
                <ListElement to="/cart"><Ai.AiOutlineShoppingCart onClick={()=>{setActiveIcon(312); setIsIconActive(true)}} size={28}/></ListElement>
                <ListElement to="/"><Ai.AiOutlineHeart onClick={()=>{setActiveIcon(465); setIsIconActive(true)} } size={28}/></ListElement>
              </ContainerIcons>
            </NavbarResponsiveContainer>
:''}        </ContainerMenuIcon>}
        </LinkList>
    </Navbar>
    </>
  );
};
