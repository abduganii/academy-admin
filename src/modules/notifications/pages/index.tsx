import { useState } from "react";
import GlobalTitle from "../../../components/global-table";
import TopBar from "../../../components/top-bar";


export default function IndexPage() {
  const [search ,setSearch] = useState<string>('')
  const columns = [
    {
    title: 'title',
    dataIndex: 'title',
  },
  {
    title: 'description',
    dataIndex: 'description',
  },

  
  ]
  return (
    <div>
      <TopBar title="Уведомления" setSearch={setSearch} search={search} url='notifications' />
      <div className="p-4">
        <GlobalTitle isUpdate={false} api='notifications' url='notifications' columns={columns} filter={{name:search||undefined}}/>
      </div>
    </div>
  )
}
