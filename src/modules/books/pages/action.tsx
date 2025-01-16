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
import LangTab from "../../../components/lang-tab";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function CreatePage() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const language = useSelector((state:any) => state.lang?.lang); 
  const { id } = useParams();
  const {t} = useTranslation()
  const [filterCategory,setFilterCategory] = useState(false)
  const { data,isLoading } = useQuery(["oneBooks",id,language], () =>
    GetByIdData("books",id,{
      relations:['category.parent']
    }),
  {
    enabled: id != "new"
  }
  );
   const { isLoading:landLoading, data: staticLang} = useQuery('static-lang',() =>GetAllData('static-data/Languages'));
   const { isLoading:sectionsLoading, data: staticSections} = useQuery('static-sections',() =>GetAllData('static-data/Sections'));
   const { isLoading:authorsLoading, data: authors} = useQuery(['authors',language],() =>GetAllData('authors'));
   const { isLoading:categoryFilterLoading, data: categoryFilter,} = useQuery(['categories',language],() =>GetAllData('categories'));
   const { isLoading:categoryLoading, data: category,} = useQuery(['categories',language,filterCategory],() =>
    GetAllData('categories',{
      parentId:filterCategory
   }),
   {
    enabled: Boolean(filterCategory)
  }
);
   const { isLoading:tagsLoading, data: tags} = useQuery(['tags',language],() =>GetAllData('tags'));
   const { isLoading:translatorsLoading, data: translators} = useQuery(['translators',language],() =>GetAllData('translators'));
   const { isLoading:publishersLoading, data: publishers} = useQuery(['publishers',language],() =>GetAllData('publishers'));
   

  return (
    <>
      <TopBar title={id == "new"? t(`add`):t('update')}  />
      
      {isLoading?"": <FormContainer
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
              <div className="w-full p-[24px] min-h-[500px]  costomSroll bg-white rounded-lg" style={{"height":"75vh"}}>
               {id == "new" ? '' : <LangTab /> }
                <div className="w-full max-w-[504px] " >
                  <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.name}
                    label={t("name")}
                    name={`name`}
                    id={"name"}
                    placeholder={t('enter')}
                    className={"mb-4 colm1"}
                    errors={formik.errors.name}
                    required={true}
                  />
                   <FileUpload
                      errors={formik.errors.image}
                    acceptTypes="image/*"
                    valueName={data?.data?.image?.name || ''}
                    className={"mb-4"}
                      label={t('cover')}
                      text={t('upload')}
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
                    value={formik.values.lang }
                    label={t("lang")}
                    name={`lang`}
                    id={"lang"}
                    typeValue=""
                    placeholder={t('select')}
                    className={"mb-4 colm1"}
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
                      value={formik.values.translator }
                      label={t("translator")}
                      name={`translator`}
                      typeValue=""
                      id={"translator"}
                      placeholder={t('select')}
                      className={"mb-4"}
                      errors={formik.errors.translator}
                      localChange={(e:any)=>{
                        formik.setFieldValue(`translator`, e);
                      }}
                  />
                   <GlobalInput
                    type="datePicker"
                    formik={formik}
                    value={formik.values?.published_at}
                    label={t("published_at")}
                    name={`published_at`}
                    id={"published_at"}
                    placeholder={t('enter')}
                    className={"mb-4 colm1"}
                    localChange={(e:any)=>{
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
                      value={formik.values.author }
                      label={t("author")}
                      name={`author`}
                      typeValue=""
                      id={"author"}
                      placeholder={t("select")}
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
                      value={formik.values.publisher}
                      label={t("publisher")}
                      name={`publisher`}
                      typeValue=""
                      id={"publisher"}
                      placeholder={t('select')}
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
                    label={t("pageCount")}
                    name={`pageCount`}
                    id={"pageCount"}
                    typeValue='number'
                    placeholder={t('enter')}
                    className={"mb-4 colm1"}
                    errors={formik.errors.pageCount}
                  />
                   <GlobalInput
                    type="textArea"
                    formik={formik}
                    value={formik.values.annotation}
                    label={t(t('annotation'))}
                    name={`annotation`}
                    id={t('annotation')}
                    placeholder={t('enter')}
                    className={"mb-4 colm1"}
                    errors={formik.errors.annotation}
                  />
                   <GlobalInput
                      type="select"
                      formik={formik}
                      loading={tagsLoading}
                      fieldNames={{value: 'id', label: 'name'}}
                      options={tags?.data}
                      value={formik.values.tags }
                      label={t("tags")}
                      name={`tags`}
                      typeValue="multiple"
                      id={"tags"}
                      placeholder={t("select")}
                      className={"mb-4"}
                      errors={formik.errors.tags}
                      localChange={(e:any)=>{
                        formik.setFieldValue(`tags`, e);
                      }}/>
                            <GlobalInput
                      type="select"
                      formik={formik}
                      loading={sectionsLoading}
                      options={staticSections?.data?.map((e:any)=>{
                        return {id:e?.id,name:t(e?.name?.toLowerCase())}
                      })}
                      value={t(formik.values.section) || null}
                      fieldNames={{value: 'id', label: 'name'}}
                      label={t("section-books")}
                      name={`section`}
                      typeValue=""
                      id={"section"}
                      placeholder={t("select")}
                      className={"mb-4"}
                      errors={formik.errors.section}
                      localChange={(e:any)=>{
                        formik.setFieldValue(`section`, e);
                      }}
                  />
                   <GlobalInput
                      type="select"
                      formik={formik}
                      loading={categoryFilterLoading}
                      options={categoryFilter?.data}
                      fieldNames={{value: 'id', label: 'name'}}
                      value={filterCategory ||null}
                      label={t("categories")}
                      typeValue=""
                      id={"filtercategory"}
                      placeholder={t("select")}
                      className={"mb-4"}
                      localChange={(e:any)=>{
                        setFilterCategory(e)
                          formik.setFieldValue(`category`, null);
                      }}
                  />
                  <GlobalInput
                      type="select"
                      formik={formik}
                      loading={categoryLoading}
                      options={category?.data ?category?.data: data?.data?.category ? [data?.data?.category]:[]}
                      fieldNames={{value: 'id', label: 'name'}}
                      value={formik.values.category }
                      label={t("sub_category")}
                      name={`categories`}
                      typeValue=""
                      id={"category"}
                      placeholder={t("select")}
                      className={"mb-4"}
                      errors={formik.errors.category}
                      localChange={(e:any)=>{
                        formik.setFieldValue(`category`, e);
                      
                      }}
                  />
                  <div className="flex items-end gap-4">
                    <GlobalInput
                      type="select"
                      formik={formik}
                      options={[{ value: true, label: t('free') },
                        { value: false, label: t('unFree') },
                       ]}
                      value={formik.values.isPaid}
                      label={t("price")}
                      name={`isPaid`}
                      typeValue=""
                      id={"isPaid"}
                      placeholder={t("select")}
                      className={"mb-4"}
                      errors={formik.errors.isPaid}
                      localChange={(e:any)=>{
                        formik.setFieldValue(`isPaid`, e);
                        if(!formik.values.isPaid){
                          formik.setFieldValue(`price`, 0);
                        }
                      }}/>
                    <GlobalInput
                      type="number"
                      formik={formik}
                      disabled={formik.values.isPaid}
                      value={formik.values.price}
                      name={`price`}
                      id={"price"}
                        typeValue='number'
                      placeholder={t('enter')}
                      className={"mb-4 colm1"}
                    />
                  </div>
                      <FileUpload
                       acceptTypes=".pdf,.doc,.docx"
                    className={"mb-4"}
                      label={t('uploadFile')}
                      text={t('upload')}
                      errors={formik.errors.file}
                      valueName={data?.data?.file?.name || ''}
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
      </FormContainer>}
      {/* {isLoading && <Loader />} */}
    </>
  );
}
