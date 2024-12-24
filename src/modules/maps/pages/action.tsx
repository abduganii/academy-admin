/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { FormContainer } from "../../../components/Forms";
import TopBar from "../../../components/top-bar";
import GlobalInput from "../../../components/global-input";
import SubmitBtn from "../../../components/submit-btn";
import {  GetByIdData } from "../../../service/global";
import { useQuery } from "react-query";
import LangTab from "../../../components/lang-tab";
import { useSelector } from "react-redux";
import { ColorPicker, Tabs } from "antd";
const items: any = [
  {
    key: 'modul',
    label: 'modul',
  },
  {
    key: 'info_country',
    label: 'info_country',
  },
];
export default function CreatePage() {
  const [loader, setLoader] = useState(false);
  const [params] = useSearchParams()
  const navigate = useNavigate();
  const language = useSelector((state:any) => state.lang?.lang); 
  const { id } = useParams();
  const { data,isLoading } = useQuery(["oneMaps",id,language], () =>
    GetByIdData("maps",id),
  {
    enabled: id != "new"
  }
  );
 

  return (
    <>
      <div className="flex  gap-[20px] items-start p-4 w-full bg-white">
        <p className="text-[28px] leading-[33px] mt-3 font-semibold">{id == "new"? `Добавить`:"Редактировать"}</p>
        <Tabs className={`inline-block`} defaultActiveKey={'uz'} items={items} onChange={(key:string)=> {
          console.log(key)
        }} />
      </div>
      {isLoading?"": <FormContainer
        url={"maps"}
        isFormData={false}
        setLoader={setLoader}
        fields={[
          {
            name: "name",
            validationType:"string",
            validations: [{ type: "required" }],
            value:data?.data?.name ||params.get('name')  || '',
          },
          {
            name: "color",
            validationType:"string",
            validations: [{ type: "required" }],
            value:data?.data?.color || '',
          }
        ]}
        onSuccess={() => {
            navigate("/maps");
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
                    value={formik.values.name}
                    label={"name"}
                    name={`name`}
                    id={"name"}
                    placeholder={'name'}
                    className={"mb-4 colm1"}
                    errors={formik.errors.name}
                    required={true}
                  />
                   <p className="text-[14px] leading-[24px] mb-[6px]">color</p>
                   <ColorPicker
                    className="w-full justify-start px-2 py-3"
                    defaultValue="#000"
                    onChange={(e:any)=> formik.setFieldValue(`color`, e.toHexString())}
                    showText={(color:any) => <span>Custom Text ({color.toHexString()})</span>}
                  />
                </div>
              </div>
            </div>
            <SubmitBtn loader={loader} />
            </>
          );
        }}
      </FormContainer>}
    </>
  );
}
