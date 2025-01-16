/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormContainer } from "../../../components/Forms";
import TopBar from "../../../components/top-bar";
import GlobalInput from "../../../components/global-input";
import SubmitBtn from "../../../components/submit-btn";
import { DataFiels } from "./fiels";
import {  GetByIdData } from "../../../service/global";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import LangTab from "../../../components/lang-tab";
import FileUpload from "../../../components/upload";
import { useTranslation } from "react-i18next";

export default function CreatePage() {
   const {t} = useTranslation()
  const [loader, setLoader] = useState(false);
  const language = useSelector((state:any) => state.lang?.lang);
  const navigate = useNavigate() 
    const { ItemId ,id} = useParams();
    const { data,isLoading } = useQuery(["one/map-items",ItemId,language], () =>
      GetByIdData("map-items",ItemId),
    {
      enabled: ItemId != "new"
    }
    );
   
  return (
    <>
      <TopBar title={ItemId == "new"? t(`add`):t('update')}  />
      {isLoading?"":  <FormContainer
      madalId={ItemId}
        url={"map-items"}
        isFormData={false}
        setLoader={setLoader}
        fields={[{
          name: "map",
          validationType:"number",
          value:Number(id),
        }, ...DataFiels(data?.data)]}
        onSuccess={() => {
            navigate(`/maps/${id}/info_country/anti_corruptions`);
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
              {ItemId == "new" ? '' : <LangTab /> }
                <div className="w-full max-w-[504px]">
                <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.title}
                    label={t("title")}
                    name={`title`}
                    id={"title"}
                    placeholder={t('enter')}
                    className={"mb-4 colm1"}
                    errors={formik.errors.title}
                    required={true}
               />
                  <FileUpload
                      errors={formik.errors.logo}
                      acceptTypes="image/*"
                      valueName={data?.data?.logo?.name || ''}
                      className={"mb-4"}
                      label={t('uploadFile')}
                      text={t('upload')}
                      onUpload={(e: any)=>{
                        formik.setFieldValue(`logo`, e?.data?.id);
                      }}
                      />
                   <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.text}
                    label={t("text")}
                    name={`text`}
                    id={"text"}
                    placeholder={t('enter')}
                    className={"mb-4 colm1"}
                    errors={formik.errors.text}
                    required={true}
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
