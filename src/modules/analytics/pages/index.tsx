import { useState } from "react";
import GlobalTitle from "../../../components/global-table";
import TopBar from "../../../components/top-bar";


export default function IndexPage() {
  const [search ,setSearch] = useState<string>('')
  const columns = [
    {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'description',
    dataIndex: 'description',
  },

  ]
  return (
    <div>
      <TopBar title="Добавить" setSearch={setSearch} search={search} url='analytics' />
      <div className="p-4">
        <GlobalTitle api='analytics' url='analytics' columns={columns} filter={{name:search||undefined}}/>
      </div>
    </div>
  )
}
