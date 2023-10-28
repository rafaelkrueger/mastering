import React, { useState, useEffect } from "react";
import "../../App.css";
import Boletoimg from "../../images/payment/boleto-icon.png";
import { BoletoBody, BoletoContainer, BoletoImage } from "./styles";
import { PixHeaderSpan } from "../pix/styles";

export const Boleto: React.FC = () =>{
    const [disabled, setDisabled] = useState(false);
  return (
    <>
    <BoletoContainer>
      <BoletoImage className="header-commponent-image">
        <img style={{width:'20%', marginLeft:'-2.5%'}} src={Boletoimg} />
        <h3>
          Boleto
          <PixHeaderSpan>
            Pague pelo app do banco
          </PixHeaderSpan>
        </h3>
      </BoletoImage>
      <BoletoBody>
        <p>
          O Boleto Será gerado e enviado para o email que você informou com o
          valor e informações gerais do produto
        </p>
        <p className="text-boleto-warning">
          Utilize o app do banco para pagar, ou a lotérica mais proxima. O
          pagamento será aprovado em alguns dias úteis
        </p>
        <button
        onClick={()=>setDisabled(true)}
          className="btn btn-large btn-success"
          disabled={disabled}
        >
          Gerar Boleto
        </button>
      </BoletoBody>
    </BoletoContainer>
    </>
  );
}

