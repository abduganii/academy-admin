import GlobalTitle from "../../components/global-table";
import {  useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Tabs } from "antd";
import { useState } from "react";


export default function IndexOnePage() {
  const param = useParams()
  const [params] = useSearchParams()
  const [ type ,setType] = useState('book')
  const navigate = useNavigate()
  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      width: 20,
      },
    {
      title: 'Название',
      render: (text:any) => <p>{text?.book?.name||text?.article?.title}</p>,
    },
    {
      title: 'Дата первого прочтения',
      dataIndex: 'created_at',
      render: (text:any) => <p>{text.slice(0,10)}</p>,
    },
    {
      title: 'Общее время прочтения',
      dataIndex: 'total_duration',
      render: (text:any) => <p>{text / 60 } часов</p>,
      
    },
    {
      title: 'Кол-во просмотров',
      dataIndex: 'total_views',
    },
 ]


const items: any = [
  {
    key: 'book',
    label: 'book',
   
  },
  {
    key: 'article',
    label: 'article',
  },
  {
    key: 'video',
    label: 'video',
  },

];
  return (
    <div>
       <div className="flex  gap-[20px] items-start p-4 w-full bg-white">
        <p className="text-[28px] leading-[33px] font-semibold mt-2">{param?.id}</p>
        <Tabs className={`inline-block`}  defaultActiveKey={type} items={items} onChange={(key:string)=> {
          setType(key)
      }} />
    </div>
      {/* <div className='m-4 rounded-md bg-white p-4'>
      
      </div> */}
      <div className="p-4">
        <GlobalTitle 
            handleRowClick={(e:any)=>navigate(`/statistics-users/${param?.id}/${type == "book"? e?.book?.name:e?.article?.title}?userId=${params.get("userId")}&itemsId=${e?.[type]?.id}&type=${type}`)}
            api={`stats/user/${params.get("userId")}`} 
            isAction={false}
            url='statistics-users' 
            columns={columns}
            filter={{type:type}}
          />
      </div>
    </div>
  )
}
