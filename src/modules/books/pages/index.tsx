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
      <TopBar title="Книги" setSearch={setSearch} search={search} url='books' />
      <div className="p-4">
        <GlobalTitle api='posts' url='books' columns={columns} filter={{search:search}}/>
      </div>
    </div>
  )
}
