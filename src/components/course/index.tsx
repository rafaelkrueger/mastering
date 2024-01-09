import React, { useEffect, useState } from "react";
import { CourseContainer, CourseLeftBanner, CourseLeftBannerImage, CourseLeftContainer, CourseRightClassfier, CourseRightContainer, CourseRightDicount, CourseRightExchange, CourseRightPrice, CourseRightRightBuy, CourseRightRightBuyButton, CourseRightRightBuyCart, CourseRightTitle, CourseRightVideo, CouseRightProprieties } from "./styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ICourses } from "../../interfaces";
import Api from "../../api";
import * as Ai from 'react-icons/ai'
import { useNavigate, useParams } from "react-router-dom";
import { ITopic } from "../../interfaces/topic";
import { IContent } from "../../interfaces/content";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { ToastMessage } from "../toast-message";


export const Course: React.FC = () =>{
    const [course, setCourse] = useState<ICourses>()
    const [topic, setTopic] = useState<ITopic[]>()
    const [content, setContent] = useState<IContent[]>()
    const [toastOpen, setToastOpen] = useState(false)
    const [toastMessage, setToastMessage] = useState("")
    const [toastType, setToastType] = useState("")
    const [mainVideo, setMainVideo] = useState<string>()
    const navigate = useNavigate()
    const cart = useCart()


    const {id} = useParams()

    useEffect(()=>{
        Api.get(`/course/${id}`).then((res)=>{
            setCourse(res.data?.course)
            setTopic(res.data?.topic)
            setMainVideo(res.data.topic[0].videoUrl)
        }).catch((err)=>{
            console.log(err)
        })
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[id])


    return(
        <>
        <CourseContainer>
        <ToastMessage toastOpen={toastOpen} setToastOpen={setToastOpen} type={toastType} message={toastMessage}/>
            <CourseLeftContainer>
            <CourseLeftBanner>
                <CourseLeftBannerImage src={course?course.image:''}/>
                </CourseLeftBanner>
                <br/>
                <h1>{course?course.name:''}</h1>
                <hr/>
                <br/>
                <p>{course?course.description:''}</p>
            </CourseLeftContainer>
            <CourseRightContainer>
                <CourseRightVideo>
                {mainVideo && (
                <video
                width="310"
                height="196"
                controls
                autoPlay
                style={{
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px',
                }}
                >
                <source src={mainVideo} type="video/mp4" />
            </video>
          )}
          </CourseRightVideo>
                <br/>
                <CourseRightClassfier style={{display:"flex"}}>
                <div style={{marginLeft:'-18%'}}>
                    <Ai.AiFillStar size={17}/>
                    <Ai.AiFillStar size={17}/>
                    <Ai.AiFillStar size={17}/>
                    <Ai.AiFillStar size={17}/>
                    <Ai.AiOutlineStar size={17}/>
                </div>
                <div style={{marginLeft:'8%'}}>
                    <p> {course?course.category:''}</p>
                </div>
                </CourseRightClassfier>
                <CouseRightProprieties>
                {
                    topic?topic.map((topic)=>{
                        return(
                            <>
                            <p>{topic.name}</p>
                            </>
                        )
                    })
                    :''
                }
                </CouseRightProprieties>
                <CourseRightExchange>
                    <CourseRightDicount>R$ {course?course.price:''}</CourseRightDicount>
                    <CourseRightPrice>R$ {course?course.price:''}</CourseRightPrice>
                </CourseRightExchange>
                <CourseRightRightBuy>
                    <CourseRightRightBuyButton onClick={()=>{cart.addToCart(course); navigate('/cart')} }>Começar Agora!</CourseRightRightBuyButton>
                    <CourseRightRightBuyCart onClick={()=>{
                        cart.addToCart(course)
                        setToastOpen(true)
                        setToastMessage('Curso adicionado ao carrinho!')
                        setToastType('success')
                    }}><AiOutlineShoppingCart/> +</CourseRightRightBuyCart>
                </CourseRightRightBuy>
            </CourseRightContainer>
        </CourseContainer>
        </>
    )
}