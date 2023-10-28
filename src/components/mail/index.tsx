

import React from "react";
import { MailContainer, MailElement, MailElementButton, MailElementContainer, MailTitleElement } from "./styles";

export const Mail: React.FC = () => {
  return <>
    <MailContainer>
        <MailTitleElement>Fique por dentro das novidades</MailTitleElement>
        <MailElementContainer>
            <MailElement type="email" placeholder="Nos passe seu email"/>
            <MailElementButton>Enviar</MailElementButton>
        </MailElementContainer>
    </MailContainer>
  </>;
};
