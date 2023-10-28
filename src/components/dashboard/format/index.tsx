import React, { useEffect, useState } from "react";
import { FormatContainer, FormatContainerCard, FormatContainerCardImage, FormatContainerCardSubTitle, FormatContainerCardTitle } from "./styles";
import { InformationFormat } from "../information-format";
import InformationFormatImage from '../../../icons/book.png'
import Agreement from '../../../icons/agreement.png'
import Meeting from '../../../icons/meeting.png'
import Video from '../../../icons/videoconference.png'


export const Format: React.FC = () => {
  const [content, setContent] = useState("")

  return <>
  <FormatContainer>
    {content === ""?
    <>
    <FormatContainerCard onClick={()=>setContent("InformationFormat")}>
        <FormatContainerCardImage src={InformationFormatImage}/>
        <FormatContainerCardTitle>E-book</FormatContainerCardTitle>
        <FormatContainerCardSubTitle>Crie seu E-book</FormatContainerCardSubTitle>
    </FormatContainerCard>
    <FormatContainerCard onClick={()=>setContent("InformationFormat")}>
        <FormatContainerCardImage src={Meeting}/>
        <FormatContainerCardTitle>Curso Digital</FormatContainerCardTitle>
        <FormatContainerCardSubTitle>Crie seu Curso</FormatContainerCardSubTitle>
    </FormatContainerCard>
    <FormatContainerCard onClick={()=>setContent("InformationFormat")}>
        <FormatContainerCardImage src={Agreement}/>
        <FormatContainerCardTitle>Assinatura</FormatContainerCardTitle>
        <FormatContainerCardSubTitle>Crie seu curso frequente</FormatContainerCardSubTitle>
    </FormatContainerCard>
    <FormatContainerCard onClick={()=>setContent("InformationFormat")}>
        <FormatContainerCardImage src={Video}/>
        <FormatContainerCardTitle>Eventos</FormatContainerCardTitle>
        <FormatContainerCardSubTitle>Crie seu Evento</FormatContainerCardSubTitle>
    </FormatContainerCard>
    </>
    :<InformationFormat content={content} setContent={setContent}/>}
  </FormatContainer>
  </>;
};
