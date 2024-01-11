import React, { useEffect, useState } from "react";
import { ConfirmationModalContainer, ConfirmationModalForm, ConfirmationModalFormButtonFooter } from "./styles";
import { AuthModalFormFooterButton, AuthModalFormLoading } from "src/components/auth/styles";
import { useMutation } from "@tanstack/react-query";
import ContentService from "src/services/content.service";

export const DeleteConfirmation: React.FC<{contentId:string, isConfirmationOpen:any, setIsConfirmationOpen:any, setToast:any}> = ({...props}) => {
    const [loading, setLoading] = useState(false)

    const userMutation = useMutation((variables: any) =>
    ContentService.delete(variables),
    {
      onSuccess:(res)=>{
        setLoading(false);
        props.setToast({open:true,type:'success', message:'Conteúdo deletado com sucesso!'})
        props.setIsConfirmationOpen(false)
      },
      onError:(e:any)=>{
        setLoading(false);
        props.setToast({open:true,type:'error', message:'Falha ao deletado o conteúdo!'})
        props.setIsConfirmationOpen(false)
    }
    }
  )


    const submit = async (values: string) => {
        try {
            setLoading(true);
            await userMutation.mutate(values);
        } catch (e) {
            console.log(e)
        }
      };

  return (
    <>
        <ConfirmationModalContainer style={{display:props.isConfirmationOpen?'block':'none'}}>
            <ConfirmationModalForm>
                <h2>Você tem certeza que deseja deletar esse conteúdo?</h2>
                <ConfirmationModalFormButtonFooter>
                <AuthModalFormFooterButton onClick={()=>{props.setIsConfirmationOpen(false)}} style={{background:'grey'}}>{loading?<AuthModalFormLoading color="white"/>:'Cancelar'}</AuthModalFormFooterButton>
                <AuthModalFormFooterButton onClick={()=>{submit(props.contentId)}} style={{marginLeft:'5%', background:'rgb(228, 58, 58)'}}>{loading?<AuthModalFormLoading color="white"/>:'Deletar'}</AuthModalFormFooterButton>
                </ConfirmationModalFormButtonFooter>
            </ConfirmationModalForm>
        </ConfirmationModalContainer>
    </>
  );
};
