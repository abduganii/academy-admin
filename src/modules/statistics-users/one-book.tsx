import GlobalTitle from "../../components/global-table";
import { useParams, useSearchParams } from "react-router-dom";

export default function OneBook() {
  const [params] = useSearchParams()
   const param = useParams()
  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      width: 20,
      },
    {
    title: 'firstName',
    dataIndex: 'firstName',
  },
  {
    title: 'date',
    dataIndex: 'created_at',
  },
  {
    title: 'liveTime',
    dataIndex: 'liveTime',
  },

  
  ]
  return (
    <div>
       <div className="flex  gap-[20px] items-start p-4 w-full bg-white">
          <p className="text-[28px] leading-[33px] font-semibold mt-2">{params.get("type")}: {param.userId}</p>
      </div>
      <div className="p-4">
        <GlobalTitle
        api='stats/timing'
        isAction={false}
        columns={columns}
        filter={{
          timingType:"reading",
          itemType:params.get("type"),
          userId:params.get("userId")
        }}
        />
      </div>
    </div>
  )
}
