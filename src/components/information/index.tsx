import React from "react";
import { MainBarContainer, MainImageContainer, MainImageContainerInformation, MainInformation, MainInformationTitle } from "./styles";
import Prototype from '../../images/logo-prototype.png'
import * as Io from 'react-icons/io'

export const Information: React.FC = () => {
  return <>
    <MainInformationTitle>Consiga sua conquista em 4 passos</MainInformationTitle>
    <MainInformation>
        <MainBarContainer>
            <p><Io.IoMdRadioButtonOn style={{marginBottom:"-1%"}}/> Primeiro, escolha o que deseja</p>
            <p><Io.IoMdRadioButtonOn style={{marginBottom:"-1%"}}/> Segundo, insira o produto ao carrinho</p>
            <p><Io.IoMdRadioButtonOn style={{marginBottom:"-1%"}}/> Terceiro, é realizado o pagamento</p>
            <p><Io.IoMdRadioButtonOn style={{marginBottom:"-1%"}}/> Quarto, seu acesso é desbloqueado!</p>
        </MainBarContainer>
        <MainImageContainer>
          <MainImageContainerInformation/>
        </MainImageContainer>
    </MainInformation>
  </>;
};
