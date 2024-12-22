import { useState } from "react";
import GlobalTitle from "../../components/global-table";
import TopBar from "../../components/top-bar";


export default function IndexPage() {
  const [search ,setSearch] = useState<string>('')
  const columns = [
    {
      title: 'fullName',
      dataIndex: 'fullName',
      // colSpan:3
    },
    {
    title: 'theme',
    dataIndex: 'theme',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'created_at',
      dataIndex: 'created_at',
    }, {
      title: 'email',
      dataIndex: 'email',
    }, {
      title: 'status',
      dataIndex: 'read',
    },
  ]
  return (
    <div>
      <TopBar title="Сообщение" setSearch={setSearch} search={search} url='contact-us-messages' />
      <div className="p-4">
        <GlobalTitle isAction={false} api='contact-us-messages' url='contact-us-messages' columns={columns} filter={{fullName:search||undefined}}/>
      </div>
    </div>
  )
}
