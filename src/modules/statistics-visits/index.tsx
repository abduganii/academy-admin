import { useState } from "react";
import GlobalTitle from "../../components/global-table";
import TopBar from "../../components/top-bar";
import { useTranslation } from "react-i18next";


export default function IndexPage() {
  const [search ,setSearch] = useState<string>('')
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
  },
  {
    title: t('liveTime'),
    dataIndex: 'liveTime',
  },

  
  ]
  return (
    <div>
      <TopBar title="daily"  setSearch={setSearch} search={search}/>
    
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
