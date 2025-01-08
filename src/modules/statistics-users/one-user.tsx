import GlobalTitle from "../../components/global-table";
import {  useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Tabs } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";


export default function IndexOnePage() {
  const param = useParams()
  const [params] = useSearchParams()
  const [ type ,setType] = useState('book')
  const navigate = useNavigate()
  const {t} = useTranslation()
  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      width: 20,
      },
    {
      title: t('name'),
      render: (text:any) => <p>{text?.book?.name||text?.article?.title   ||text?.video?.name}</p>,
    },
    {
      title:  t('created_at'),
      dataIndex: 'created_at',
      render: (text:string) => <p>{text.slice(0,10)}</p>,
    },
    {
      title:   t('total_duration'),
      dataIndex: 'total_duration',
      render: (text:number | string) => <p>{Number(text) / 3600 } часов</p>,
      
    },
    {
      title: t('total_views'),
      dataIndex: 'total_views',
    },
 ]


const items: any = [
  {
    key: 'book',
    label: t('book'),
   
  },
  {
    key: 'article',
    label: t('article'),
  },
  {
    key: 'video',
    label: t('video'),
  },

];
  return (
    <div>
       <div className="flex  gap-[20px] items-start p-4 w-full bg-white">
        <p className="text-[28px] leading-[33px] font-semibold mt-2">{params.get("userName")}</p>
        <Tabs className={`inline-block`}  defaultActiveKey={type} items={items} onChange={(key:string)=> {
          setType(key)
      }} />
    </div>
      {/* <div className='m-4 rounded-md bg-white p-4'>
      
      </div> */}
      <div className="p-4">
        <GlobalTitle 
            handleRowClick={(e:any)=>navigate(`/statistics-users/${param?.id}/${e?.[type]?.id}?userName=${params.get("userName")}&itemsName=${type == "book"? e?.book?.name : e?.article?.title}&type=${type}`)}
            api={`stats/user/${param.id}`} 
            isAction={false}
            url='statistics-users' 
            columns={columns}
            filter={{type:type}}
          />
      </div>
    </div>
  )
}
