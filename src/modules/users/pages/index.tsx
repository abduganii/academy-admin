import { useState } from "react";
import GlobalTitle from "../../../components/global-table";
import TopBar from "../../../components/top-bar";
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
    title: t('firstName'),
    dataIndex: 'firstName',
  },
  {
    title: t('roles'),
    dataIndex: 'roles',
  },

  
  ]
  return (
    <div>
      <TopBar title="users" setSearch={setSearch} search={search} url='users' />
      {/* <div className='m-4 rounded-md bg-white p-4'>
      
      </div> */}
      <div className="p-4">
        <GlobalTitle api='users' url='users' columns={columns} filter={{name:search||undefined}}/>
      </div>
    </div>
  )
}
