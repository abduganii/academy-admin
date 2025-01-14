import { useState } from "react";
import GlobalTitle from "../../components/global-table";
import TopBar from "../../components/top-bar";
import { useTranslation } from "react-i18next";


export default function IndexPage() {
  const {t} = useTranslation()
  const [search ,setSearch] = useState<string>('')
  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      width: 20,
    },
    {
      title: t('users'),
      dataIndex: 'user',
      render: (user:any) =><p>{user?.firstName} { user?.lastName}</p>
    },
    {
      title: t('role'),
      dataIndex: 'user',
      render: (user:any) =><>{user?.roles?.map((e:any,i:any)=><span key={i}>{e} </span>)}</>
    },
    {
      title: t('ip'),
      dataIndex: 'ip',
    },
    {
      title: t('action'),
      dataIndex: 'action',
    },
    {
      title: t('created_at'),
      dataIndex: 'created_at',
      render: (text:any) => <p>{text.slice(0,10)}</p>,
    },
  ]

  return (
    <div>
    <TopBar title={'magazine-logo'}  setSearch={setSearch} search={search}/>
      <div className="p-4">
        <GlobalTitle 
          api={'watchers/action_history'}
          isAction={false} 
          url='action_history' 
          columns={columns || []} 
          filter={{name:search||undefined,relations:['user'],}}
        />
      </div>
    </div>
  )
}
