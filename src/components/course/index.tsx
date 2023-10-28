import React, { useEffect, useState } from "react";
import { CourseContainer, CourseLeftBanner, CourseLeftBannerImage, CourseLeftContainer, CourseRightClassfier, CourseRightContainer, CourseRightDicount, CourseRightExchange, CourseRightPrice, CourseRightRightBuy, CourseRightRightBuyButton, CourseRightRightBuyCart, CourseRightTitle, CourseRightVideo, CouseRightProprieties } from "./styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ICourses } from "../../interfaces";
import Api from "../../api";
import { useParams } from "react-router-dom";
import { ITopic } from "../../interfaces/topic";
import { IContent } from "../../interfaces/content";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";


export const Course: React.FC = () =>{
    const [course, setCourse] = useState<ICourses>()
    const [topic, setTopic] = useState<ITopic[]>()
    const [content, setContent] = useState<IContent[]>()
    const [mainVideo, setMainVideo] = useState<string>()
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
            <CourseLeftContainer>
            <CourseLeftBanner>
                <CourseLeftBannerImage src={course?course.image:''}/>
                </CourseLeftBanner>
                <br/>
                <h1>{course?course.name:''}</h1>
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
          )}               </CourseRightVideo>
                <br/>
                <CourseRightTitle>{course?course.name:''}</CourseRightTitle>
                <CourseRightClassfier style={{display:"flex"}}>
                    <p>5.0 (Star)</p>
                    <p> {course?course.category:''}</p>
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
                    <CourseRightRightBuyButton onClick={()=>cart.addToCart(course)}><Link style={{color:'white', textDecoration:'none'}} to="/cart">Começar Agora!</Link></CourseRightRightBuyButton>
                    <CourseRightRightBuyCart onClick={()=>{
                        cart.addToCart(course)
                    }}><AiOutlineShoppingCart/></CourseRightRightBuyCart>
                </CourseRightRightBuy>
            </CourseRightContainer>
        </CourseContainer>
        </>
    )
}