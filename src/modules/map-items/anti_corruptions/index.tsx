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
        title: t('logo'),
        dataIndex: 'logo',
        width: 100,
        render: (url:any) => <img src={import.meta.env.VITE_API_BACKEND_URL+ url?.path} alt="img" className="rounded-lg  w-[56px] aspect-square object-cover" width={56} height={56}/>,
      },
    {
      title: t('title'),
      dataIndex: 'title',
    },
    {
      title: t('text'),
      dataIndex: 'text',
    },
  ]
  return (
    <div>
      <TopBar title="anti_corruptions" setSearch={setSearch} search={search} url={`maps/${id}/info_country/anti_corruptions`} />
      <div className="p-4">
        <GlobalTitle api='map-items' url={`maps/${id}/info_country/anti_corruptions`} columns={columns} filter={{title:search||undefined,type:'anti_corruption',mapId:id,relations:['logo']}} />
      </div>
    </div>
  )
}
