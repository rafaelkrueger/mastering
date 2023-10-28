import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GrDocumentUser } from "react-icons/gr";
import { FaCity } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import Api from "../../api";
import { IUser } from "../../interfaces";
import { UserInformationButton, UserInformationColumn, UserInformationInput, UserInformationLabel, UserInformationRow, UserInformationSpan } from "./styles";


export const User:React.FC<{ userFilled: boolean, setUserFilled:any,toastMessage:any,setToastMessage:any, setToken:any }> = ({...props}) =>{
  const [loadingRequest, setLoadingRequest] = useState(false)
  const [user, setUser] = useState<IUser | undefined>({
      email: '',
      cellphone: '',
      password: '',
      document: '',
      birthDate:'',
      zipCode: '',
      streetAndNumber: '',
      city: '',
      region: '',
      state: '',
      country: '',
      isTeacher: false,
      myCourse: [],
      relatedCourse: [],
      afiliatedCourse: [],
    })
    const cep = () => {
    Api.get(`https://viacep.com.br/ws/${user?.zipCode}/json/`)
    .then((res:any) => {
      setUser({
        ...user as unknown as IUser,
        region:res.data.bairro,
        streetAndNumber:res.data.longradouro,
        city:res.data.localidade,
        state:res.data.uf,
      })
      console.log(res.data)
    });
  };

  return (
    <>
        <UserInformationRow>
          <UserInformationColumn>
            <div className="input-group has-validation">
              <UserInformationSpan className="input-group-text">
                <AiOutlineMail />
              </UserInformationSpan>
              <div className="form-floating ">
                <UserInformationInput
                  type="text"
                  className="form-control "
                  id="floatingInputGroup2"
                  placeholder="Email"
                  value={user?.email}
                  onChange={(e)=>{
                    setUser({...user as unknown as IUser, email:e.target.value})
                  }}
                />
                <UserInformationLabel>Email</UserInformationLabel>
              </div>
            </div>
            <br />
            <div className="input-group has-validation">
              <UserInformationSpan className="input-group-text">
                <MdPassword />
              </UserInformationSpan>
              <div className="form-floating ">
                <UserInformationInput
                  type="password"
                  className="form-control "
                  id="floatingInputGroup2"
                  placeholder="Sua senha"
                  value={user?.password}
                  onChange={(e)=>{
                    setUser({...user as unknown as IUser, password:e.target.value})
                  }}

                />
                <UserInformationLabel>Senha</UserInformationLabel>
              </div>
            </div>
            <br />

            <div className="input-group has-validation">
              <UserInformationSpan className="input-group-text">
                <BsTelephone />
              </UserInformationSpan>
              <div className="form-floating ">
                <UserInformationInput
                  type="text"
                  className="form-control "
                  id="floatingInputGroup2"
                  placeholder="Numero"
                  value={user?.cellphone}
                  onChange={(e)=>{
                    setUser({...user as unknown as IUser, cellphone:e.target.value})
                  }}

                />
                <UserInformationLabel>Numero</UserInformationLabel>
              </div>
            </div>
            <br />
            <div className="input-group has-validation">
              <UserInformationSpan className="input-group-text">
                <GrDocumentUser />
              </UserInformationSpan>
              <div className="form-floating ">
                <UserInformationInput
                  type="text"
                  className="form-control "
                  id="floatingInputGroup2"
                  placeholder="CPF"
                  value={user?.document}
                  onChange={(e)=>{
                    setUser({...user as unknown as IUser, document:e.target.value})
                  }}

                />
                <UserInformationLabel>CPF</UserInformationLabel>
              </div>
            </div>
          </UserInformationColumn>
          <br />
          <UserInformationColumn>
            <div className="input-group has-validation">
              <UserInformationSpan className="input-group-text">
                <FaCity />
              </UserInformationSpan>
              <div className="form-floating ">
                <UserInformationInput
                  type="text"
                  className="form-control "
                  id="floatingInputGroup2"
                  placeholder="CEP"
                  onChange={(e)=>{
                    setUser({...user as unknown as IUser, zipCode:e.target.value})
                  }}
                  onBlur={() => {
                    cep();
                  }}
                />
                <UserInformationLabel>CEP</UserInformationLabel>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <div className="input-group has-validation">
                  <div className="form-floating ">
                    <UserInformationInput
                      type="text"
                      className="form-control "
                      id="floatingInputGroup2"
                      placeholder="Estado"
                      value={user?.state}
                      onChange={(e)=>{
                        setUser({...user as unknown as IUser, state:e.target.value})
                      }}

                    />
                    <UserInformationLabel>Estado</UserInformationLabel>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="input-group has-validation">
                  <div className="form-floating">
                    <UserInformationInput
                      type="text"
                      className="form-control "
                      id="floatingInputGroup2"
                      placeholder="Cidade"
                      value={user?.city}
                      onChange={(e)=>{
                        setUser({...user as unknown as IUser, city:e.target.value})
                      }}

                    />
                    <UserInformationLabel>Cidade</UserInformationLabel>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
                <div className="input-group has-validation">
                  <div className="form-floating ">
                    <UserInformationInput
                      type="text"
                      className="form-control "
                      id="floatingInputGroup2"
                      placeholder="Rua e número"
                      value={user?.streetAndNumber}
                      onChange={(e)=>{
                        setUser({...user as unknown as IUser, streetAndNumber:e.target.value})
                      }}

                    />
                    <UserInformationLabel>Rua e número</UserInformationLabel>
                  </div>
              </div>
            </div>
            <br />

            <UserInformationButton
              disabled={loadingRequest}
              className="btn btn-large btn-success"
              id="user-information-number"
              onClick={async ()=>{
                setLoadingRequest(true)
                if(user?.email && user?.password && user?.cellphone && user?.document){
                  await Api.post('/user/sign-in', {email:user.email, password:user.password})
                  .then(async (res)=>{
                      await props.setToken(res.data)
                      props.setUserFilled(true)
                  })
                  .catch(async ()=>{
                    await Api.post('/user/sign-up', user)
                    .then(async (res)=>{
                      await props.setToken(res.data)
                      props.setUserFilled(true)
                    })
                  })
                }
                setLoadingRequest(false)
              }
            }
            >
              Continuar
            </UserInformationButton>
          </UserInformationColumn>
        </UserInformationRow>

    </>
  );
}

export default User;
