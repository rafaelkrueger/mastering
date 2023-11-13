import { Link } from "react-router-dom";
import styled from "styled-components";
import * as Ai from "react-icons/ai";

export const Navbar = styled.nav`
  display: flex;
  height: 13%;
  min-width: 100%;
  max-width: 100%;
  background: black;
  position: fixed;
  top: 0px;
  z-index: 1500;
`;

export const NavbarLogo = styled.img`
  margin-top: 14px;
  height: 76px;
  width: 160px;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    transition: ease 1s;
    border: 1.2px #6779f1 solid;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  min-width: 100%;
  max-width: 100%;
`;

export const ListElement = styled(Link)`
  display: flex;
  list-style: none;
  color: white;
  margin-top: 0.6%;
  align-self: center;
  text-decoration: none;
  &:hover {
    color:#6779f1;
    transition: width 5s;
  }
  @media (max-width: 600px) {
    margin-left: 22%;
    margin-bottom: 2.5%;
  }
`;

export const NavbarResponsiveIcon = styled(Ai.AiOutlineMenu)``;

export const NavbarResponsiveContainer = styled.div`
  margin-top: 4%;
  margin-left: -30%;
  min-width: 500px;
  min-height: 100%;
  background-color: black;
  color: white;
  padding: 20px;
`;

export const NavbarSearch = styled.input`
  padding: 5px;
  border-radius: 10px;
  margin-top: -1.5%;
  min-width: 100%;
  height: 45%;
`;

export const ContainerMenuIcon = styled.div`
  position: absolute;
  left: 30px;
  top: 35px;
`;

export const ContainerIcons = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-around;
  @media (max-width: 600px) {
    width: 70%;
    justify-content: space-around;
    margin-inline: 35px;
  }
`;
