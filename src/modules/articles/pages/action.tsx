/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormContainer } from "../../../components/Forms";
import TopBar from "../../../components/top-bar";
import GlobalInput from "../../../components/global-input";
import SubmitBtn from "../../../components/submit-btn";
import FileUpload from "../../../components/upload";
import { DataFiels } from "./fiels";
import { GetAllData, GetByIdData } from "../../../service/global";
import { useQuery } from "react-query";

export default function CreatePage() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
    const { id } = useParams();
  
    const { data } = useQuery(["oneArticle",id], () =>
      GetByIdData("articles",id),
    {
      enabled: id != "new"
    }
    );
    const { isLoading:sectionsLoading, data: staticSections} = useQuery('static-sections',() =>GetAllData('static-data/Sections'));
   const { isLoading:authorsLoading, data: authors} = useQuery('authors',() =>GetAllData('authors'));
   
  return (
    <>
      <TopBar title={id == "new"? `Добавить`:"Редактировать"}  />
      <FormContainer
        url={"articles"}
        isFormData={false}
        setLoader={setLoader}
        fields={DataFiels(data?.data)}
        onSuccess={() => {
            navigate("/articles");
        }}
        onError={(e: any) => {
          console.log(e, "onError");
        }}
        onFinal={() => {
          setLoader(false);
        }}
        validateOnMount={false}
      >
        {(formik) => {
        
          return (
            <>
             <div className="p-4">
              <div className="w-full p-[24px] min-h-[500px]  bg-white rounded-lg">
                <div className="w-full max-w-[504px]">
                  <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.title}
                    label={"title"}
                    name={`title`}
                    id={"title"}
                    placeholder={'title'}
                    className={"mb-4 colm2"}
                    errors={formik.errors.title}
                    required={true}
                  />
                 
                   <GlobalInput
                      type="select"
                      formik={formik}
                      loading={authorsLoading}
                      options={authors?.data}
                      fieldNames={{value: 'id', label: 'name'}}
                      value={formik.values.author || null}
                      label={"author"}
                      name={`author`}
                      typeValue=""
                      id={"author"}
                      placeholder={'author'}
                      className={"mb-4"}
                      errors={formik.errors.author}
                      localChange={(e:any)=>{
                        formik.setFieldValue(`author`, e);
                      }}
                  />
                   <GlobalInput
                      type="select"
                      formik={formik}
                      loading={sectionsLoading}
                      options={staticSections?.data}
                      fieldNames={{value: 'id', label: 'name'}}
                      value={formik.values.section || null}
                      label={"section"}
                      name={`section`}
                      typeValue=""
                      id={"section"}
                      placeholder={'section'}
                      className={"mb-4"}
                      errors={formik.errors.section}
                      localChange={(e:any)=>{
                        formik.setFieldValue(`section`, e);
                      }}
                  />
                  
                   <GlobalInput
                    type="textArea"
                    formik={formik}
                    value={formik.values.annotation}
                    label={"annotation"}
                    name={`annotation`}
                    id={"annotation"}
                    placeholder={'annotation'}
                    className={"mb-4 colm2"}
                    errors={formik.errors.annotation}
                 />
                 
                 <GlobalInput
                    type="textArea"
                    formik={formik}
                    value={formik.values.text}
                    label={"text"}
                    name={`text`}
                    id={"text"}
                    placeholder={'text'}
                    className={"mb-4 colm2"}
                    errors={formik.errors.text}
                 />
                   <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.link}
                    label={"link"}
                    name={`link`}
                    id={"link"}
                    placeholder={'link'}
                    className={"mb-4 colm2"}
                    errors={formik.errors.link}
                    required={true}
                  />
                 
                      <GlobalInput
                    type="datePicker"
                    formik={formik}
                    value={formik.values.published_at}
                    label={"published_at"}
                    name={`published_at`}
                    id={"published_at"}
                    placeholder={'published_at'}
                    className={"mb-4 colm2"}
                    localChange={(e:any)=>{
                      console.log(e)
                      formik.setFieldValue(`published_at`, e);
                    }}
                    errors={(formik.errors as any).published_at}
                  />
                      <FileUpload
                    className={"mb-4"}
                      label="Загрузить файл"
                      text="Загрузить"
                      onUpload={(e: any)=>console.log(e)}
                    />
                </div>
              </div>
            </div>
            <SubmitBtn loader={loader} />
            </>
          );
        }}
      </FormContainer>
      {/* {isLoading && <Loader />} */}
    </>
  );
}
