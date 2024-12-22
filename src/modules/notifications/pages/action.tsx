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

export default function CreatePage() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
    const { id } = useParams();
    const language = useSelector((state:any) => state.lang?.lang); 
    const { data,isLoading } = useQuery(["onenotifications",id,language], () =>
      GetByIdData("notifications/temps",id),
    {
      enabled: id != "new"
    }
    );
    const {  data: users,isLoading:userLoading} = useQuery('users',() =>GetAllData('users'));
    
  return (
    <>
      <TopBar title={id == "new"? `Добавить`:"Редактировать"}  />
      {isLoading?"":  <FormContainer
        url={"notifications/temps"}
        isFormData={false}
        setLoader={setLoader}
        fields={DataFiels(data?.data)}
        onSuccess={() => {
            navigate("/notifications");
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
                    value={formik.values.title}
                    label={"title"}
                    name={`title`}
                    id={"title"}
                    placeholder={'title'}
                    className={"colm1"}
                    errors={formik.errors.title}
                    required={true}
                  />
                
                    <GlobalInput
                        type="textArea"
                        formik={formik}
                        value={formik.values.description}
                        label={"description"}
                        name={`description`}
                        id={"description"}
                        placeholder={'description'}
                        className={"mb-4 colm1"}
                        errors={formik.errors.description}
                      />
                  <GlobalInput
                      type="select"
                      formik={formik}
                      loading={userLoading}
                      fieldNames={{value: 'id', label: 'firstName'}}
                      options={users?.data}
                      value={formik.values.users }
                      label={"users"}
                      name={`users`}
                      typeValue="multiple"
                      id={"users"}
                      placeholder={'users'}
                      className={"mb-4"}
                      errors={formik.errors.users}
                      localChange={(e:any)=>{
                        formik.setFieldValue(`users`, e);
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
