import { useState } from "react";
import GlobalTitle from "../../../components/global-table";
import TopBar from "../../../components/top-bar";
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
      title: 'rate',
      dataIndex: 'rate',
    },
    {
      title: 'grade',
      dataIndex: 'grade',
    },
  ]
  return (
    <div>
      <TopBar title="Индексы" setSearch={setSearch} search={search} url={`maps/${id}/info_country/indexes`} />
      <div className="p-4">
        <GlobalTitle api='map-items' url={`maps/${id}/info_country/indexes`} columns={columns} filter={{title:search||undefined,type:'index',mapId:id}} />
      </div>
    </div>
  )
}
