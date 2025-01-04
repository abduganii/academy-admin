import { useState } from "react";
import GlobalTitle from "../../components/global-table";
import TopBar from "../../components/top-bar";
import { Button, Modal, Select } from "antd";
import { useQuery, useQueryClient } from "react-query";
import { GetAllData, UpdateData1One } from "../../service/global";


export default function IndexPage() {
  const [search ,setSearch] = useState<string>('')
  const [open ,setOpen] = useState<any>(false)
  const [Status ,setStatus] = useState<any>(false)
    const { isLoading:statusLoading, data: staticStatus} = useQuery('static-Status',() =>GetAllData('static-data/Status'));
     const queryClient = useQueryClient();
  const columns = [
    {
      title:'№',
      dataIndex:'id',
      width:20
    },
    {
      title: 'nama',
      dataIndex: 'user',
      render: (user:any) => <p>{user?.firstName} {user?.lastName}</p>,
    },
    {
      title: 'type',
      dataIndex: 'type',
    },
    {
    title: 'email',
    dataIndex: 'email',
    },
    {
      title:"phone",
      dataIndex: 'user',
      render: (user:any) => <p>{user?.phone} </p>,
    },
    {
      title:"message",
      dataIndex:"message"
    },
    {
      title:"file",
      dataIndex:"file",
      render: (file:any) => <p>{(file?.size / 1048576 ).toFixed(2)}  mb</p>,
    },
    
    {
      title:"type",
      dataIndex:"file",
      render: (file:any) => <p>{file?.type}</p>,
    },
    {
      title:"status",
      dataIndex:"status",
      render: (status:any) => <p className={status == "pending" ? 'text-[#DD8819]' : status == "rejected" ? "text-[#FF1818]":"text-[#00AF38]"}>{status}</p>,
    }
  ]
  return (
    <div>
      <TopBar title="cooperations" setSearch={setSearch} search={search}  />
      <div className="p-4">
        <GlobalTitle onCooperationsChange={(e:any)=>setOpen(e)} isUpdate={false} api='cooperations' url='cooperations' columns={columns} filter={{email:search||undefined,relations:['user','file'],}}/>


        <Modal
          className='w-full max-w-[438px]'
            title={'Изменить статус'}
            open={Boolean(open)}
            footer={null}
            onCancel={() => setOpen(false)}
        >
             <Select
              className="w-full h-[48px] my-2"
              placeholder={"Статус"}
              loading={statusLoading}
              onChange={(e) => {
                setStatus(e)
              }}
              fieldNames={{value: 'id', label: 'name'}}
              options={staticStatus?.data}
            />
           < Button  className='w-full' type="primary" size="large" onClick={async()=>{
             await UpdateData1One('cooperations',open+'/' + Status)
                .then(() => {
                  setOpen(false)
                  queryClient.invalidateQueries(["cooperations"]);
                })
             }} >Сохранить</Button>
      </Modal>
      </div>
    </div>
  )
}
