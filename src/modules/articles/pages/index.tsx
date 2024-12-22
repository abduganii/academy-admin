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
    title: 'annotation',
    dataIndex: 'annotation',
  },
  {
    title: 'author',
    dataIndex: 'author.name',
  }
  ]
  return (
    <div>
      <TopBar title="Статьи" setSearch={setSearch} search={search} url='articles' />
      <div className="p-4">
        <GlobalTitle api='articles' url='articles' columns={columns} filter={{title:search||undefined,relations:['author']}} />
      </div>
    </div>
  )
}
