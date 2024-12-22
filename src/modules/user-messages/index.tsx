import { useState } from "react";
import GlobalTitle from "../../components/global-table";
import TopBar from "../../components/top-bar";


export default function IndexPage() {
  const [search ,setSearch] = useState<string>('')
  const columns = [
    {
      title: 'nama',
      dataIndex: 'user.firsName',
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
    {
    title: 'text',
    dataIndex: 'text',
  },

  
  ]
  return (
    <div>
      <TopBar title="Сообщение" setSearch={setSearch} search={search} url='user-messages' />
      <div className="p-4">
        <GlobalTitle isAction={false} api='user-messages' url='user-messages' columns={columns} filter={{email:search||undefined,relations:['user']}}/>
      </div>
    </div>
  )
}
