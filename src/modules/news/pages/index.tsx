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
    title: 'Body',
    dataIndex: 'body',
  },
  {
    title: 'UserId',
    dataIndex: 'id',
  }
  ]
  return (
    <div>
      <TopBar title="Новости" setSearch={setSearch} search={search} url='news' />
      <div className="p-4">
        <GlobalTitle api='news' url='news' columns={columns} filter={{name:search}}/>
      </div>
    </div>
  )
}
