import { useState } from "react";
import GlobalTitle from "../../../components/global-table";
import TopBar from "../../../components/top-bar";
import { useSearchParams } from "react-router-dom";


export default function IndexPage() {
  const [search ,setSearch] = useState<string>('')
  const [params] = useSearchParams()
  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      width: 20,
      
      },
    {
    title: 'title',
    dataIndex: 'title',
    },
    {
      title: 'text',
      dataIndex: 'text',
      },
   
      {
        title: 'link',
        dataIndex: 'link',
        },
       
  ]
  const virtualColumns = [
    {
      title: '№',
      dataIndex: 'id',
      width: 20,
      
      },
      {
      title: 'Image',
      dataIndex: 'image',
      width: 100,
      render: (url:any) => <img src={import.meta.env.VITE_API_BACKEND_URL+ url?.path} alt="img" className="rounded-lg  w-[56px] aspect-square object-cover" width={56} height={56}/>,
      },
    {
      title: 'text',
      dataIndex: 'text',
      },
   
       
  ]
  
  return (
    <div>
      <TopBar title="Книги" setSearch={setSearch} search={search} url='courses'  params={`?type=${params.get('type')}`} />
      <div className="p-4">
        <GlobalTitle api='courses' url={`courses`} params={`?type=${params.get('type')}`} columns={params.get('type') == "virtual"? virtualColumns: columns} filter={{title:search||undefined,type:params.get('type'),relations:['image']}}/>
      </div>
    </div>
  )
}
