import { useState } from "react";
import GlobalTitle from "../../../components/global-table";
import TopBar from "../../../components/top-bar";


export default function IndexPage() {
  const [search ,setSearch] = useState<string>('')
  const columns = [
    {
    title: 'firstName',
    dataIndex: 'firstName',
  },
  {
    title: 'roles',
    dataIndex: 'roles',
  },

  
  ]
  return (
    <div>
      <TopBar title="Пользователи" setSearch={setSearch} search={search} url='users' />
      <div className="p-4">
        <GlobalTitle api='users' url='users' columns={columns} filter={{name:search}}/>
      </div>
    </div>
  )
}
