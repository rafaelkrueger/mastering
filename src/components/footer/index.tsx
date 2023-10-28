import React from 'react'
import { MainFooterContainer, MainFooterContainerElement, FooterLinkElementTitle, FooterLinkElement, FooterLinkLogo } from './styles'

export const Footer:React.FC = () =>{

    return(
        <>
            <MainFooterContainer>
                <MainFooterContainerElement>
                    <FooterLinkElementTitle>Home</FooterLinkElementTitle>
                    <FooterLinkElement to="/">Home</FooterLinkElement>
                    <FooterLinkElement to="/recent">Cursos</FooterLinkElement>
                    <FooterLinkElement to="/create-course">Começe a Ensinar</FooterLinkElement>
                    <FooterLinkElement to="/afiliate">Ser um Ajudante</FooterLinkElement>
                    <FooterLinkElement to="/">Home</FooterLinkElement>

                </MainFooterContainerElement>
                <MainFooterContainerElement>
                    <FooterLinkElementTitle>Sobre Nós</FooterLinkElementTitle>
                    <FooterLinkElement to="/">About us</FooterLinkElement>
                </MainFooterContainerElement>
                <MainFooterContainerElement>
                    <FooterLinkElementTitle>Suporte</FooterLinkElementTitle>
                    <FooterLinkElement to="/">Contato</FooterLinkElement>
                </MainFooterContainerElement>
                <MainFooterContainerElement>
                    <FooterLinkLogo/>
                </MainFooterContainerElement>
            </MainFooterContainer>
        </>
    )
}