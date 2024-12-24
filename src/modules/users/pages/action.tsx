/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormContainer } from "../../../components/Forms";
import TopBar from "../../../components/top-bar";
import GlobalInput from "../../../components/global-input";
import SubmitBtn from "../../../components/submit-btn";
import { DataFiels } from "./fiels";
import { GetAllData, GetByIdData } from "../../../service/global";
import { useQuery } from "react-query";
import LangTab from "../../../components/lang-tab";
import { useSelector } from "react-redux";
import { Switch } from "antd";

export default function CreatePage() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
    const { id } = useParams();
    const language = useSelector((state:any) => state.lang?.lang); 
    const { data,isLoading } = useQuery(["oneUsers",id,language], () =>
      GetByIdData("users",id),
    {
      enabled: id != "new"
    }
    );
    const {  data: staticRoles} = useQuery('static-roles',() =>GetAllData('static-data/Roles'));
    
  return (
    <>
      <TopBar title={id == "new"? `Добавить`:"Редактировать"}  />
      {isLoading?"":  <FormContainer
        url={"users"}
        isFormData={false}
        setLoader={setLoader}
        fields={DataFiels(data?.data)}
        customData={(value: any) => {
          const returnResult: any = JSON.parse(JSON.stringify(value));
          !returnResult["password"] && delete returnResult["password"];
          return returnResult;
        }}
        onSuccess={() => {
            navigate("/users");
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
                <div className="flex  flex-wrap gap-4 w-full max-w-[504px]">
                  <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.firstName}
                    label={"firstName"}
                    name={`firstName`}
                    id={"firstName"}
                    placeholder={'firstName'}
                    className={"colm1"}
                    errors={formik.errors.firstName}
                    required={true}
                  />
                  <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.lastName}
                    label={"lastName"}
                    name={`lastName`}
                    id={"lastName"}
                    placeholder={'lastName'}
                    className={"colm1"}
                    errors={formik.errors.lastName}
                    required={true}
                  />
                  <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.middleName}
                    label={"middleName"}
                    name={`middleName`}
                    id={"middleName"}
                    placeholder={'middleName'}
                    className={"colm1"}
                    errors={formik.errors.middleName}
                    required={true}
                  />
                     <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.password}
                    label={"password"}
                    name={`password`}
                    id={"password"}
                    placeholder={'password'}
                    className={"colm1"}
                    errors={formik.errors.password}
                  /> 
                    <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.phone}
                    label={"phone"}
                    name={`phone`}
                    id={"phone"}
                    placeholder={'phone'}
                    className={"colm2"}
                    errors={formik.errors.phone}
                    required={true}
                  />

                    <GlobalInput
                    type="text"
                    typeValue={'email'}
                    formik={formik}
                    value={formik.values.email}
                    label={"email"}
                    name={`email`}
                    id={"email"}
                    placeholder={'email'}
                    className={"colm2"}
                    errors={formik.errors.email}
                    required={true}
                  />
                       <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.country}
                    label={"country"}
                    name={`country`}
                    id={"country"}
                    placeholder={'country'}
                    className={"colm2"}
                    errors={formik.errors.country}
                    required={true}
                  />
                       <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.city}
                    label={"city"}
                    name={`city`}
                    id={"city"}
                    placeholder={'city'}
                    className={"colm2"}
                    errors={formik.errors.city}
                    required={true}
                  />
                      <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.organization}
                    label={"organization"}
                    name={`organization`}
                    id={"organization"}
                    placeholder={'organization'}
                    className={"colm2"}
                    errors={formik.errors.organization}
                    required={true}
                  />  
                      <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.position}
                    label={"position"}
                    name={`position`}
                    id={"position"}
                    placeholder={'position'}
                    className={"colm2"}
                    errors={formik.errors.position}
                    required={true}
                    
                  />  
                  {staticRoles?.data?.length && staticRoles?.data?.map((e:any)=>(
                   <label key={e?.id} className="flex w-full items-center justify-between">
                    <p className="text-[15px] font-semibold leading-[20px] cursor-pointer">{e?.name}</p>
                    <Switch  defaultChecked={formik.values.roles?.includes(e?.id)} onChange={(is)=>{
                      const arr = formik.values.roles || []
                      if(is){
                        arr.push(e?.id)
                        formik.setFieldValue(`roles`, arr);
                       
                      }else{
                        formik.setFieldValue(`roles`, arr.filter((item:any) => item !== e?.id));
                      }
                     
                    }} />
                  </label>

                  ))
                  }

                      
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
