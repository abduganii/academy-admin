import { useState } from "react";
import GlobalTitle from "../../components/global-table";
import TopBar from "../../components/top-bar";
import { useTranslation } from "react-i18next";


export default function IndexPage() {
  const [search ,setSearch] = useState<string>('')
  const {t}= useTranslation()
  const columns = [
    {
      title:'№',
      dataIndex:'id',
      width:20
    },
    {
      title: t('nama'),
      dataIndex: 'user',
      render: (user:any) => <p>{user?.firstName} {user?.lastName}</p>,
    },
    {
      title: t('email'),
      dataIndex: 'email',
    },
    {
    title: t('text'),
    dataIndex: 'text',
  },

  
  ]
  return (
    <div>
      <TopBar title="messages" setSearch={setSearch} search={search}  />
      <div className="p-4">
        <GlobalTitle isAction={false} api='user-messages' url='user-messages' columns={columns} filter={{email:search||undefined,relations:['user']}}/>
      </div>
    </div>
  )
}
