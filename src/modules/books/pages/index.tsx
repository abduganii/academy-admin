import { useState } from "react";
import GlobalTitle from "../../../components/global-table";
import TopBar from "../../../components/top-bar";
import { useTranslation } from "react-i18next";


export default function IndexPage() {
  const [search ,setSearch] = useState<string>('')
  const { t} = useTranslation()

  const columns = [
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
      title: t('name'),
      dataIndex: 'name',
    },
    {
      title: t('annotation'),
      dataIndex: 'annotation',
    },
    {
      title: t('price'),
      dataIndex: 'price',
      render: (price:any) => <p>{price} sum</p>,
    },
    {
      title: t('author'),
      dataIndex: 'author',
      render: (text:any) => <p>{text?.name}</p>,
    },

    {
      title: t('created_at'),
      dataIndex: 'created_at',
      render: (text:any) => <p>{text.slice(0,10)}</p>,
    },
  ]
  return (
    <div>
      <TopBar title="books" setSearch={setSearch} search={search} url='books' />
      <div className="p-4">
        <GlobalTitle api='books' url='books' columns={columns} filter={{name:search||undefined,relations:['image','author']}}/>
      </div>
    </div>
  )
}
