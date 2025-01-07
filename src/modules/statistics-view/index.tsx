import { useState } from "react";
import GlobalTitle from "../../components/global-table";
import { Tabs } from "antd";


export default function IndexPage() {
  const [ type ,setType] = useState('books')
  const columns :any = {
    books:[
      {
        title: '№',
        dataIndex: 'id',
        width: 20,
        },
        {
        title: 'name',
        dataIndex: 'name',
      },
      {
        title: 'section',
        dataIndex: 'section',
      },
      {
        title: 'Кол-во читателей (уникальное)',
        dataIndex: 'readers',
      },
      {
        title: 'Кол-во просмотров (каждое)',
        dataIndex: 'views',
      },
      
      {
        title: 'Кол-во скачиваний',
        dataIndex: 'downloads',
      },
      {
        title: 'price',
        dataIndex: 'price',
        render: (value:any) => <p>{value} сум</p>
      },
    ],
    articles:[
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
        title: 'section',
        dataIndex: 'section',
      },
      {
        title: 'Кол-во читателей (уникальное)',
        dataIndex: 'readers',
      },
      {
        title: 'Кол-во просмотров (каждое)',
        dataIndex: 'views',
      },
      
      {
        title: 'Кол-во скачиваний',
        dataIndex: 'downloads',
      },
    
      {
        title: 'file',
        dataIndex: 'file',
        render: (file:any) => <p>{file?.type}</p>,
      },
      {
        title: 'link',
        dataIndex: 'link',
      },
    ],
    news:[
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
            title: 'Title',
            dataIndex: 'title',
          },
          {
            title: 'section',
            dataIndex: 'section',
          },
        
          
          {
            title: 'Статус',
            dataIndex: 'isActive',
            render: (text:boolean) => <p className={text ? 'text-[#0FB800]':'text-[#FB533D]'}>{text ? 'Активный':'Неактивный'}</p>,
          },
   
      {
        title: 'Кол-во просмотров (каждое)',
        dataIndex: 'views',
      },
    ],
    videos:[
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
        title: 'Кол-во просмотров (каждое)',
        dataIndex: 'views',
      },
    ]
  }

  
const items: any = [
  {
    key: 'books',
    label: 'books',
   
  },
  {
    key: 'articles',
    label: 'articles',
  },
  {
    key: 'videos',
    label: 'videos',
  },
  {
    key: 'news',
    label: 'news',
  },
];
  return (
    <div>
     <div className="flex  gap-[20px] items-start p-4 w-full bg-white">
        <p className="text-[28px] leading-[33px] font-semibold mt-2">{'Просмотр'}</p>
        <Tabs className={`inline-block`}  defaultActiveKey={type} items={items} onChange={(key:string)=> {
          setType(key)
      }} />
      
    </div >
      <div className="p-4">
        <GlobalTitle 
          api={type}
          isAction={false} 
          url='statistics-users' 
          columns={columns?.[type] || []} 
          filter={{ relations:[type== "articles"? 'file': type== "vidoe"?['poster']:type== 'news'?['image']:undefined ]}}
        />
      </div>
    </div>
  )
}
