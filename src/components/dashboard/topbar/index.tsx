import React from "react";
import { TopbarContainer} from "./styles";
import {AiOutlineMenu} from 'react-icons/ai'



export const TopBar: React.FC<{sideBarToogle:boolean, setSideBarToogle:any}> = ({...props}) => {

  return <>
  <TopbarContainer>
    <AiOutlineMenu onClick={()=>{
        props.setSideBarToogle(!props.sideBarToogle)
    }} color="white"/>
  </TopbarContainer>
  </>;
};
