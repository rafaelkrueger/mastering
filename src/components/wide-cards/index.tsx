import React, { useEffect, useState } from 'react'
import { WideCardElement, WideCardElementCart, WideCardElementCartIcon, WideCardElementDescription, WideCardElementImage, WideCardElementTitle, WideCardElementWishlist, WideCardElementWishlistIcon, WideCardGrid } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import Api from '../../api'
import { ICourses } from '../../interfaces'
import useCart from '../../hooks/useCart'

export const WideCards:React.FC =() =>{
  const [courses, setCourses] = useState([])
  const cart = useCart()

  useEffect(()=>{
    Api.get('/course').then((res)=>{
      setCourses(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <>
    <WideCardGrid>
        {courses.length > 0? courses.map((list:ICourses)=>{
          return(
            <>
            <WideCardElement>
              <Link to={`/product/${list?._id}`} style={{textDecoration:'none', color:'rgba(0,0,0,0.9'}}>
              <WideCardElementCart onClick={()=>{
                cart.addToCart(list)
              }}>
                <WideCardElementCartIcon/>
              </WideCardElementCart>
              <WideCardElementWishlist>
                <WideCardElementWishlistIcon/>
              </WideCardElementWishlist>
              <WideCardElementImage src={list?.image}/>
              <WideCardElementTitle>{list.name?`${list.name.slice(0,55)}`:''}</WideCardElementTitle>
              <WideCardElementDescription>{list.description?`${list.description.slice(0,55)}...`:''}</WideCardElementDescription>
              </Link>
            </WideCardElement>
            </>
          )
        }):
        <>
        <WideCardElement>
        </WideCardElement>
        <WideCardElement>
        </WideCardElement>
        <WideCardElement>
        </WideCardElement>
        <WideCardElement>
        </WideCardElement>
        <WideCardElement>
        </WideCardElement>
        <WideCardElement>
        </WideCardElement>
        </>
    }
    </WideCardGrid>
    </>
  )

}
