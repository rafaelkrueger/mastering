import React from "react";
import { SidebarContainer, SidebarDivision, SidebarElement, SidebarElementTitle, SidebarProfileInfo, SidebarProfileInfoImage, SidebarProfileInfoName } from "./styles";
import * as Ai from 'react-icons/ai'
import Prototype from '../../../images/user.png'
import { IUser } from "../../../interfaces";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

export const Sidebar: React.FC<{user:IUser}> = ({...props}) => {
  const [token, setToken] = useLocalStorage('accessToken', null)
  const navigate = useNavigate()


  return <>
  <SidebarContainer>
    <SidebarProfileInfo>
      <SidebarProfileInfoImage src={Prototype}/>
      <SidebarProfileInfoName>{props.user?.email?props.user.email:'Loading'}</SidebarProfileInfoName>
    </SidebarProfileInfo>
    <SidebarDivision>
    {props.user?.isTeacher?
    <>
    <SidebarElement to="/dashboard">
      <Ai.AiFillHome size={40}></Ai.AiFillHome>
      <SidebarElementTitle>Home</SidebarElementTitle>
    </SidebarElement>
    <SidebarElement to="/dashboard">
      <Ai.AiOutlineBarChart size={40}></Ai.AiOutlineBarChart>
      <SidebarElementTitle>Estatísticas</SidebarElementTitle>
    </SidebarElement>
    <SidebarElement to="/dashboard">
      <Ai.AiFillBook size={40}></Ai.AiFillBook>
      <SidebarElementTitle>Meus Produtos</SidebarElementTitle>
    </SidebarElement>
    <SidebarElement to="/dashboard">
      <Ai.AiFillDollarCircle size={40}></Ai.AiFillDollarCircle>
      <SidebarElementTitle>Vendas</SidebarElementTitle>
    </SidebarElement>
    </>
    :
    <>
    <SidebarElement to="/dashboard">
      <Ai.AiFillHome size={40}></Ai.AiFillHome>
      <SidebarElementTitle>Home</SidebarElementTitle>
    </SidebarElement>
    <SidebarElement to="/dashboard">
      <Ai.AiFillBook size={40}></Ai.AiFillBook>
      <SidebarElementTitle>Meus Cursos</SidebarElementTitle>
    </SidebarElement>
    <SidebarElement to="/dashboard">
      <Ai.AiOutlineBarChart size={40}></Ai.AiOutlineBarChart>
      <SidebarElementTitle>Estatísticas</SidebarElementTitle>
    </SidebarElement>
    </>
    }
    </SidebarDivision>
    <SidebarDivision>
    <SidebarElement to="/dashboard">
      <Ai.AiFillBell size={40}></Ai.AiFillBell>
      <SidebarElementTitle>Notificação</SidebarElementTitle>
    </SidebarElement>
    <SidebarElement  to="/">
      <Ai.AiOutlinePoweroff size={40}></Ai.AiOutlinePoweroff>
      <SidebarElementTitle onClick={async ()=>{
      await localStorage.removeItem('accessToken');
      await localStorage.removeItem('modules');
      await setToken(null)
      navigate('/');
    }}>Logout</SidebarElementTitle>
    </SidebarElement>
    </SidebarDivision>
  </SidebarContainer>
  </>;
};
