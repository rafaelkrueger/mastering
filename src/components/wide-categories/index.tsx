import React, { useEffect, useState } from 'react'
import { WideCategoriesElement, WideCategoriesGrid, WideCategoriesText } from './styles'
import Api from '../../api'
import { ICategory } from '../../interfaces'

export const WideCategories:React.FC =() =>{

  const [allCategories, setAllCategories] = useState<ICategory[]>([])

  useEffect(()=>{
      Api.get("http://localhost:3005/course/categories")
      .then((res)=>{
          setAllCategories(res.data)
      })
      .catch((err)=>{
          console.log("Error: " + err)
      })
  },[])
  return (
    <WideCategoriesGrid>
    {allCategories.length > 0?
      allCategories.map((list)=>{
          return(
              <WideCategoriesElement>
                  <WideCategoriesText to="recent">{list?.category}</WideCategoriesText>
              </WideCategoriesElement>
          )
      })
      :
    <>
        <WideCategoriesElement></WideCategoriesElement>
        <WideCategoriesElement></WideCategoriesElement>
        <WideCategoriesElement></WideCategoriesElement>
        <WideCategoriesElement></WideCategoriesElement>
        <WideCategoriesElement></WideCategoriesElement>
        <WideCategoriesElement></WideCategoriesElement>
    </>
    }
    </WideCategoriesGrid>
  )

}
