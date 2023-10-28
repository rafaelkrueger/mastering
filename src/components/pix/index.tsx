import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PixImage from "../../images/payment/pix-checkout.png";
import "../../App.css";
import Api from "../../api";
import { PixBody, PixButton, PixColumn, PixComponent, PixContainer, PixHeader, PixHeaderSpan, PixText } from "./styles";
import useCart from "../../hooks/useCart";
import { getStorageValue, useLocalStorage } from "../../hooks/useLocalStorage";
import { IEnroll, IUser } from "../../interfaces";
import { useMutation } from "@tanstack/react-query";
import CourseService from "../../services/course.service";

export const Pix: React.FC<{ token:any }> = ({...props}) => {
  const navigate = useNavigate()
  const cart = useCart()
  const [disabled, setDisabled] = useState(false);
  const [status, setStatus] = useState(false);
  const [user, setUser] = useState<IUser>()
  const [token] = useLocalStorage('accessToken', null)

  const [qrcode, setQrcode] = useState({
    qrcode:'',
    txid:'',
    link:''
  })

  useEffect(()=>{
    if(!user){
      Api.get(`user/token/${props.token}`)
      .then((res)=>{
        setUser(res.data)
      })
      .catch((err)=>{console.log(err)})
    }
  },[token, user])

  useEffect(() => {
    if (qrcode.txid !== "") {
      setInterval(() => {
        Api.get(`http://all-in-one-system-cfe0c681a225.herokuapp.com/Getnet/check-pix/${qrcode.txid}`).then(
          (res) => {
            if (res.data == "CONCLUIDA") {
              setStatus(true);
            }
          }
        );
      }, 5000);
    }
  }, [qrcode?.txid]);

  const enrollCourseMutation = useMutation((variables: IEnroll) =>
  CourseService.enrollCourseByUser(variables),
  {
    onSuccess:(res)=>{
      navigate('/dashboard')
    },
    onError:(e:any)=>{
    }
  }
);

const submitNewEnroll = async (values: IEnroll) => {
  try {
      await enrollCourseMutation.mutate(values);
  } catch (e) {
      console.log(e)
  }
};


  return (
    <>
    <PixComponent>
      <PixContainer>
          <PixColumn>
            <PixHeader>
              <img style={{width:'20%', marginLeft:'-5%'}} src={PixImage} alt="pix-payment" />
            </PixHeader>
            <PixBody>
              <h3>
                Pix
                <PixHeaderSpan>
                  Pague pelo app do banco
                </PixHeaderSpan>
              </h3>
              <PixText>
                Pagamento pix, Clique o botão para gerar o QrCode.
              </PixText>
              <PixButton
              style={{opacity:disabled?'0.6':'1'}}
              disabled={disabled}
              onClick={()=>{
                setDisabled(true)
                Api.get(`http://all-in-one-system-cfe0c681a225.herokuapp.com/Getnet/${parseFloat(cart.getCartTotal())}`)
                .then((res)=>{
                  setQrcode({txid:res.data.txid, qrcode:res.data.qrcode, link:res.data.link })
                })
                const allIds = []
                for (const item of cart.cartItems) {
                  allIds.push(item?._id)
                }
               submitNewEnroll({userId:user?._id, courses:allIds})
              }}>
                Gerar QRcode
              </PixButton>
            </PixBody>
          </PixColumn>
          <PixColumn>
            {!status ? (
              <div style={{display:'flex', flexDirection:'column', textAlign:'center'}}>
                {qrcode.qrcode?
                <>
                  <img src={qrcode?.qrcode}/>
                  <a target="_blanck" href={qrcode?.link}>Ou acesse o link</a>
                </>
              :
              ''
            }
            </div>
          ) : (
              <div className="pix-payed">
                <img src='...' className="pix-payed-image" />
                <p>
                  O pagamento foi realizado com sucesso! agradecemos
                  pela confiança e preferência!
                </p>
                <p className="pix-payed-text-2">
                  Clique no botão para mais informações sobre suas compras
                </p>

                <button className="btn btn-success">
                  Ver meus cursos
                </button>
              </div>
            )}
          </PixColumn>
      </PixContainer>
    </PixComponent>
    </>
  );
}

export default Pix;
