import React, { useState } from "react";
import { PurchaseBackArrow, PurchaseBackArrowButton, PurchaseContainer, PurchaseOptions, PurchaseOptionsElement, PurchaseOptionsInput, PurchaseOptionsText } from "./styles";
import Pix from "../pix";
import CardForm from "../card";
import { Boleto } from "../boleto";
// import Pix from "./Payments/Pix";
// import CreditCard from "./Payments/CreditCard";
// import Boleto from "./Payments/Boleto";

export const Purchase: React.FC<{ token:any, userFilled: boolean, setUserFilled:any }> = ({...props}) => {
  const [chosen, setChosen] = useState(1);

  return (
    <PurchaseContainer>
      <div className="row" id="purchase-join-pages">
        <div className="col" id="select-payment">
          <PurchaseBackArrow
          >
            <PurchaseBackArrowButton onClick={()=>props.setUserFilled(!props.userFilled)}>Voltar as Informações</PurchaseBackArrowButton>
          </PurchaseBackArrow>
          <PurchaseOptions>
            <PurchaseOptionsElement>
              <div className="input-group-text" style={{ width: "100%" }}>
                <PurchaseOptionsInput
                  className="form-check-input mt-0"
                  type="radio"
                  aria-label="Checkbox for following text input"
                  name="purchase"
                  onChange={() => {
                    setChosen(1);
                  }}
                />
                <PurchaseOptionsText>Pix</PurchaseOptionsText>
              </div>
            </PurchaseOptionsElement>
            <PurchaseOptionsElement>
            <div className="input-group-text" style={{ width: "100%" }}>
            <PurchaseOptionsInput
                  className="form-check-input mt-0"
                  type="radio"
                  aria-label="Checkbox for following text input"
                  name="purchase"
                  onChange={() => {
                    setChosen(2);
                  }}
                />
                <PurchaseOptionsText>
                  Cartão de Crédito
                </PurchaseOptionsText>
              </div>
            </PurchaseOptionsElement>

            <PurchaseOptionsElement>
            <div className="input-group-text" style={{ width: "100%" }}>
            <PurchaseOptionsInput
                  className="form-check-input mt-0"
                  type="radio"
                  aria-label="Checkbox for following text input"
                  name="purchase"
                  onChange={() => {
                    setChosen(3);
                  }}
                />
                <PurchaseOptionsText>Boleto</PurchaseOptionsText>
              </div>
            </PurchaseOptionsElement>
          </PurchaseOptions>
        </div>
        <div className="col">
          <div className="purchase-selected">
             {chosen === 1 ? <Pix token={props.token}/>
             :''}
            {chosen === 2 ? (
              <CardForm/>
            ) : ''}
            {chosen === 3 ? (
              <Boleto/>
            ) : ''}
          </div>
        </div>
      </div>
    </PurchaseContainer>
  );
}
