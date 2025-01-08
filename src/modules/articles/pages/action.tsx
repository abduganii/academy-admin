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
import { useSelector } from "react-redux";
import LangTab from "../../../components/lang-tab";
import { useTranslation } from "react-i18next";

export default function CreatePage() {
  const {t} = useTranslation()
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const language = useSelector((state:any) => state.lang?.lang); 
    const { id } = useParams();
    const { data,isLoading } = useQuery(["oneArticle",id,language], () =>
      GetByIdData("articles",id),
    {
      enabled: id != "new"
    }
    );
    const { isLoading:sectionsLoading, data: staticSections} = useQuery('static-sections',() =>GetAllData('static-data/Sections'));
   const { isLoading:authorsLoading, data: authors} = useQuery(['authors',language],() =>GetAllData('authors'));
   
  return (
    <>
      <TopBar title={id == "new"? t(`add`):t('update')}  />
      {isLoading?"":  <FormContainer
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
              {id == "new" ? '' : <LangTab /> }
                <div className="w-full max-w-[504px]">
                  <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.title}
                    label={t("title")}
                    name={`title`}
                    id={"title"}
                    placeholder={t('title')}
                    className={"mb-4 colm1"}
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
                      label={t("author")}
                      name={`author`}
                      typeValue=""
                      id={"author"}
                      placeholder={t('author')}
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
                      label={t("section")}
                      name={`section`}
                      typeValue=""
                      id={"section"}
                      placeholder={t('section')}
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
                    label={t('annotation')}
                    name={`annotation`}
                    id={'annotation'}
                    placeholder={t('annotation')}
                    className={"mb-4 colm1"}
                    errors={formik.errors.annotation}
                 />
                 
                 <GlobalInput
                    type="textArea"
                    formik={formik}
                    value={formik.values.text}
                    label={t("text")}
                    name={`text`}
                    id={"text"}
                    placeholder={t('text')}
                    className={"mb-4 colm1"}
                    errors={formik.errors.text}
                 />
                   <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.link}
                    label={t("link")}
                    name={`link`}
                    id={"link"}
                    placeholder={t('link')}
                    className={"mb-4 colm1"}
                    errors={formik.errors.link}
                    required={true}
                  />
                 
                      <GlobalInput
                    type="datePicker"
                    formik={formik}
                    value={formik.values.published_at}
                    label={t("published_at")}
                    name={`published_at`}
                    id={"published_at"}
                    placeholder={t('published_at')}
                    className={"mb-4 colm1"}
                    localChange={(e:any)=>{
                      formik.setFieldValue(`published_at`, e);
                    }}
                    errors={(formik.errors as any).published_at}
                  />
                     <FileUpload
                        acceptTypes=".pdf,.doc,.docx"
                        className={"mb-4"}
                        label={t('dowloadFile')}
                        text={t('dowload')}
                        errors={formik.errors.file}
                        valueName={data?.data?.file?.name || ''}
                        onUpload={(e: any)=>{
                          formik.setFieldValue(`file`, e?.data?.id);
                        }}
                    />
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
