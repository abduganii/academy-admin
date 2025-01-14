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
      title: t('image'),
      dataIndex: 'image',
      width: 100,
      render: (url:any) => <img src={import.meta.env.VITE_API_BACKEND_URL+ url?.path} alt="img" className="rounded-lg w-[56px] aspect-square object-cover" width={56} height={56}/>,
      },
    {
    title:t('title'),
    dataIndex: 'title',
  },
  {
    title: t('description'),
    dataIndex: 'description',
  },

  ]
  return (
    <div>
      <TopBar title="add" setSearch={setSearch} search={search} url='analytics' />
      <div className="p-4">
        <GlobalTitle api='analytics' url='analytics' columns={columns} filter={{name:search||undefined,relations:['image']}}/>
      </div>
    </div>
  )
}
