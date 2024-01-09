import React, { useEffect, useState } from 'react'
import { AuthModalContainer, AuthModalFooterRadio, AuthModalForm, AuthModalFormBody, AuthModalFormBodyRadio, AuthModalFormFooter, AuthModalFormFooterButton, AuthModalFormFooterText, AuthModalFormFooterTextLogin, AuthModalFormFooterTextRadio, AuthModalFormHeader, AuthModalFormHeaderIcon, AuthModalFormHeaderText, AuthModalFormLoading, AuthModalRegularInput, AuthModalRegularRadio } from './styles';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import UserService from '../../services/user.service';
import { ToastMessage } from '../toast-message';


export const AuthModal: React.FC<{ isOpen: boolean, setIsOpen:any }> = ({...props}) =>{
    const [token, setToken] = useLocalStorage('accessToken', null)
    const [toastOpen, setToastOpen] = useState(false)
    const [toastMessage, setToastMessage] = useState("")
    const [toastType, setToastType] = useState("")
    const [loading, setLoading] = useState(false)
    const [buttonClicked, setButtonClicked] = useState(false)
    const [registerOpen, setRegisterOpen] = useState(true)
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name:'',
        email:'',
        password:'',
        isTeacher:false
    })

    useEffect(() => {
        if (buttonClicked && token) {
          navigate('/dashboard')
        }
      }, [navigate, buttonClicked, token]);

      const newUserMutation = useMutation((variables: any) =>
      UserService.signup(variables),
      {
        onSuccess:(res)=>{
            if(res.data){
                setToken(res.data)
                setButtonClicked(true)
            }
        },
        onError:(e:any)=>{
            setToastMessage(e.response.data.message)
            setToastType("error")
            setToastOpen(true)
        }
      }
    );


      const userMutation = useMutation((variables: any) =>
      UserService.signin(variables),
      {
        onSuccess:(res)=>{
            if(res.data){
                setToken(res.data)
                setButtonClicked(true)
            }
        },
        onError:(e:any)=>{
            setLoading(false);
            setToastMessage(e.response.data.message)
            setToastType("error")
            setToastOpen(true)
        }
      }
    )


    const submit = async (values: any) => {
        try {
            setLoading(true);
            await userMutation.mutate(values);
        } catch (e) {
            console.log(e)
        }
      };

      const submitNewUser = async (values: any) => {
        try {
            setLoading(true);
            await newUserMutation.mutate(values);
        } catch (e) {
            console.log(e)
        }
      };


    return(
        <>
        <AuthModalContainer style={{display:props.isOpen?'block':'none'}}>
            <ToastMessage toastOpen={toastOpen} setToastOpen={setToastOpen} type={toastType} message={toastMessage}/>
            <AuthModalForm>
                <AuthModalFormHeader>
                    <AuthModalFormHeaderText>Área do Usuário</AuthModalFormHeaderText>
                    <AuthModalFormHeaderIcon color={"rgba(0, 0, 0, 0.6)"} onClick={()=>props.setIsOpen(false)} size={30}/>
                </AuthModalFormHeader>
                <AuthModalFormBody>
        {registerOpen?
            (
        <>
            <AuthModalRegularInput required onChange={(e)=>{
                setUser({...user, name:e.target.value})
            }}  placeholder='Nome Completo' type="text"/>
            <AuthModalRegularInput required onChange={(e)=>{
                setUser({...user, email:e.target.value})
            }} placeholder='Email' type="email"/>
            <AuthModalRegularInput required onChange={(e)=>{
                setUser({...user, password:e.target.value})
            }} placeholder='Senha' type="password"/>
            <AuthModalRegularInput  placeholder='Confirmar senha' type="password"/>
            <AuthModalFooterRadio style={{marginBottom:'2%'}} >
            <AuthModalFormBodyRadio><AuthModalRegularRadio onChange={()=>{
                setUser({...user, isTeacher:false})
            }} name="type" type="radio"/><AuthModalFormFooterTextRadio style={{marginBottom:'1%'}}>Cadastrar como Aluno</AuthModalFormFooterTextRadio></AuthModalFormBodyRadio>
            <AuthModalFormBodyRadio><AuthModalRegularRadio onChange={()=>{
                setUser({...user, isTeacher:true})
            }} name="type" type="radio"/><AuthModalFormFooterTextRadio style={{marginBottom:'1%'}}>Cadastrar como Professor</AuthModalFormFooterTextRadio></AuthModalFormBodyRadio>
            </AuthModalFooterRadio>
            <AuthModalFormFooter>
            <AuthModalFormFooterText>Ao se inscrever, você concorda com nossos Termos de Uso e com a Política de Privacidade.</AuthModalFormFooterText>
            <AuthModalFormFooterButton onClick={()=>{submitNewUser(user)}}>{loading?<AuthModalFormLoading color="white"/>:'Criar Novo Usuário'}</AuthModalFormFooterButton>
            <AuthModalFormFooterTextLogin onClick={()=>setRegisterOpen(!registerOpen)}>Já possuo uma conta</AuthModalFormFooterTextLogin>
            </AuthModalFormFooter>
        </>
            )
        :(<>
            <AuthModalRegularInput required onChange={(e)=>{
                setUser({...user, email:e.target.value})
            }} placeholder='Email' type="email"/>
            <AuthModalRegularInput required onChange={(e)=>{
                setUser({...user, password:e.target.value})
            }} placeholder='Senha' type="password"/>
            <AuthModalFormFooter>
            <AuthModalFormFooterButton onClick={()=>{submit(user)}}>{loading?<AuthModalFormLoading color="white"/>:'Login'}</AuthModalFormFooterButton>
            <AuthModalFormFooterText>Bem-vindo(a) de volta, ficamos felizes com o seu retorno!</AuthModalFormFooterText>
            <AuthModalFormFooterTextLogin onClick={()=>setRegisterOpen(!registerOpen)}>Não possuo uma conta</AuthModalFormFooterTextLogin>
            </AuthModalFormFooter>

        </>)}
                </AuthModalFormBody>
            </AuthModalForm>
        </AuthModalContainer>
        </>
    )
}