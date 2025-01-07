import { useState } from "react";
import GlobalTitle from "../../components/global-table";
import { Tabs } from "antd";
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
      title: 'пользователи',
      dataIndex: 'user',
      render: (user:any) =><p>{user?.firstName} { user?.lastName}</p>
    },
    {
      title: 'role',
      dataIndex: 'user',
      render: (user:any) =><>{user?.roles?.map((e:any,i:any)=><span key={i}>{e} </span>)}</>
    },
    {
      title: 'ip',
      dataIndex: 'ip',
    },
    {
      title: 'action',
      dataIndex: 'action',
    },
    {
      title: 'date',
      dataIndex: 'created_at',
      render: (text:any) => <p>{text.slice(0,10)}</p>,
    },
  ]

  return (
    <div>
    <TopBar title="Журнал-logo"  setSearch={setSearch} search={search}/>
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
