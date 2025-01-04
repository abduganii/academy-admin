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
      title: 'Image',
      dataIndex: 'poster',
      width: 100,
      render: (url:any) => <img src={import.meta.env.VITE_API_BACKEND_URL+ url?.path} alt="img" className="rounded-lg  w-[56px] aspect-square object-cover" width={56} height={56}/>,
      },
    {
    title: 'Name',
    dataIndex: 'name',
    },
    {
    title: 'section',
    dataIndex: 'section',
  },
  {
    title: 'country',
    dataIndex: 'country',
  },
  {
    title: 'releasedYear',
    dataIndex: 'releasedYear',
  },
  {
    title: 'Дата',
    dataIndex: 'created_at',
    render: (text:any) => <p>{text.slice(0,10)}</p>,
  },
  ]
  return (
    <div>
      <TopBar title="Видеоматериалы" setSearch={setSearch} search={search} url='videos' />
      <div className="p-4">
        <GlobalTitle api='videos' url='videos' columns={columns} filter={{name:search||undefined,relations:['poster']}}/>
      </div>
    </div>
  )
}
