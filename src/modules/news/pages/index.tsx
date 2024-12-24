import { useState } from "react";
import GlobalTitle from "../../../components/global-table";
import TopBar from "../../../components/top-bar";


export default function IndexPage() {
  const [search ,setSearch] = useState<string>('')
  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      innerWidth:"30px"
      },
    {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'section',
    dataIndex: 'section',
  },
  {
    title: 'publishStartTime',
    dataIndex: 'publishStartTime',
    render: (text:any) => <p>{text.slice(0,16)}</p>,
  },
  
  {
    title: 'Статус',
    dataIndex: 'isActive',
    render: (text:boolean) => <p className={text ? 'text-[#0FB800]':'text-[#FB533D]'}>{text ? 'Активный':'Неактивный'}</p>,
  },
  ]
  return (
    <div>
      <TopBar title="Новости"  setSearch={setSearch} search={search} url='news' />
      <div className="p-4">
        <GlobalTitle api='news' url='news' columns={columns} filter={{title:search||undefined}}/>
      </div>
    </div>
  )
}
