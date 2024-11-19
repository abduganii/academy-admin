import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormContainer } from "../../../components/Forms";
import TopBar from "../../../components/top-bar";
import LangTab from "../../../components/lang-tab";
import GlobalInput from "../../../components/global-input";
import SubmitBtn from "../../../components/submit-btn";
import { GetByIdData } from "../../../service/global";
import { useQuery } from "react-query";
import FileUpload from "../../../components/upload";

export default function ActionPage() {
  const [loader, setLoader] = useState(false);
  const [lang, setLang] = useState('uz');
  const navigate = useNavigate();
  const { id } = useParams();

  const { data } = useQuery(["onePosts",id], () =>
    GetByIdData("posts",id),
  {
    enabled: id != "new"
  }
  );

  return (
    <>
     <TopBar title={id == "new"? `Добавить`:"Редактировать"}  />
      <FormContainer
        url={"posts"}
        isFormData={false}
        setLoader={setLoader}
        loaderGlob={loader}
        fields={[
          {
            name: "name",
            validationType:"object",
            validations: [{ type: "required" }],
            value:{
              uz:data?.title,
              ru:data?.title,
              en:data?.title
            },
            fields:[
              {
                name: "uz",
                validations: [{ type: "required" }], 
            },
              {
                  name: "ru",
                  validations: [{ type: "required" }], 
              },
              {
                name: "en",
                validations: [{ type: "required" }], 
            }
          ]
          },
          {
            name: "lang",
            validationType:"string",
            validations: [{ type: "required" }],
            value:''
            },
            {
              name: "authors",
              validationType:"array",
              validations: [{ type: "required" }],
              value:[]
              },
        ]}
        onSuccess={() => {
            navigate("/books");
        }}
        onError={(e: any) => {
          console.log(e, "onError");
        }}
        onFinal={() => {
          setLoader(false);
        }}
        validateOnMount={false}
        // customData={(value: unknown) => {
        //   const returnResult: any = JSON.parse(JSON.stringify(value));
          

        //   return returnResult;
        // }}
      >
        {(formik) => {
          console.log(formik.values)
          return (
            <>
             <div className="p-4">
              <div className="w-full p-[24px] min-h-[500px]  bg-white rounded-lg">
                <div className="w-full max-w-[504px]">
                  <LangTab setLang={setLang} lang={lang}/> 
                  <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.name?.[lang]}
                    label={"name"}
                    name={`name.${lang}`}
                    id={"name"}
                    placeholder={'name'}
                    className={"mb-4 colm2"}
                    errors={(formik.errors as any).name?.[lang]}
                  />
                  <GlobalInput
                    type="select"
                    formik={formik}
                    options={[{ value: 'jack', label: 'Jack' },
                      { value: 'lucy', label: 'Lucy' },
                      { value: 'Yiminghe', label: 'yiminghe' },]}
                    value={formik.values.lang}
                    label={"lang"}
                    name={`lang`}
                    id={"lang"}
                    typeValue=""
                    placeholder={'lang'}
                    className={"mb-4 colm2"}
                    errors={formik.errors.lang}
                    localChange={(e:any)=>{
                      formik.setFieldValue(`lang`, e);
                    }}
                    
                  />
                    <GlobalInput
                    type="select"
                    formik={formik}
                    options={[{ value: 'jack', label: 'Jack' },
                      { value: 'lucy', label: 'Lucy' },
                      { value: 'Yiminghe', label: 'yiminghe' },]}
                    value={formik.values.authors || []}
                    label={"authors"}
                    name={`authors`}
                    typeValue="multiple"
                    id={"authors"}
                    placeholder={'authors'}
                    className={"mb-4"}
                    errors={formik.errors.authors}
                    localChange={(e:any)=>{
                      formik.setFieldValue(`authors`, e);
                    }}
                  />
                  
                  <FileUpload
                    className={"mb-4"}
                      label="Обложка"
                      text="Загрузить"
                      onUpload={(e: any)=>console.log(e)}
                    />
                </div>
              </div>
            </div>
            <SubmitBtn/>
            </>
          );
        }}
      </FormContainer>
      {/* {isLoading && <Loader />} */}
    </>
  );
}
