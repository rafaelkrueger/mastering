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
              <Link to={`/product/${list?._id}`}
              style={{
              textDecoration:'none',
              color:'rgba(0,0,0,0.9)',
              background:'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(7px)'
              }}>
              <WideCardElementCart onClick={()=>{
                cart.addToCart(list)
              }}>
                <WideCardElementCartIcon/>
              </WideCardElementCart>
              <WideCardElementWishlist>
                <WideCardElementWishlistIcon/>
              </WideCardElementWishlist>
              <div style={{position:'absolute', marginLeft:'60%',background:'white', padding:'2px', paddingRight:'10px', paddingLeft:'10px', borderBottomLeftRadius:'5px', borderBottomRightRadius:'5px', boxShadow:'0px 5px 5px rgba(0,0,0,0.3)'}}>{list.category}</div>
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
