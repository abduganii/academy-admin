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
      innerWidth:"30px"
      },
    {
    title: t('title'),
    dataIndex: 'title',
  },
  {
    title: t('section'),
    dataIndex: 'section',
  },
  {
    title: t('publishStartTime'),
    dataIndex: 'publishStartTime',
    render: (text:any) => <p>{text?.slice(0,16)}</p>,
  },
  
  {
    title: t('status'),
    dataIndex: 'isActive',
    render: (text:boolean) => <p className={text ? 'text-[#0FB800]':'text-[#FB533D]'}>{text ? 'Активный':'Неактивный'}</p>,
  },
  ]
  return (
    <div>
      <TopBar title="news"  setSearch={setSearch} search={search} url='news' />
      <div className="p-4">
        <GlobalTitle api='news' url='news' columns={columns} filter={{title:search||undefined}}/>
      </div>
    </div>
  )
}
