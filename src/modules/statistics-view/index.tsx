import { useState } from "react";
import GlobalTitle from "../../components/global-table";
import { Tabs } from "antd";
import { useTranslation } from "react-i18next";


export default function IndexPage() {
  const [ type ,setType] = useState('books')
  const {t} = useTranslation()
  const columns :any = {
    books:[
      {
        title: '№',
        dataIndex: 'id',
        width: 20,
        },
        {
        title: t('name'),
        dataIndex: 'name',
      },
      {
        title: t('section'),
        dataIndex: 'section',
        render: (text:any) => <p>{t(text)}</p>,
      },
      {
        title: t('count_read'),
        dataIndex: 'readers',
      },
      {
        title: t('count_views'),
        dataIndex: 'views',
      },
      
      {
        title: t('count_downloads'),
        dataIndex: 'downloads',
      },
      {
        title: t('price'),
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
        title: t('title'),
        dataIndex: 'title',
      },
      {
        title: t('section'),
        dataIndex: 'section',
        render: (text:any) => <p>{t(text)}</p>,
      },
      {
        title: t('count_read'),
        dataIndex: 'readers',
      },
      {
        title: t('count_views'),
        dataIndex: 'views',
      },
      
      {
        title: t('count_downloads'),
        dataIndex: 'downloads',
      },
    
      {
        title: t('file'),
        dataIndex: 'file',
        render: (file:any) => <p>{file?.type}</p>,
      },
      {
        title: t('link'),
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
          title: t('image'),
          dataIndex: 'image',
          width: 100,
          render: (url:any) => <img src={import.meta.env.VITE_API_BACKEND_URL+ url?.path} alt="img" className="rounded-lg  w-[56px] aspect-square object-cover" width={56} height={56}/>,
          },
          {
            title: t('title'),
            dataIndex: 'title',
          },
          {
            title: t('section'),
            dataIndex: t('section'),
            render: (text:any) => <p>{t(text)}</p>,
          },
        
          
          {
            title:t('status'),
            dataIndex: 'isActive',
            render: (text:boolean) => <p className={text ? 'text-[#0FB800]':'text-[#FB533D]'}>{text ? 'Активный':'Неактивный'}</p>,
          },
   
          {
            title: t('count_views'),
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
          title: t('image'),
          dataIndex: 'poster',
          width: 100,
          render: (url:any) => <img src={import.meta.env.VITE_API_BACKEND_URL+ url?.path} alt="img" className="rounded-lg  w-[56px] aspect-square object-cover" width={56} height={56}/>,
          },
        {
        title: t('name'),
        dataIndex: 'name',
        },
        {
        title: t('section'),
        dataIndex: t('section'),
        render: (text:any) => <p>{t(text)}</p>,
      },
   
      {
        title: t('count_views'),
        dataIndex: 'views',
      },
     
    ]
  }

  
const items: any = [
  {
    key: 'books',
    label: t('books'),
   
  },
  {
    key: 'articles',
    label: t('articles'),
  },
  {
    key: 'videos',
    label: t('videos'),
  },
  {
    key: 'news',
    label: t('news'),
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
