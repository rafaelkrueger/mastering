import React, { useEffect, useState } from 'react'
import { CarouselSlides, CarouselImage } from './styles'
import Api from '../../api'
import { ICourses } from '../../interfaces'
import { useNavigate } from 'react-router-dom'

export const MainCarousel:React.FC =() =>{
  const [coursesImages, setCoursesImages] = useState<ICourses[]>()
  const [currentCourse, setCurrentCourse] = useState<number>(0)
  const navigate = useNavigate()

  useEffect(()=>{
    Api.get('/course').then((res)=>{
      setCoursesImages(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  useEffect(()=>{
    setInterval(()=>{
      if(coursesImages !== undefined){
        if(currentCourse === coursesImages?.length){
          setCurrentCourse(0)
        }else{
          setCurrentCourse(currentCourse + 1)
        }
      }
    },1000)
  },[])



  return (
    <>
    <CarouselSlides onClick={()=>{navigate(`/product/${coursesImages?coursesImages[currentCourse]._id:''}`)}}>
        <CarouselImage src={coursesImages ? coursesImages[currentCourse].image : ''}/>
    </CarouselSlides>
    </>
  )
}

