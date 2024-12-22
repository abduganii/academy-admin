import { useState } from "react";
import GlobalTitle from "../../../components/global-table";
import TopBar from "../../../components/top-bar";


export default function IndexPage() {
  const [search ,setSearch] = useState<string>('')
  const columns = [
    {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Annotation',
    dataIndex: 'annotation',
  },
  {
    title: 'price',
    dataIndex: 'price',
  }
  ]
  return (
    <div>
      <TopBar title="Книги" setSearch={setSearch} search={search} url='books' />
      <div className="p-4">
        <GlobalTitle api='books' url='books' columns={columns} filter={{name:search||undefined}}/>
      </div>
    </div>
  )
}
