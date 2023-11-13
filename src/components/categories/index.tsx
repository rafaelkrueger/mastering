import React, { useEffect, useState } from "react";
import { CategoriesContainer, CategoryElement, CategoryElementImage, CategoryElementSkeleton, CategoryElementText } from "./styles";
import Api from "../../api";
import { ICategory } from "../../interfaces";



export const Categories: React.FC = () =>{
    const [allCategories, setAllCategories] = useState<ICategory[]>([])

    useEffect(()=>{
        Api.get("course/categories")
        .then((res)=>{
            setAllCategories(res.data)
        })
        .catch((err)=>{
            console.log("Error: " + err)
        })
    },[])

    return(
        <>
        <CategoriesContainer>
        {allCategories.length > 0?
        allCategories.map((list)=>{
            return(
                <CategoryElement>
                    <CategoryElementImage src={list.firstImage}/>
                    <CategoryElementText to="/recent">{list?.category}</CategoryElementText>
                </CategoryElement>
            )
        })
        :
        <>
            <CategoryElementSkeleton>
            </CategoryElementSkeleton>
            <CategoryElementSkeleton>
            </CategoryElementSkeleton>
            <CategoryElementSkeleton>
            </CategoryElementSkeleton>
            <CategoryElementSkeleton>
            </CategoryElementSkeleton>
            <CategoryElementSkeleton>
            </CategoryElementSkeleton>
        </>
        }
        </CategoriesContainer>
        </>
    )
}