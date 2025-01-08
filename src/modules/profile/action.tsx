/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "../../components/Forms";
import GlobalInput from "../../components/global-input";
import SubmitBtn from "../../components/submit-btn";
import { GetAllData } from "../../service/global";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import AvatarUpload from "../../components/avatar-upload";
import { DataFiels } from "./fiels";
import { useTranslation } from "react-i18next";

export default function CreatePage() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const {t} = useTranslation()
  const language = useSelector((state:any) => state.lang?.lang); 
    const { data,isLoading } = useQuery(["auth-me",language], () =>GetAllData("auth/me"));
  return (
    <>
      {isLoading?"":  <FormContainer
        url={"auth/meUpdate"}
        isFormData={false}
        setLoader={setLoader}
        fields={DataFiels(data?.data)}
        onSuccess={() => {
            navigate("/books");
        }}
        customData={(value: any) => {
          const returnResult: any = JSON.parse(JSON.stringify(value));
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          !returnResult["password"] && delete returnResult["password"];
          return returnResult;
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
              <div className="flex  flex-wrap gap-4 w-full max-w-[504px]">
              <AvatarUpload onUpload={()=>console.log("ds")}/>
                  <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.firstName}
                    label={t("firstName")}
                    name={`firstName`}
                    id={"firstName"}
                    placeholder={t('firstName')}
                    className={"colm1"}
                    errors={formik.errors.firstName}
                    required={true}
                  />
                  <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.lastName}
                    label={t("lastName")}
                    name={`lastName`}
                    id={"lastName"}
                    placeholder={t('lastName')}
                    className={"colm1"}
                    errors={formik.errors.lastName}
                    required={true}
                  />
                  <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.middleName}
                    label={t("middleName")}
                    name={`middleName`}
                    id={"middleName"}
                    placeholder={t('middleName')}
                    className={"colm1"}
                    errors={formik.errors.middleName}
                    required={true}
                  />
                     <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.password}
                    label={t("password")}
                    name={`password`}
                    id={"password"}
                    placeholder={t('password')}
                    className={"colm1"}
                    errors={formik.errors.password}
                  /> 
                    <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.phone}
                    label={t("phone")}
                    name={`phone`}
                    id={"phone"}
                    placeholder={t('phone')}
                    className={"colm2"}
                    errors={formik.errors.phone}
                    required={true}
                  />

                    <GlobalInput
                    type="text"
                    typeValue={'email'}
                    formik={formik}
                    value={formik.values.email}
                    label={t("email")}
                    name={`email`}
                    id={"email"}
                    placeholder={t('email')}
                    className={"colm2"}
                    errors={formik.errors.email}
                    required={true}
                  />
                       <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.country}
                    label={t("country")}
                    name={`country`}
                    id={"country"}
                    placeholder={t('country')}
                    className={"colm2"}
                    errors={formik.errors.country}
                    required={true}
                  />
                       <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.city}
                    label={t("city")}
                    name={`city`}
                    id={"city"}
                    placeholder={t('city')}
                    className={"colm2"}
                    errors={formik.errors.city}
                    required={true}
                  />
                      <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.organization}
                    label={t("organization")}
                    name={`organization`}
                    id={"organization"}
                    placeholder={t('organization')}
                    className={"colm2"}
                    errors={formik.errors.organization}
                    required={true}
                  />  
                      <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.position}
                    label={t("position")}
                    name={`position`}
                    id={"position"}
                    placeholder={t('position')}
                    className={"colm2"}
                    errors={formik.errors.position}
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
