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
import LangTab from "../../../components/lang-tab";
import { useSelector } from "react-redux";

export default function CreatePage() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
    const { id } = useParams();
    const language = useSelector((state:any) => state.lang?.lang); 
    const { data,isLoading } = useQuery(["oneNews",id,language], () =>
      GetByIdData("news",id),
    {
      enabled: id != "new"
    }
    );
    const { isLoading:sectionsLoading, data: staticSections} = useQuery('static-sections',() =>GetAllData('static-data/Sections'));
    const { isLoading:tagsLoading, data: tags} = useQuery(['tags',language],() =>GetAllData('tags'));

  return (
    <>
      <TopBar title={id == "new"? `Добавить`:"Редактировать"}  />
      {isLoading?"":  <FormContainer
        url={"news"}
        isFormData={false}
        setLoader={setLoader}
        fields={DataFiels(data?.data)}
        onSuccess={() => {
            navigate("/news");
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
              {id == "new" ? '' : <LangTab /> }
                <div className="w-full max-w-[504px]">
                  <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.title}
                    label={"title"}
                    name={`title`}
                    id={"title"}
                    placeholder={'title'}
                    className={"mb-4 colm1"}
                    errors={formik.errors.title}
                    required={true}
                  />
                   <GlobalInput
                    type="textArea"
                    formik={formik}
                    value={formik.values.content}
                    label={"content"}
                    name={`content`}
                    id={"content"}
                    placeholder={'content'}
                    className={"mb-4 colm1"}
                    errors={formik.errors.content}
                 />
                   <FileUpload
                        errors={formik.errors.image}
                      acceptTypes="image/*"
                      valueName={data?.data?.image?.name || ''}
                      className={"mb-4"}
                        label="Обложка"
                        text="Загрузить"
                        onUpload={(e: any)=>{
                          formik.setFieldValue(`image`, e?.data?.id);
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
                    type="select"
                    formik={formik}
                    loading={tagsLoading}
                    fieldNames={{value: 'id', label: 'name'}}
                    options={tags?.data}
                    value={formik.values.tags || null}
                    label={"tags"}
                    name={`tags`}
                    typeValue="multiple"
                    id={"tags"}
                    placeholder={'tags'}
                    className={"mb-4"}
                    errors={formik.errors.tags}
                    localChange={(e:any)=>{
                      formik.setFieldValue(`tags`, e);
                    }}/>
                       <GlobalInput
                    type="datePicker"
                    formik={formik}
                    value={formik.values.publishStartTime}
                    label={"publishStartTime"}
                    name={`publishStartTime`}
                    id={"publishStartTime"}
                    placeholder={'publishStartTime'}
                    className={"mb-4 colm1"}
                    localChange={(e:any)=>{
                      console.log(e)
                      formik.setFieldValue(`publishStartTime`, e);
                    }}
                    errors={(formik.errors as any).publishStartTime}
                  />
                   <GlobalInput
                  type="datePicker"
                  formik={formik}
                  value={formik.values.publishEndTime}
                  label={"publishEndTime"}
                  name={`publishEndTime`}
                  id={"publishEndTime"}
                  placeholder={'publishEndTime'}
                  className={"mb-4 colm1"}
                  localChange={(e:any)=>{
                    console.log(e)
                    formik.setFieldValue(`publishEndTime`, e);
                  }}
                  errors={(formik.errors as any).publishEndTime}
                />
                  
                <GlobalInput
                      type="select"
                      formik={formik}
                      options={[{ value: true, label: 'active' },
                        { value: false, label: 'isActive' },
                       ]}
                      value={formik.values.isActive || null}
                      label={"isActive"}
                      name={`isActive`}
                      typeValue=""
                      id={"isActive"}
                      placeholder={'isActive'}
                      className={"mb-4"}
                      errors={formik.errors.isActive}
                      localChange={(e:any)=>{
                        formik.setFieldValue(`isActive`, e);
                    }}/>                
                </div>
              </div>
            </div>
            <SubmitBtn loader={loader} />
            </>
          );
        }}
      </FormContainer>}
      {/* {isLoading && <Loader />} */}
    </>
  );
}
