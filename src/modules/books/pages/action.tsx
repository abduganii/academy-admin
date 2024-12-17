/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormContainer } from "../../../components/Forms";
import TopBar from "../../../components/top-bar";
import GlobalInput from "../../../components/global-input";
import SubmitBtn from "../../../components/submit-btn";
import FileUpload from "../../../components/upload";
import { DataFiels } from "./fiels";
import { GetAllData, GetByIdData } from "../../../service/global";
import { useQuery } from "react-query";

export default function CreatePage() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
    const { id } = useParams();
  
    const { data } = useQuery(["oneBooks",id], () =>
      GetByIdData("books",id),
    {
      enabled: id != "new"
    }
    );
   const { isLoading:landLoading, data: staticLang} = useQuery('static-lang',() =>GetAllData('static-data/Languages'));
   const { isLoading:sectionsLoading, data: staticSections} = useQuery('static-sections',() =>GetAllData('static-data/Sections'));
   const { isLoading:authorsLoading, data: authors} = useQuery('authors',() =>GetAllData('authors'));
   const { isLoading:tagsLoading, data: tags} = useQuery('tags',() =>GetAllData('tags'));
   const { isLoading:translatorsLoading, data: translators} = useQuery('translators',() =>GetAllData('translators'));
   const { isLoading:publishersLoading, data: publishers} = useQuery('publishers',() =>GetAllData('publishers'));
   
  return (
    <>
      <TopBar title={id == "new"? `Добавить`:"Редактировать"}  />
      <FormContainer
        url={"books"}
        isFormData={false}
        setLoader={setLoader}
        fields={DataFiels(data?.data)}
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
      >
        {(formik) => {
        
          return (
            <>
             <div className="p-4">
              <div className="w-full p-[24px] min-h-[500px]  bg-white rounded-lg">
                <div className="w-full max-w-[504px]">
                  <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.name}
                    label={"name"}
                    name={`name`}
                    id={"name"}
                    placeholder={'name'}
                    className={"mb-4 colm2"}
                    errors={formik.errors.name}
                    required={true}
                  />
                   <FileUpload
                    className={"mb-4"}
                      label="Обложка"
                      text="Загрузить"
                      onUpload={(e: any)=>{
                        formik.setFieldValue(`image`, e?.data?.id);
                      }}
                    />
                  <GlobalInput
                    type="select"
                    formik={formik}
                    loading={landLoading}
                    options={staticLang?.data}
                    fieldNames={{value: 'id', label: 'name'}}
                    value={formik.values.lang || null}
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
                      loading={translatorsLoading}
                      options={translators?.data}
                      fieldNames={{value: 'id', label: 'name'}}
                      value={formik.values.translator || null}
                      label={"translator"}
                      name={`translator`}
                      typeValue=""
                      id={"translator"}
                      placeholder={'translator'}
                      className={"mb-4"}
                      errors={formik.errors.translator}
                      localChange={(e:any)=>{
                        formik.setFieldValue(`translator`, e);
                      }}
                  />
                   <GlobalInput
                    type="datePicker"
                    formik={formik}
                    value={formik.values.published_at}
                    label={"published_at"}
                    name={`published_at`}
                    id={"published_at"}
                    placeholder={'published_at'}
                    className={"mb-4 colm2"}
                    localChange={(e:any)=>{
                      console.log(e)
                      formik.setFieldValue(`published_at`, e);
                    }}
                    errors={(formik.errors as any).published_at}
                  />
                   <GlobalInput
                      type="select"
                      formik={formik}
                      loading={authorsLoading}
                      options={authors?.data}
                      fieldNames={{value: 'id', label: 'name'}}
                      value={formik.values.author || null}
                      label={"author"}
                      name={`author`}
                      typeValue=""
                      id={"author"}
                      placeholder={'author'}
                      className={"mb-4"}
                      errors={formik.errors.author}
                      localChange={(e:any)=>{
                        formik.setFieldValue(`author`, e);
                      }}
                  />
                     <GlobalInput
                      type="select"
                      formik={formik}
                      loading={publishersLoading}
                      options={publishers?.data}
                      fieldNames={{value: 'id', label: 'name'}}
                      value={formik.values.publisher || null}
                      label={"publisher"}
                      name={`publisher`}
                      typeValue=""
                      id={"publisher"}
                      placeholder={'publisher'}
                      className={"mb-4"}
                      errors={formik.errors.publisher}
                      localChange={(e:any)=>{
                        formik.setFieldValue(`publisher`, e);
                      }}
                  />
                  
                   <GlobalInput
                    type="number"
                    formik={formik}
                    value={formik.values.pageCount}
                    label={"pageCount"}
                    name={`pageCount`}
                    id={"pageCount"}
                    typeValue='number'
                    placeholder={'pageCount'}
                    className={"mb-4 colm2"}
                    errors={formik.errors.pageCount}
                  />
                   <GlobalInput
                    type="textArea"
                    formik={formik}
                    value={formik.values.annotation}
                    label={"annotation"}
                    name={`annotation`}
                    id={"annotation"}
                    placeholder={'annotation'}
                    className={"mb-4 colm2"}
                    errors={formik.errors.annotation}
                  />
                   <GlobalInput
                      type="select"
                      formik={formik}
                      loading={tagsLoading}
                      fieldNames={{value: 'id', label: 'name'}}
                      options={tags?.data}
                      value={formik.values.tags || null}
                      label={"tags"}
                      name={`tags`}
                      typeValue="multiple"
                      id={"tags"}
                      placeholder={'tags'}
                      className={"mb-4"}
                      errors={formik.errors.tags}
                      localChange={(e:any)=>{
                        formik.setFieldValue(`tags`, e);
                      }}/>
                            <GlobalInput
                      type="select"
                      formik={formik}
                      loading={sectionsLoading}
                      options={staticSections?.data}
                      fieldNames={{value: 'id', label: 'name'}}
                      value={formik.values.section || null}
                      label={"section"}
                      name={`section`}
                      typeValue=""
                      id={"section"}
                      placeholder={'section'}
                      className={"mb-4"}
                      errors={formik.errors.section}
                      localChange={(e:any)=>{
                        formik.setFieldValue(`section`, e);
                      }}
                  />
                    <GlobalInput
                      type="select"
                      formik={formik}
                      options={[{ value: false, label: 'free' },
                        { value: true, label: 'unfreee' },
                       ]}
                      value={formik.values.isPaid || null}
                      label={"isPaid"}
                      name={`isPaid`}
                      typeValue=""
                      id={"isPaid"}
                      placeholder={'isPaid'}
                      className={"mb-4"}
                      errors={formik.errors.isPaid}
                      localChange={(e:any)=>{
                        formik.setFieldValue(`isPaid`, e);
                    }}/>
                    <GlobalInput
                      type="number"
                      formik={formik}
                      value={formik.values.price}
                      label={"price"}
                      name={`price`}
                      id={"price"}
                        typeValue='number'
                      placeholder={'price'}
                      className={"mb-4 colm2"}
                      errors={formik.errors.price}
                    />
                      <FileUpload
                    className={"mb-4"}
                      label="Загрузить файл"
                      text="Загрузить"
                      onUpload={(e: any)=>{
                        formik.setFieldValue(`file`, e?.data?.id);
                      }}
                    />
                </div>
              </div>
            </div>
            <SubmitBtn loader={loader} />
            </>
          );
        }}
      </FormContainer>
      {/* {isLoading && <Loader />} */}
    </>
  );
}
