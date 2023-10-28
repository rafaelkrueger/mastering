import React, { useEffect, useState } from 'react'
import { ToastMessageCloseIcon,ToastMessageHost, ToastMessageContainer, ToastMessageIcon, ToastMessageLeft, ToastMessageMiddle, ToastMessageRight, ToastMessageSuccess } from './styles'

export const ToastMessage: React.FC<{ toastOpen: boolean, setToastOpen:any, type:string, message:string }> = ({...props}) =>{



    return(
        <>
            <ToastMessageContainer style={{display:props.toastOpen?'block':'none'}}>
                <ToastMessageHost>
                <ToastMessageLeft>
                    {props.type == 'success'?<ToastMessageSuccess style={{background:'green'}} size={30} color={"white"}></ToastMessageSuccess>:''}
                    {props.type == 'error'?<ToastMessageIcon style={{background:'red'}} size={30} color={"white"}></ToastMessageIcon>:''}
                </ToastMessageLeft>
                <ToastMessageMiddle>
                    <p style={{marginTop:"8%",marginLeft:"5%"}}>{props.message}</p>
                </ToastMessageMiddle>
                <ToastMessageRight onClick={()=>props.setToastOpen(false)}>
                    <ToastMessageCloseIcon></ToastMessageCloseIcon>
                </ToastMessageRight>
                </ToastMessageHost>

            </ToastMessageContainer>
        </>
    )
}