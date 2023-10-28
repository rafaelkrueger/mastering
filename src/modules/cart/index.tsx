import React, { useState } from 'react';
import { AuthModal,NavbarComponent,Footer, Cart, Purchase } from '../../components';
import { User } from '../../components/user';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ToastMessage } from '../../components/toast-message';
import { useMutation } from '@tanstack/react-query';


export const PaymentModule: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [userFilled, setUserFilled] = useState(false)
  const [token, setToken] = useLocalStorage('accessToken', null)
  const [toastMessage, setToastMessage] = useState({
    message:'',
    type:'',
    open:false,
  })

  return (
    <>
    <AuthModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    <NavbarComponent isOpen={isOpen} setIsOpen={setIsOpen}/>
    <ToastMessage
    toastOpen={toastMessage.open}
    setToastOpen={setToastMessage}
    type='success'
    message={toastMessage.message} />
    <Cart/>
    {userFilled || token?
      <Purchase token={token} userFilled={userFilled} setUserFilled={setUserFilled}/>:
      <User userFilled={userFilled} setUserFilled={setUserFilled} toastMessage={toastMessage} setToastMessage={setToastMessage} setToken={setToken}/>
    }
    <Footer/>
    </>
  );
};
