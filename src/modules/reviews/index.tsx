import GlobalTitle from "../../components/global-table";
import {  useNavigate } from "react-router-dom";
import { Rate, Tabs } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";


export default function Page() {
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
      title: 'Image',
      width: 100,
      render: (value:any) => 
      <img 
        src={type == "book"?
           import.meta.env.VITE_API_BACKEND_URL + value?.image?.path
           :
           import.meta.env.VITE_API_BACKEND_URL + value?.poster?.path 
          } 
        alt="img" 
        className="rounded-lg  w-[56px] aspect-square object-cover" 
        width={56}
        height={56}
      />,
      },
    {
    title: t('name'),
    dataIndex: 'name',
    
    },
    {
      title: t('rating'),
      dataIndex: 'rating',
      render: (rating:number) => <Rate value={rating}/>,
    }
 ]


const items: any = [
  {
    key: 'book',
    label: 'book',
   
  },
 
  {
    key: 'video',
    label: 'video',
  },

];
  return (
    <div>
       <div className="flex  gap-[20px] items-start p-4 w-full bg-white">
        <p className="text-[28px] leading-[33px] font-semibold mt-2">{'Отзывы'}</p>
        <Tabs className={`inline-block`}  defaultActiveKey={type} items={items} onChange={(key:string)=> {
          setType(key)
      }} />
      
    </div>
     
      <div className="p-4">
      <GlobalTitle 
            handleRowClick={(e:any)=>navigate(`/reviews/${e?.id}?type=${type}&name=${e?.name}`)}
            api={type == 'book'? `books`:'videos'} 
            isAction={false}
            url='reviews' 
            columns={columns}
            filter={{type:type,relations:[type== "book"? 'image':'poster']}}
          />
      </div>
    </div>
  )
}
