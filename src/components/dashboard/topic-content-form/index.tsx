import { SlArrowLeft } from "react-icons/sl";
import { CourseContainerContentInformationContent, CourseContainerContentInformationTitleBlank, CourseContainerContentInformationContentForm } from "../content/styles";
import { InformationFormatContainerBodyInputLabel, InformationFormatContainerBodyInput, InformationFormatContainerBodyTextArea, InformationFormatContainerBodyInputFile, InformationFormatContainerBodyButton, InformationFormatContainerBodyImage } from "../information-format/styles";
import { useMutation } from "@tanstack/react-query";
import { ITopic } from "../../../interfaces/topic";
import TopicService from "../../../services/topic.service";
import { useState } from "react";
import { ToastMessage } from "../../toast-message";
import { IContent } from "../../../interfaces/content";
import Undefined from '../../../images/undefined-image.jpg'
import ContentService from "../../../services/content.service";
import { AuthModalFormFooterButton, AuthModalFormLoading } from "../../auth/styles";


export const TopicForm:React.FC<{formTopic:boolean,setFormTopic:any, specificCourse:string}> = ({...props}) =>{

    const [toastOpen, setToastOpen] = useState(false)
    const [toastMessage, setToastMessage] = useState("")
    const [toastType, setToastType] = useState("")
    const [loading, setLoading] = useState(false)

    const [newTopic, setNewTopic] = useState<ITopic>({
        name: "",
        description: "",
        image: "",
        courseRelated: props.specificCourse,
        videoUrl: "",
        files: [],
        resources: [],
        content: "",
        previous: "",
        next: ""
      })


    const useNewTopicMutation = useMutation((variables: ITopic) =>
    TopicService.create(variables),
    {
      onSuccess:(res)=>{
        setToastMessage('Topic Created Successfully')
        setToastType("success")
        setToastOpen(true)
        setLoading(false)
        props.setFormTopic(false)
      },
      onError:(e:any)=>{
          setToastMessage(e.response.data.message)
          setToastType("error")
          setToastOpen(true)
          setLoading(false)
        }
    }
  );

  const submit = async (values: ITopic) => {
    try {
        setLoading(true)
        await useNewTopicMutation.mutate(values);
    } catch (e) {
        console.log(e)
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

    return(
        <>
        <ToastMessage toastOpen={toastOpen} setToastOpen={setToastOpen} type={toastType} message={toastMessage}/>
        <CourseContainerContentInformationContent isVisible={props.formTopic}>
        <SlArrowLeft style={{marginLeft:'1%', marginTop:'1%'}} onClick={()=>props.setFormTopic(false)} size={27}>Voltar</SlArrowLeft>
        <CourseContainerContentInformationTitleBlank>Preencha as informações do Tópico novo</CourseContainerContentInformationTitleBlank>
        </CourseContainerContentInformationContent>
        <CourseContainerContentInformationContentForm>
        <div>
        <InformationFormatContainerBodyInputLabel>Nome</InformationFormatContainerBodyInputLabel>
        <InformationFormatContainerBodyInput
        onChange={(e)=>{
            setNewTopic({...newTopic, name:e.target.value})
        }}
            placeholder="Introdução ao curso"
        type="text"/>
        <br/>
        <br/>
        <InformationFormatContainerBodyInputLabel>Descrição do Produto</InformationFormatContainerBodyInputLabel>
        <br/>
        <br/>
        <InformationFormatContainerBodyTextArea
            onChange={(e)=>{
            setNewTopic({...newTopic, description:e.target.value})
            }}
        placeholder="Neste primeiro tópicos daremos os primeiros passos..."  rows={5}/>
        </div>
        </CourseContainerContentInformationContentForm>
        <CourseContainerContentInformationContentForm>
        <div>
        <InformationFormatContainerBodyInputLabel>Video Introdutório para o Tópico</InformationFormatContainerBodyInputLabel>
        <br/>
        <InformationFormatContainerBodyInputFile onChange={async (e) => {
            const files = e.target.files;
            if (files && files.length > 0) {
                const file = files[0];
                const base64 = await convertBase64(file);
                setNewTopic({ ...newTopic, videoUrl: base64 as unknown as  '' });
            }
        }} type="file"/>
        <br/>
        </div>
        <div>
        <br/>
        <InformationFormatContainerBodyInputLabel>Link para conteúdo extra</InformationFormatContainerBodyInputLabel>
        <InformationFormatContainerBodyInput
        placeholder="Opcional"
        type="text"/>
        </div>
        <InformationFormatContainerBodyButton
        disabled={loading}
        onClick={()=>{
          submit(newTopic)
        }} style={{width:'90%', marginLeft:'0.4%'}}>{loading?<AuthModalFormLoading color="white"/>:'Criar Novo tópico!'}</InformationFormatContainerBodyButton>
        </CourseContainerContentInformationContentForm>
        </>
    )
}

export const ContentForm:React.FC<{formContent:boolean,setFormContent:any, relatedTopic:string, updatableContent?:IContent, setUpdatableContent:any}> = ({...props}) =>{

  const [toastOpen, setToastOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [toastType, setToastType] = useState("")

  const [mainVideo, setMainVideo] = useState<string>()
  const [loading, setLoading] = useState(false)


  const [newContentObject, setNewContentObject] = useState<IContent>({
    name: "",
    description: "",
    image: "",
    topicRelated: props.relatedTopic,
    videoUrl: "",
    files: [],
    resources: [],
    previous: "",
    next: ""
  })



  const useNewTopicMutation = useMutation((variables: ITopic) =>
  ContentService.create(variables),
  {
    onSuccess:(res)=>{
      setToastMessage('Cnteúdo criado com sucesso!')
      setToastType("success")
      setToastOpen(true)
      setLoading(false)
      props.setFormContent(false)
    },
    onError:(e:any)=>{
        setToastMessage(e.response.data.message)
        setToastType("error")
        setToastOpen(true)
        setLoading(false)
    }
  }
);

const useUpdateContentMutation = useMutation((variables: ITopic) =>
ContentService.update(variables),
{
  onSuccess:(res)=>{
    setToastMessage('Conteúdo atualizado com sucesso!')
    setToastType("success")
    setToastOpen(true)
    setLoading(false)
    props.setFormContent(false)
  },
  onError:(e:any)=>{
      setToastMessage(e.response.data.message)
      setToastType("error")
      setToastOpen(true)
      setLoading(false)
  }
}
);

const submit = async (values: ITopic) => {
  try {
      setLoading(true)
      if(props.updatableContent){
        await useUpdateContentMutation.mutate(values);
      }else{
        useNewTopicMutation.mutate(values);
      }
  } catch (e) {
      console.log(e)
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

  return(
      <>
        <ToastMessage toastOpen={toastOpen} setToastOpen={setToastOpen} type={toastType} message={toastMessage}/>
        <CourseContainerContentInformationContent isVisible={props.formContent}>
        <SlArrowLeft style={{marginLeft:'1%', marginTop:'-1%'}} onClick={()=>{props.setUpdatableContent(null);props.setFormContent(false)}} size={27}>Voltar</SlArrowLeft>
        <CourseContainerContentInformationTitleBlank>Preencha as informações do Conteúdo novo</CourseContainerContentInformationTitleBlank>
        </CourseContainerContentInformationContent>
        <CourseContainerContentInformationContentForm>
          <div>
            <InformationFormatContainerBodyInputLabel>Nome</InformationFormatContainerBodyInputLabel>
            <InformationFormatContainerBodyInput
            defaultValue={props.updatableContent?props.updatableContent.name:''}
            onChange={(e)=>{
              setNewContentObject({...newContentObject, name:e.target.value})
            }}
            placeholder="Introdução ao curso"
            type="text"/>
            <br/>
            <br/>
            <InformationFormatContainerBodyInputLabel>Descrição do Produto</InformationFormatContainerBodyInputLabel>
            <br/>
            <InformationFormatContainerBodyTextArea
                defaultValue={props.updatableContent?props.updatableContent.description:''}
                onChange={(e)=>{
                  setNewContentObject({...newContentObject, description:e.target.value})
                }}
            placeholder="Neste primeiro tópicos daremos os primeiros passos..."  rows={5}/>
            </div>
            <div style={{display:'flex', marginTop:'3%'}}>
                <div style={{display:"flex", flexDirection:'column', width:'45%', marginRight:'2%'}}>
                <InformationFormatContainerBodyInputLabel>Escolha a capa Conteúdo</InformationFormatContainerBodyInputLabel>
                <br/>
                <InformationFormatContainerBodyImage
                defaultValue={props.updatableContent?props.updatableContent.image:''}
                src={newContentObject?.image?newContentObject.image:props.updatableContent?props.updatableContent.image:''}/>
                <InformationFormatContainerBodyInputFile
                defaultValue={props.updatableContent?props.updatableContent.image:''}
                style={{width:'100%'}}
                onChange={async (e) => {
                    const files = e.target.files;
                    if (files && files.length > 0) {
                      const file = files[0];
                      const base64 = await convertBase64(file);
                      setNewContentObject({ ...newContentObject, image: base64 as unknown as  '' });
                    }
                }} type="file"/>
                </div>
                <div style={{display:"flex", flexDirection:'column', width:'45%', marginLeft:'2%'}}>
                <InformationFormatContainerBodyInputLabel>Video Introdutório para o Tópico</InformationFormatContainerBodyInputLabel>
                  <br/>
                  <br/>
                  {mainVideo && (
                    <video
                    defaultValue={props.updatableContent?props.updatableContent.videoUrl:''}
                    width="235"
                    height="195"
                    controls
                    autoPlay
                    >
                      <source src={mainVideo} type="video/mp4" />
                    </video>
                  )}
                  <InformationFormatContainerBodyInputFile
                  defaultValue={props.updatableContent?props.updatableContent.files:''}
                  style={{width:'90%', marginBottom:'2.9%'}}
                  onChange={async (e) => {
                      const files = e.target.files;
                      if (files && files.length > 0) {
                          const file = files[0];
                          const base64 = await convertBase64(file);
                          setMainVideo(base64 as unknown as '')
                          setNewContentObject({ ...newContentObject, videoUrl: base64 as unknown as  '' });
                      }
                  }} type="file"/>
                  <br/>
                <InformationFormatContainerBodyInputLabel>Arquivos Em PFD e entre outros</InformationFormatContainerBodyInputLabel>
                <InformationFormatContainerBodyInputFile
                    style={{width:'90%', marginTop:'2.9%'}}
                    onChange={async (e) => {
                      const files = e.target.files;
                      if (files && files.length > 0) {
                          const file = files[0];
                          const base64 = await convertBase64(file);
                          if(newContentObject?.files !== undefined){
                            newContentObject?.files.push(base64)
                          }
                      }
                  }} type="file"/>
                </div>
            </div>
            <AuthModalFormFooterButton onClick={()=>{
              if(newContentObject){
                submit(newContentObject)
              }
            }}>{loading?<AuthModalFormLoading color="white"/>:props.updatableContent?'Atualizar Conteúdo':'Criar Conteúdo'}</AuthModalFormFooterButton>
        </CourseContainerContentInformationContentForm>
      </>
  )
}