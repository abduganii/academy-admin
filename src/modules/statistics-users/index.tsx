import { useState } from "react";
import GlobalTitle from "../../components/global-table";
import TopBar from "../../components/top-bar";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function IndexPage() {
  const [search ,setSearch] = useState<string>('')
  const navigate = useNavigate()
  const {t} = useTranslation()
  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      width: 20,
      },
    {
    title: t('firstName'),
    dataIndex: 'firstName',
  },

  {
    title: t('created_at'),
    dataIndex: 'created_at',
    render: (text:any) => <p>{text.slice(0,10)}</p>,
  },
  {
    title: t('liveTime'),
    dataIndex: 'liveTime',
    render: (time:any) => <p>{time / 3600} часов </p>,
  },

  
  ]
  return (
    <div>
      <TopBar title="users"  setSearch={setSearch} search={search}/>
      {/* <div className='m-4 rounded-md bg-white p-4'>
      
      </div> */}
      <div className="p-4">
        <GlobalTitle 
        handleRowClick={(e:any)=>navigate(`/statistics-users/${e?.id}?userName=${`${e?.firstName} ${e?.lastName}`}`)}
        api='users'
        isAction={false} 
        url='statistics-users' 
        columns={columns} 
        filter={{name:search||undefined}}
        />
      </div>
    </div>
  )
}
