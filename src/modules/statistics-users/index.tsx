import { useState } from "react";
import GlobalTitle from "../../components/global-table";
import TopBar from "../../components/top-bar";
import { useNavigate } from "react-router-dom";


export default function IndexPage() {
  const [search ,setSearch] = useState<string>('')
  const navigate = useNavigate()
  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      width: 20,
      },
    {
    title: 'firstName',
    dataIndex: 'firstName',
  },
  {
    title: 'date',
    dataIndex: 'created_at',
  },
  {
    title: 'liveTime',
    dataIndex: 'liveTime',
  },

  
  ]
  return (
    <div>
      <TopBar title="Пользователи"  setSearch={setSearch} search={search}/>
      {/* <div className='m-4 rounded-md bg-white p-4'>
      
      </div> */}
      <div className="p-4">
        <GlobalTitle 
        handleRowClick={(e:any)=>navigate(`/statistics-users/${`${e?.firstName} ${e?.lastName}`}?userId=${e?.id}`)}
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
