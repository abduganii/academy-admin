import { useState } from "react";
import GlobalTitle from "../../../../components/global-table";
import TopBar from "../../../../components/top-bar";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function IndexPage() {
  const [search ,setSearch] = useState<string>('')
  const {id} = useParams()
  const {t}= useTranslation()
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
    title: t('link'),
    dataIndex: 'link',
  },
  ]
  return (
    <div>
      <TopBar title="legislations" setSearch={setSearch} search={search} url={`maps/${id}/info_country/legislations`} />
      <div className="p-4">
        <GlobalTitle api='map-items' url={`maps/${id}/info_country/legislations`} columns={columns} filter={{title:search||undefined,type:'legislation',mapId:id}} />
      </div>
    </div>
  )
}
