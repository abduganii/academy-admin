import { useState } from "react";
import GlobalTitle from "../../../../components/global-table";
import TopBar from "../../../../components/top-bar";
import { useParams } from "react-router-dom";


export default function IndexPage() {
  const [search ,setSearch] = useState<string>('')
  const {id} = useParams()
  const columns = [
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
    title: 'link',
    dataIndex: 'link',
  },
  ]
  return (
    <div>
      <TopBar title="Основное законодательство" setSearch={setSearch} search={search} url={`maps/${id}/info_country/legislations`} />
      <div className="p-4">
        <GlobalTitle api='map-items' url={`maps/${id}/info_country/legislations`} columns={columns} filter={{title:search||undefined,type:'legislation',mapId:id}} />
      </div>
    </div>
  )
}
