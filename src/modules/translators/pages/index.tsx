/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import GlobalTitle from "../../../components/global-table";
import TopBar from "../../../components/top-bar";
import LangTab from "../../../components/lang-tab";
import GlobalInput from "../../../components/global-input";
import { FormContainer } from "../../../components/Forms";
import { Button, Modal } from "antd";
import { useQuery, useQueryClient } from "react-query";
import { GetByIdData } from "../../../service/global";
import { useSelector } from "react-redux";

export default function IndexPage() {
  const [search ,setSearch] = useState<string>('')
  const [openId,setOpenId] = useState<boolean | string | number>(false)
  const language = useSelector((state:any) => state.lang?.lang);
  const [loader, setLoader] = useState<boolean>(false);
   const queryClient = useQueryClient();
  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      width: 20,
      },
    {
      title: 'Title',
      dataIndex: 'name',
    }
    ] 
    const { data, isLoading:madalLoading } = useQuery(["oneAuthor",openId,language], () =>
      GetByIdData("translators",openId),
    {
      enabled: openId != false && openId != 'new'
    }
    );
    
  return (
    <div>
      <TopBar openMadal={()=>setOpenId('new')} title="Переводчики" setSearch={setSearch} search={search} url='translators' />
      <div className="p-4">
        <GlobalTitle openMadal={(e:number | string)=>setOpenId(e)} api='translators' url='translators' columns={columns} filter={{name:search||undefined}}/>
      </div>
   
      <Modal
        footer={null}
        className='w-full min-h-[400px] max-w-[483px]'
        loading={openId == "new" ? false: madalLoading}
        title={openId == "new" ? 'Добавить Переводчик':'Редактировать Переводчик'}
         open={Boolean(openId)} 
         onCancel={()=>setOpenId(false)}
         >
        <FormContainer
        url={"translators"}
        isFormData={false}
        setLoader={setLoader}
        madalId={openId}
        fields={[
          {
            name: "name",
            validationType:"string",
            validations: [{ type: "required" }],
            value:data?.data?.name,
          },
        ]}
        onSuccess={() => {
          setOpenId(false);
        }}
        onError={(e: any) => {
          console.log(e, "onError");
        }}
        onFinal={() => {
          queryClient.invalidateQueries(["translators"]);
          setLoader(false);
        }}
        validateOnMount={false}
      >
        {(formik) => {
          return (
            <>
             <div className="p-4">
                  {openId == "new" ? '' : <LangTab /> }
                  <GlobalInput
                    type="text"
                    formik={formik}
                    value={formik.values.name}
                    label={"Имя автора"}
                    name={`name`}
                    id={"name"}
                    placeholder={'Имя автора'}
                    className={"mb-4 colm1"}
                    errors={formik.errors.name}
                  />
              </div>
              <Button loading={loader} className='w-full' type="primary" size="large" htmlType="submit" >Сохранить</Button>
            </>
          );
        }}
      </FormContainer>
      </Modal>
    </div>
  )
}
