import { useState } from "react";
import GlobalTitle from "../../../components/global-table";
import TopBar from "../../../components/top-bar";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function IndexPage() {
  const [search ,setSearch] = useState<string>('')
  const {id} = useParams()
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
      title: t('rate'),
      dataIndex: 'rate',
    },
    {
      title: t('grade'),
      dataIndex: 'grade',
    },
  ]
  return (
    <div>
      <TopBar title="indexes" setSearch={setSearch} search={search} url={`maps/${id}/info_country/indexes`} />
      <div className="p-4">
        <GlobalTitle api='map-items' url={`maps/${id}/info_country/indexes`} columns={columns} filter={{title:search||undefined,type:'index',mapId:id}} />
      </div>
    </div>
  )
}
