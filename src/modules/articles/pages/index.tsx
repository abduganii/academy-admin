import { useState } from "react";
import GlobalTitle from "../../../components/global-table";
import TopBar from "../../../components/top-bar";
import { useTranslation } from "react-i18next";


export default function IndexPage() {
  const [search ,setSearch] = useState<string>('')
  const {t} = useTranslation()
  const columns = [
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
    title: t('annotation'),
    dataIndex: 'annotation',
  },
  {
    title: t('author'),
    dataIndex: 'author',
    render: (author:any) => <p>{author?.name}</p>,
    
  },
  {
    title: t('created_at'),
    dataIndex: 'created_at',
    render: (text:any) => <p>{text.slice(0,10)}</p>,
  },
  ]
  return (
    <div>
      <TopBar title="articles" setSearch={setSearch} search={search} url='articles' />
      <div className="p-4">
        <GlobalTitle api='articles' url='articles' columns={columns} filter={{title:search||undefined,relations:['author']}} />
      </div>
    </div>
  )
}
