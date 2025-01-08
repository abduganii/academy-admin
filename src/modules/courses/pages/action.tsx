/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { FormContainer } from "../../../components/Forms";
import TopBar from "../../../components/top-bar";
import GlobalInput from "../../../components/global-input";
import SubmitBtn from "../../../components/submit-btn";
import FileUpload from "../../../components/upload";
import { DataFiels, DataFielsVert } from "./fiels";
import { GetByIdData } from "../../../service/global";
import { useQuery } from "react-query";
import LangTab from "../../../components/lang-tab";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function CreatePage() {
   const {t} = useTranslation()
  const [loader, setLoader] = useState(false);
  const [params] = useSearchParams()
  const navigate = useNavigate();
  const language = useSelector((state:any) => state.lang?.lang); 
  const { id } = useParams();
  const { data,isLoading } = useQuery(["oneCourses",id,language], () =>
    GetByIdData("courses",id),
  {
    enabled: id != "new"
  }
  );
 
  return (
    <>
      <TopBar title={id == "new"? t(`add`):t('update')}  />
      
      {isLoading?"": <FormContainer
        url={"courses"}
        isFormData={false}
        setLoader={setLoader}
        fields={ params.get('type') == 'virtual' ?  DataFielsVert(data?.data,params.get('type')):DataFiels(data?.data,params.get('type'))}
        onSuccess={() => {
            navigate(`/courses?type=${params.get('type')}`);
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
                {params.get('type') == 'virtual' ? '': <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.title}
                    label={t("title")}
                    name={`title`}
                    id={"title"}
                    placeholder={t('title')}
                    className={"mb-4 colm1"}
                    errors={formik.errors.title}
                  />}
                  {params.get('type') == 'virtual' ? <FileUpload
                      errors={formik.errors.image}
                    acceptTypes="image/*"
                    valueName={data?.data?.image?.name || ''}
                    className={"mb-4"}
                    label={t('dowloadFile')}
                    text={t('dowload')}
                      onUpload={(e: any)=>{
                        formik.setFieldValue(`image`, e?.data?.id);
                      }}
                    />:""}
                  
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
                  {params.get('type') == 'virtual' ? '': <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.link}
                    label={t("link")}
                    name={`link`}
                    id={"link"}
                    placeholder={'https://example.com'}
                    className={"mb-4 colm1"}
                    errors={formik.errors.link}
                  />}
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
