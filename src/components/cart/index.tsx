import { AiOutlineClear } from "react-icons/ai";
import useCart from "../../hooks/useCart";
import { CartTableContainer, CartTable, CartTableHead, CartTableTr, CartTableTh, CartTableBody, CartTableTd } from "./styles";
import React, { useEffect, useState } from "react";

export const Cart: React.FC = () =>{
  const cart = useCart()

  useEffect(()=>{
    console.log(cart.cartItems)
  })

  return (
    <>
      <CartTableContainer>
        <CartTable className="table table-light table-striped">
            <CartTableHead>
              <CartTableTr>
              <CartTableTh scope="col">
                  Imagem
                </CartTableTh>
                <CartTableTh scope="col">
                  Produto
                </CartTableTh>
                <CartTableTh scope="col">
                  Categoria
                </CartTableTh>
                <CartTableTh scope="col">
                  Valor
                </CartTableTh>
                <CartTableTh scope="col">
                  Deletar
                </CartTableTh>
              </CartTableTr>
            </CartTableHead>
            <CartTableBody>
                {cart.cartItems?.map((list:any)=>{
                  return(
                    <>
                    <CartTableTr>
                      <CartTableTd>
                      <img
                          src={list?.image}
                          style={{width:'45px', height:'35px'}}
                          className="purchase-table-image"
                      />
                      </CartTableTd>
                      <CartTableTd>
                        {list?.name}
                      </CartTableTd>
                      <CartTableTd>
                        {list?.category}
                      </CartTableTd>
                      <CartTableTd>
                        R${list?.price.toFixed(2)}
                      </CartTableTd>
                      <CartTableTd>
                      <button
                          className="btn btn-large btn-danger"
                          onClick={()=>{
                            cart.removeFromCart(list._id);
                          }}
                      >
                          Remover
                      </button>
                      </CartTableTd>
                      </CartTableTr>
                    </>)
                    })
                  }
              <CartTableTr>
                <CartTableTd className="purchase-table-row"></CartTableTd>
                <CartTableTd className="purchase-table-row"></CartTableTd>
                <CartTableTd className="purchase-table-row">Total:</CartTableTd>
                <CartTableTd className="purchase-table-row">R${parseFloat(cart.getCartTotal()).toFixed(2)}</CartTableTd>
                <CartTableTd className="purchase-table-row"><button style={{width:'56%'}} className="btn btn-large btn-danger">Limpar Tudo<AiOutlineClear style={{marginLeft:'5%'}} color="white" onClick={()=>cart.clearCart()}/></button></CartTableTd>
              </CartTableTr>
            </CartTableBody>
        </CartTable>
      </CartTableContainer>
    </>
  );
}
