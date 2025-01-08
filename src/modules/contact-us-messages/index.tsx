import { useState } from "react";
import GlobalTitle from "../../components/global-table";
import TopBar from "../../components/top-bar";
import { useTranslation } from "react-i18next";


export default function IndexPage() {
  const [search ,setSearch] = useState<string>('')
  const {t} = useTranslation()
  const columns = [
    {
      title:'№',
      dataIndex:'id',
      width:20
    },
    {
      title: t('fullName'),
      dataIndex: 'fullName',
      // colSpan:3
    },
    {
    title: t('theme'),
    dataIndex: 'theme',
    },
    {
      title: t('phone'),
      dataIndex: 'phone',
    },
    {
      title: t('created_at'),
      dataIndex: 'created_at',
    }, {
      title: t('email'),
      dataIndex: 'email',
    }, {
      title: t('status'),
      dataIndex: 'read',
    },
  ]
  return (
    <div>
      <TopBar title="messages" setSearch={setSearch} search={search}  />
      <div className="p-4">
        <GlobalTitle isAction={false} api='contact-us-messages' url='contact-us-messages' columns={columns} filter={{fullName:search||undefined}}/>
      </div>
    </div>
  )
}
