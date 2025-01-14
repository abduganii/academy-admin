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
import { useTranslation } from "react-i18next";

export default function CreatePage() {
   const {t} = useTranslation()
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
    const { id } = useParams();
  
    const { data } = useQuery(["oneVideos",id], () =>
      GetByIdData("videos",id,),
    {
      enabled: id != "new"
    }
    );
    const { isLoading:landLoading, data: staticLang} = useQuery('static-lang',() =>GetAllData('static-data/Languages'));
    const { isLoading:sectionsLoading, data: staticSections} = useQuery('static-sections',() =>GetAllData('static-data/Sections'));
    const { isLoading:tagsLoading, data: tags} = useQuery('tags',() =>GetAllData('tags'));
  
  return (
    <>
      <TopBar title={id == "new"? t(`add`):t('update')}  />
      <FormContainer
        url={"videos"}
        isFormData={false}
        setLoader={setLoader}
        fields={DataFiels(data?.data)}
        onSuccess={() => {
            navigate("/videos");
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
                    value={formik.values.name}
                    label={t("name")}
                    name={`name`}
                    id={"name"}
                    placeholder={t('name')}
                    className={"mb-4 colm1"}
                    errors={formik.errors.name}
                    required={true}
                  />
                   <GlobalInput
                    type="textArea"
                    formik={formik}
                    value={formik.values.description}
                    label={t("description")}
                    name={`description`}
                    id={"description"}
                    placeholder={t('description')}
                    className={"mb-4 colm1"}
                    errors={formik.errors.description}
                 />
                  <FileUpload
                    acceptTypes="image/*"
                    className={"mb-4"}
                      label={t('cover')}
                      text={t('dowload')}
                      valueName={data?.data?.poster?.name || ''}
                      onUpload={(e: any)=>{
                        formik.setFieldValue(`poster`, e?.data?.id);
                      }}
                      errors={formik.errors?.poster}
                    />
                     
                   <GlobalInput
                    type="text"
                    typeValue={'number'}
                    formik={formik}
                    value={formik.values.releasedYear}
                    label={t("releasedYear")}
                    name={`releasedYear`}
                    id={"releasedYear"}
                    placeholder={t('releasedYear')}
                    className={"mb-4 colm1"}
                    errors={formik.errors.releasedYear}
                    required={true}
                  />
                   <GlobalInput
                      type="select"
                      formik={formik}
                      loading={landLoading}
                      options={staticLang?.data}
                      fieldNames={{value: 'id', label: 'name'}}
                      value={formik.values.country || null}
                      label={t("country")}
                      name={`country`}
                      id={"country"}
                      typeValue=""
                      placeholder={t('country')}
                      className={"mb-4 colm1"}
                      errors={formik.errors.country}
                      localChange={(e:any)=>{
                        formik.setFieldValue(`country`, e);
                      }} 
                    />
                  <GlobalInput
                      type="select"
                      formik={formik}
                      loading={landLoading}
                      options={staticLang?.data}
                      fieldNames={{value: 'id', label: 'name'}}
                      value={formik.values.language || null}
                      label={t("language")}
                      name={`language`}
                      id={"language"}
                      typeValue=""
                      placeholder={t('language')}
                      className={"mb-4 colm1"}
                      errors={formik.errors.language}
                      localChange={(e:any)=>{
                        formik.setFieldValue(`language`, e);
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
                    type="select"
                    formik={formik}
                    loading={tagsLoading}
                    fieldNames={{value: 'id', label: 'name'}}
                    options={tags?.data}
                    value={formik.values.tags || null}
                    label={t("tags")}
                    name={`tags`}
                    typeValue="multiple"
                    id={"tags"}
                    placeholder={t('tags')}
                    className={"mb-4"}
                    errors={formik.errors.tags}
                    localChange={(e:any)=>{
                      formik.setFieldValue(`tags`, e);
                    }}/>
                 
                
                      <FileUpload
                      acceptTypes="video/*"
                    className={"mb-4"}
                    label={t('dowloadFile')}
                    text={t('dowload')}
                      valueName={data?.data?.file?.name || ''}
                      onUpload={(e: any)=>{
                        formik.setFieldValue(`file`, e?.data?.id);
                      }}
                      errors={formik.errors?.file}
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