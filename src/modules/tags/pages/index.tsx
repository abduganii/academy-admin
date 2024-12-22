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
      title: 'Title',
      dataIndex: 'name',
    }
    ] 
    const { data, isLoading:madalLoading } = useQuery(["onetags",openId,language], () =>
      GetByIdData("tags",openId),
    {
      enabled: openId != false && openId != 'new'
    }
    );
    
  return (
    <div>
      <TopBar openMadal={()=>setOpenId('new')} title="Теги" setSearch={setSearch} search={search} url='tags' />
      <div className="p-4">
        <GlobalTitle openMadal={(e:number | string)=>setOpenId(e)} api='tags' url='tags' columns={columns} filter={{name:search||undefined}}/>
      </div>
   
      <Modal
        footer={null}
        className='w-full min-h-[400px] max-w-[483px]'
        loading={openId == "new" ? false: madalLoading}
        title={openId == "new" ? 'Добавить тег':'Редактировать тег'}
         open={Boolean(openId)} 
         onCancel={()=>setOpenId(false)}
         >
        <FormContainer
        url={"tags"}
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
          queryClient.invalidateQueries(["tags"]);
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
                    label={"Название тега"}
                    name={`name`}
                    id={"name"}
                    placeholder={'Название тега'}
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
