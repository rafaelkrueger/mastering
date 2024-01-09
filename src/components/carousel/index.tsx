import React, { useEffect, useState } from 'react'
import { CarouselSlides, CarouselImage, CarouselImageButtonNext, CarouselImageButtonPrevious } from './styles'
import Api from '../../api'
import { ICourses } from '../../interfaces'
import { useNavigate } from 'react-router-dom'
import * as Md from 'react-icons/md'


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

  const goToPrevious = () => {
    console.log(currentCourse)
    if(coursesImages){
      setCurrentCourse((currentCourse - 1 + coursesImages.length) % coursesImages.length);
    }
  };

  const goToNext = () => {
    console.log(currentCourse)
    if(coursesImages){
      setCurrentCourse((currentCourse + 1) % coursesImages.length);
    }
  };

  return (
    <>
    <CarouselSlides onClick={()=>{navigate(`/product/${coursesImages?coursesImages[currentCourse]._id:''}`)}}>
        <CarouselImage src={coursesImages ? coursesImages[currentCourse]?.image : ''}/>
    </CarouselSlides>
      <CarouselImageButtonNext onClick={goToPrevious}>
        <Md.MdKeyboardArrowLeft size={30} style={{margin:'5%'}}/>
      </CarouselImageButtonNext>
      <CarouselImageButtonPrevious onClick={(event) => { event.stopPropagation(); goToNext(); }}>
        <Md.MdKeyboardArrowRight size={30} style={{margin:'5%'}}/>
      </CarouselImageButtonPrevious>
    </>
  )
}

