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

export default function CreatePage() {
    const [loader, setLoader] = useState(false);
     const navigate = useNavigate() 
    const language = useSelector((state:any) => state.lang?.lang); 
    const { ItemId ,id} = useParams();
    const { data,isLoading } = useQuery(["one/map-items",ItemId,language], () =>
      GetByIdData("map-items",ItemId),
    {
      enabled: ItemId != "new"
    }
    );
   
  return (
    <>
      <TopBar title={ItemId == "new"? `Добавить`:"Редактировать"}  />
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
          navigate(`/maps/${id}/info_country/indexed`);
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
                    label={"title"}
                    name={`title`}
                    id={"title"}
                    placeholder={'title'}
                    className={"mb-4 colm1"}
                    errors={formik.errors.title}
                    required={true}
               />
               
                <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.grade}
                    label={"grade"}
                    name={`grade`}
                    typeValue={"number"}
                    id={"grade"}
                    placeholder={'grade'}
                    className={"mb-4 colm1"}
                    errors={formik.errors.grade}
                    required={true}
               />
                   <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.rate}
                    label={"rate"}
                    name={`rate`}
                    id={"rate"}
                    placeholder={'rate'}
                    className={"mb-4 colm1"}
                    errors={formik.errors.rate}
                    typeValue={"number"}
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
