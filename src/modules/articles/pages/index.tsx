import { useState } from "react";
import GlobalTitle from "../../../components/global-table";
import TopBar from "../../../components/top-bar";


export default function IndexPage() {
  const [search ,setSearch] = useState<string>('')
  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      width: 20,
      },
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
    dataIndex: 'author',
    render: (author:any) => <p>{author?.name}</p>,
    
  },
  {
    title: 'Дата первого прочтения',
    dataIndex: 'created_at',
    render: (text:any) => <p>{text.slice(0,10)}</p>,
  },
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
