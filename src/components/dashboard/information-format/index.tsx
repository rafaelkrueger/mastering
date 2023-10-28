import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  InformationFormatContainer,
  InformationFormatContainerBody,
  InformationFormatContainerBodyContainer,
  InformationFormatContainerBodyContainerLeft,
  InformationFormatContainerBodyContainerRight,
  InformationFormatContainerBodyHeader,
  InformationFormatContainerBodyImage,
  InformationFormatContainerBodyInput,
  InformationFormatContainerBodyInputContainer,
  InformationFormatContainerBodyInputFile,
  InformationFormatContainerBodyInputLabel,
  InformationFormatContainerBodySubtitle,
  InformationFormatContainerBodyTextArea,
  InformationFormatContainerBodyTitle,
  InformationFormatContainerHeader,
  InformationFormatContainerHeaderGo,
  InformationFormatContainerHeaderProgress,
  ProgressInformationFormat
} from "./styles";
import * as Io from 'react-icons/io'
import {SlArrowLeft, SlArrowRight} from 'react-icons/sl'
import Undefined from '../../../images/undefined-image.jpg'
import { Pricing } from "../pricing";
import { getStorageValue } from "../../../hooks/useLocalStorage";

export const InformationFormat: React.FC<{content:string, setContent:Dispatch<SetStateAction<string>>}> = ({...props}) => {

  const [priceOn, setPriceOn] = useState(false)
  const [course, setCourse] = useState({
    token:getStorageValue('accessToken',null),
    name:'',
    description:'',
    language:'',
    country:'',
    category:'',
    image:'',
    moneyBack:0,
    price:0,
  })

  const convertBase64 = (file:any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  useEffect(()=>{
    console.log(course.image)
  },[course.image])

  return (
    <>
      <InformationFormatContainer>
        <InformationFormatContainerHeader>
            <InformationFormatContainerHeaderGo>
                <SlArrowLeft onClick={()=>props.setContent("")} size={27}>Voltar</SlArrowLeft>
            </InformationFormatContainerHeaderGo>
            <InformationFormatContainerHeaderProgress>
                <Io.IoMdRadioButtonOn color="#000000" size={20}/>
                <ProgressInformationFormat></ProgressInformationFormat>
                <Io.IoMdRadioButtonOn color="#000000" size={20}/>
                <ProgressInformationFormat></ProgressInformationFormat>
                <Io.IoMdRadioButtonOn color="#000000" size={20}/>
            </InformationFormatContainerHeaderProgress>
            <InformationFormatContainerHeaderGo>
                <SlArrowRight onClick={()=>setPriceOn(true)} size={27}>Voltar</SlArrowRight>
            </InformationFormatContainerHeaderGo>
        </InformationFormatContainerHeader>
        {!priceOn?
          (<>
          <InformationFormatContainerBody>
              <InformationFormatContainerBodyHeader>
              <InformationFormatContainerBodyTitle>Preencha as informações do produto</InformationFormatContainerBodyTitle>
              <InformationFormatContainerBodySubtitle>Os dados abaixo são muito importantes para seu produto. Preencha-os com atenção.</InformationFormatContainerBodySubtitle>
              </InformationFormatContainerBodyHeader>
              <InformationFormatContainerBodyContainer>
                <InformationFormatContainerBodyContainerLeft>
                    <InformationFormatContainerBodyInputContainer>
                    <InformationFormatContainerBodyInputLabel>Título</InformationFormatContainerBodyInputLabel>
                    <InformationFormatContainerBodyInput onChange={(e)=>{
                      setCourse({...course, name:e.target.value})
                    }} placeholder="Cúlinaria volume I" type="text"/>
                  </InformationFormatContainerBodyInputContainer>
                  <InformationFormatContainerBodyInputContainer>
                    <InformationFormatContainerBodyInputLabel>Descrição do Produto</InformationFormatContainerBodyInputLabel>
                    <InformationFormatContainerBodyTextArea onChange={(e)=>{
                      setCourse({...course, description:e.target.value})
                    }} placeholder="Cúlinaria volume I é um livro íncrivel de magníficas tecnicas da cozinha"  rows={5}/>
                  </InformationFormatContainerBodyInputContainer>
                  <div style={{display:"flex"}}>
                  <InformationFormatContainerBodyInputContainer>
                    <InformationFormatContainerBodyInputLabel>Idioma</InformationFormatContainerBodyInputLabel>
                    <InformationFormatContainerBodyInput onChange={(e)=>{
                      setCourse({...course, language:e.target.value})
                    }}  type="text"/>
                  </InformationFormatContainerBodyInputContainer>
                  <InformationFormatContainerBodyInputContainer>
                    <InformationFormatContainerBodyInputLabel>Local de venda</InformationFormatContainerBodyInputLabel>
                    <InformationFormatContainerBodyInput onChange={(e)=>{
                      setCourse({...course, country:e.target.value})
                    }} type="text"/>
                  </InformationFormatContainerBodyInputContainer>
                  </div>
                  <InformationFormatContainerBodyInputContainer>
                    <InformationFormatContainerBodyInputLabel>Categoria</InformationFormatContainerBodyInputLabel>
                    <InformationFormatContainerBodyInput onChange={(e)=>{
                      setCourse({...course, category:e.target.value})
                    }} type="text"/>
                  </InformationFormatContainerBodyInputContainer>
                </InformationFormatContainerBodyContainerLeft>
                <InformationFormatContainerBodyContainerRight>
              <InformationFormatContainerBodyInputContainer>
                <InformationFormatContainerBodyImage src={course.image?course.image:Undefined}/>
                <InformationFormatContainerBodyInputLabel>Escolha a capa do seu Produto</InformationFormatContainerBodyInputLabel>
                <InformationFormatContainerBodyInputFile onChange={async (e) => {
                    const files = e.target.files;
                    if (files && files.length > 0) {
                      const file = files[0];
                      const base64 = await convertBase64(file);
                      setCourse({ ...course, image: base64 as unknown as  '' });
                    }
                }} type="file"/>
              </InformationFormatContainerBodyInputContainer>
              </InformationFormatContainerBodyContainerRight>
              </InformationFormatContainerBodyContainer>
            </InformationFormatContainerBody>
          </>)
      :<Pricing content={props.content}  setContent={props.setContent} course={course} setCourse={setCourse} setPriceOn={setPriceOn}/>}
    </InformationFormatContainer>
    </>
  );
};
