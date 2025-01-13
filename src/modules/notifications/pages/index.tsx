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
    render: (text:any) => <p className="line-clamp-2">{text}</p>,
  },
  {
    title: t('description'),
    dataIndex: 'description',
    render: (text:any) => <p className="line-clamp-2">{text}</p>,
  },

  
  ]
  return (
    <div>
      <TopBar title="notification" setSearch={setSearch} search={search} url='notifications' />
      <div className="p-4">
        <GlobalTitle isUpdate={false} api='notifications' url='notifications' columns={columns} filter={{name:search||undefined}}/>
      </div>
    </div>
  )
}
