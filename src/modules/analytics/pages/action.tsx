/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormContainer } from "../../../components/Forms";
import TopBar from "../../../components/top-bar";
import GlobalInput from "../../../components/global-input";
import SubmitBtn from "../../../components/submit-btn";
import FileUpload from "../../../components/upload";
import { DataFiels } from "./fiels";
import { GetByIdData } from "../../../service/global";
import { useQuery } from "react-query";
import LangTab from "../../../components/lang-tab";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function CreatePage() {
  const [loader, setLoader] = useState(false);
  const {t} = useTranslation()
  const navigate = useNavigate();
    const { id } = useParams();
    const language = useSelector((state:any) => state.lang?.lang); 
    const { data,isLoading } = useQuery(["oneanalytics",id,language], () =>
      GetByIdData("analytics",id),
    {
      enabled: id != "new"
    }
    );

  return (
    <>
      <TopBar title={id == "new"? t(`add`):t('update')}  />
      {isLoading?"":  <FormContainer
        url={"analytics"}
        isFormData={false}
        setLoader={setLoader}
        fields={DataFiels(data?.data)}
        onSuccess={() => {
            navigate("/analytics");
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
                    placeholder={t("title")}
                    className={"mb-4 colm1"}
                    errors={formik.errors.title}
                    required={true}
                  />
                   <GlobalInput
                    type="textArea"
                    formik={formik}
                    value={formik.values.description}
                    label={t("description")}
                    name={`description`}
                    id={"description"}
                    placeholder={t("description")}
                    className={"mb-4 colm1"}
                    errors={formik.errors.description}
                 />
                 <FileUpload
                        errors={formik.errors.image}
                      acceptTypes="image/*"
                      valueName={data?.data?.image?.name || ''}
                      className={"mb-4"}
                      label={t('dowloadFile')}
                      text={t('dowload')}
                        onUpload={(e: any)=>{
                          formik.setFieldValue(`image`, e?.data?.id);
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
