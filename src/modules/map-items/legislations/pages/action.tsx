/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormContainer } from "../../../../components/Forms";
import TopBar from "../../../../components/top-bar";
import GlobalInput from "../../../../components/global-input";
import SubmitBtn from "../../../../components/submit-btn";
import { DataFiels } from "./fiels";
import {  GetByIdData } from "../../../../service/global";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import LangTab from "../../../../components/lang-tab";

export default function CreatePage() {
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
            // navigate("/map-items");
            navigate(`/maps/${id}/info_country/legislations`);
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
                   <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.link}
                    label={"link"}
                    name={`link`}
                    id={"link"}
                    placeholder={'link'}
                    className={"mb-4 colm1"}
                    errors={formik.errors.link}
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
