import React, { useEffect, useRef, useState } from "react";
import { ConfigureContainer, ConfigureLeft, ConfigureLeftImage, ConfigureRight, ConfigureRightExtra, ConfigureRightTitles } from "./styles";
import { InformationFormatContainerBodyButton, InformationFormatContainerBodyInput, InformationFormatContainerBodyInputLabel, InformationFormatContainerBodyTextArea } from "../information-format/styles";
import { FaEdit } from "react-icons/fa";
import { ICourses } from "src/interfaces";
import { AuthModalFormLoading } from "src/components/auth/styles";
import { useMutation } from "@tanstack/react-query";
import CourseService from "src/services/course.service";
import { ToastMessage } from "src/components/toast-message";

export const Configure: React.FC<{specificCourse?:ICourses, setSpecificCourse?:any}> = ({...props}) => {

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [loading, setLoading] = useState(false)
    const [toast, setToast] = useState({
        open:false,
        type:'',
        message:'',
      })


    const courseMutation = useMutation((variables: any) =>
    CourseService.updateCourse(variables),
    {
      onSuccess:(res)=>{
        setToast({open:true,type:'success', message:'Curso alterado com sucesso!'})
        setLoading(false)
      },
      onError:(e:any)=>{
        setToast({open:true,type:'error', message:'Falha ao alterar o curso!'})
        setLoading(false)
      }
    }
    );

    const submit = async (values: any) => {
      try {
          setLoading(true)
          await courseMutation.mutate(values);
      } catch (e) {
          console.log(e)
      }
    };

    const handleClick = () => {
    if (fileInputRef.current) {
        fileInputRef.current.click();
        }
    };

    const convertBase64 = (file:any) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };

          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };

  return <>
        <ConfigureContainer>
        <ToastMessage toastOpen={toast.open} message={toast.message} type={toast.type} setToastOpen={setToast} />
            <ConfigureLeft>
                <div
                onClick={handleClick}
                style={{
                position:'absolute',
                marginLeft:'415px',
                background:'green',
                borderRadius:'4px',
                paddingBottom:'7px',
                paddingTop:'2px',
                paddingLeft:'7px',
                paddingRight:'7px',
                zIndex:'100'
                }}>
                    <FaEdit color="white"/>
                    <input
                    type="file"
                    multiple={false}
                    style={{ display:'none' }}
                    ref={fileInputRef}
                    onChange={async (e)=>{
                    const files = e.target.files;
                    if (files && files.length > 0) {
                        const file = files[0];
                        const base64 = await convertBase64(file);
                        props.setSpecificCourse({...props.specificCourse, image:base64});
                    }

                    }}
                    />
                </div>
                <ConfigureLeftImage src={props.specificCourse?.image as unknown as ''}/>
            </ConfigureLeft>
            <ConfigureRight>
                <ConfigureRightTitles>
                <InformationFormatContainerBodyInputLabel>Título</InformationFormatContainerBodyInputLabel>
                <InformationFormatContainerBodyInput
                placeholder="Título"
                defaultValue={props.specificCourse?.name}
                onChange={(e)=>{
                    props.setSpecificCourse({...props.specificCourse, name:props.specificCourse?.name});
                }}
                type="text"/>
                <br/>
                <InformationFormatContainerBodyInputLabel>Descrição</InformationFormatContainerBodyInputLabel>
                <InformationFormatContainerBodyTextArea
                placeholder="Descrição"
                defaultValue={props.specificCourse?.description}
                onChange={(e)=>{
                    props.setSpecificCourse({...props.specificCourse, description:props.specificCourse?.description});
                }}
                rows={10}/>
                </ConfigureRightTitles>
                <br/><br/>
                <ConfigureRightExtra>
                    <div>
                    <InformationFormatContainerBodyInputLabel>Categoria</InformationFormatContainerBodyInputLabel>
                        <InformationFormatContainerBodyInput
                        style={{width:'82%', marginRight:'10%'}}
                        defaultValue={props.specificCourse?.category}
                        onChange={(e)=>{
                            props.setSpecificCourse({...props.specificCourse, category:props.specificCourse?.category});
                        }}
                        placeholder="Categoria"/>
                    </div>
                    <div>
                    <InformationFormatContainerBodyInputLabel>Preço</InformationFormatContainerBodyInputLabel>
                        <InformationFormatContainerBodyInput
                        placeholder="Preço"
                        defaultValue={props.specificCourse?.price}
                        style={{width:'82%', marginRight:'10%'}}
                        onChange={(e)=>{
                        props.setSpecificCourse({...props.specificCourse, price:props.specificCourse?.price});
                        }}
                        type="text"/>
                    </div>
                </ConfigureRightExtra>
                <InformationFormatContainerBodyButton onClick={()=>submit(props.specificCourse)} style={{marginLeft:'2.5%',width:'39%'}}>{loading?<AuthModalFormLoading color="white"/>:'Salvar'}</InformationFormatContainerBodyButton>
            </ConfigureRight>
        </ConfigureContainer>
  </>;
};
