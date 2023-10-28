

import React, { Dispatch, SetStateAction } from "react";
import { StartContainer, StartContainerButton, StartContainerSubTitle, StartContainerTitle } from "./styles";

export const Start: React.FC<{ setIsOpen:Dispatch<SetStateAction<boolean>> }> = ({...props}) => {
  return <>
    <StartContainer>
        <StartContainerTitle>Começe agora em poucos passos</StartContainerTitle>
        <StartContainerSubTitle>Para realizar o teste, você será conectado à Measurement Lab (M-Lab) e seu endereço IP será compartilhado com eles e processado de acordo com a privacy policy dessa empresa. A M-Lab realiza o teste e disponibiliza os todos os resultados publicamente para promover a pesquisa na Internet. As informações publicadas incluem seu endereço IP e os resultados do teste, mas não incluem nenhuma outra informação sobre você como usuário da Internet.</StartContainerSubTitle>
        <StartContainerButton onClick={()=>props.setIsOpen(true)}>Começar Imediatamente!</StartContainerButton>
    </StartContainer>
  </>;
};
