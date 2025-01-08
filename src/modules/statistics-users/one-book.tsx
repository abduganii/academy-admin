import { useTranslation } from "react-i18next";
import GlobalTitle from "../../components/global-table";
import { useParams, useSearchParams } from "react-router-dom";

export default function OneBook() {
  const [params] = useSearchParams()
   const param = useParams()
   const {t}= useTranslation()
  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      width: 20,
      },
    {
    title: t('firstName'),
    dataIndex: 'firstName',
  },
  {
    title: t('created_at'),
    dataIndex: 'created_at',
  },
  {
    title: t('liveTime'),
    dataIndex: 'liveTime',
  },

  
  ]
  return (
    <div>
       <div className="flex  gap-[20px] items-start p-4 w-full bg-white">
          <p className="text-[28px] leading-[33px] font-semibold mt-2">{params.get("type")}: {params.get('itemsName')}</p>
      </div>
      <div className="p-4">
        <GlobalTitle
        api='stats/timing'
        isAction={false}
        columns={columns}
        filter={{
          timingType:"reading",
          itemType:params.get("type"),
          userId:param.id
        }}
        />
      </div>
    </div>
  )
}
