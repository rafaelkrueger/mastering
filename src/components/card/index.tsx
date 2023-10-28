import React, { useState, useEffect } from "react";
import { PixBody, PixHeaderSpan } from "../pix/styles";
import { CardFormButton, CardFormContainer } from "./styles";
import { StripeWrapper } from "../stripe.wrapper";
import { useElements, useStripe } from "@stripe/react-stripe-js";


export const CardForm:React.FC =() =>{
  const [disabled, setDisabled] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  return (
    <>
      <CardFormContainer >
      <PixBody>
        <h3>
        Cartão de Crédito
        <PixHeaderSpan>
            Pague com seu cartão
        </PixHeaderSpan>
        </h3>
        <StripeWrapper/>
        </PixBody>
      </CardFormContainer>
    </>
  );
}

export default CardForm;
