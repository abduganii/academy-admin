import { useState } from "react";
import GlobalTitle from "../../components/global-table";
import TopBar from "../../components/top-bar";


export default function IndexPage() {
  const [search ,setSearch] = useState<string>('')
  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      width: 20,
      },
    {
    title: 'Кол-во пользователи',
    dataIndex: 'firstName',
  },
  {
    title: 'ДАТА посещения',
    dataIndex: 'created_at',
  },
  {
    title: 'Время активности',
    dataIndex: 'liveTime',
  },

  
  ]
  return (
    <div>
      <TopBar title="Посещения"  setSearch={setSearch} search={search}/>
    
      <div className="p-4">
        <GlobalTitle 
          api='stats/daily'
          isAction={false} 
          url='statistics-users' 
          columns={columns} 
          filter={{name:search||undefined}}
        />
      </div>
    </div>
  )
}
