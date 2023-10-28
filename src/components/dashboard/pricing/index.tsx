import React, { Dispatch, SetStateAction, useState } from "react";
import { PricingContainer, PricingContainerForm  } from "./styles";
import {InformationFormatContainerBodyButton, InformationFormatContainerBodyInput, InformationFormatContainerBodyInputContainer, InformationFormatContainerBodyInputLabel} from '../information-format/styles'
import { useMutation } from "@tanstack/react-query";
import CourseService from "../../../services/course.service";
import { ToastMessage } from "../../toast-message";
import { useNavigate } from "react-router-dom";
import { AuthModalFormLoading } from "../../auth/styles";

export const Pricing: React.FC<{content:string, setContent:any,course:any, setCourse:any, setPriceOn:Dispatch<SetStateAction<boolean>>}> = ({...props}) => {
  const [toast, setToast] = useState({
    open:false,
    type:'',
    message:'',
  })
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)


  const courseMutation = useMutation((variables: any) =>
  CourseService.createCourseByUser(variables),
  {
    onSuccess:(res)=>{
      props.setContent('')
    },
    onError:(e:any)=>{
      setToast({...toast, open:true})
      setToast({...toast, type:'error'})
      setToast({...toast, message:'Falha ao criar o curso!'})
      setLoading(false)
    }
  }
  );

  const submit = async (values: any) => {
    try {
        setLoading(true)
        await courseMutation.mutate(values);
    } catch (e) {
        console.log(e)
    }
  };


  return (
    <>
      <PricingContainer>
          <ToastMessage toastOpen={toast.open} message={toast.message} type={toast.type} setToastOpen={setToast} />
        <PricingContainerForm>
                <InformationFormatContainerBodyInputContainer>
                    <InformationFormatContainerBodyInputLabel>Prazo de reembolso em dias (valor mínimo 7 dias)</InformationFormatContainerBodyInputLabel>
                    <InformationFormatContainerBodyInput onChange={(e)=>{
                      props.setCourse({...props.course,moneyBack:e.target.value})
                    }} min={7} placeholder="7 dias" type="number"/>
                </InformationFormatContainerBodyInputContainer>
                <InformationFormatContainerBodyInputContainer>
                    <InformationFormatContainerBodyInputLabel>Valor em reais do produto</InformationFormatContainerBodyInputLabel>
                    <InformationFormatContainerBodyInput onChange={(e)=>{
                      props.setCourse({...props.course,price:e.target.value})
                    }} min={7} placeholder="50.00 R$" type="text"/>
                </InformationFormatContainerBodyInputContainer>
        </PricingContainerForm>
      <InformationFormatContainerBodyButton onClick={()=>{submit(props.course)}}>{loading?<AuthModalFormLoading color="white"/>:'Criar novo curso'}</InformationFormatContainerBodyButton>
      </PricingContainer>
    </>
  );
};
