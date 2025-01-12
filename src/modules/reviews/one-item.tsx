import {  useParams, useSearchParams} from "react-router-dom";
import { GetAllData } from "../../service/global";
import { useQuery } from "react-query";
import { Progress, Rate } from "antd";
import GlobalTitle from "../../components/global-table";
import { useTranslation } from "react-i18next";

export default function OneItemPage() {
   const [params] = useSearchParams()
     const param = useParams()
     const {t} = useTranslation()
  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      width: 20,
      },
    {
    title: t('name'),
    dataIndex: 'user',
    render: (user:any) => <p>{user?.firstName} {user?.lastName}</p>,
    },
    {
        title:t("comment"),
        dataIndex: 'comment',
        width: 350,
    },
    {
        title: t('rating'),
        dataIndex: 'star',
        render: (star:number) => <Rate value={star}/>,
      },
      {
        title: t('created_at'),
        dataIndex: 'created_at',
        render: (text:any) => <p>{text.slice(0,10)}</p>,
      },
 ]

  const { data} = useQuery('reviews',() =>GetAllData(`comments/stats/${param.id}/${params.get('type')}`));

  return (
    <div>
       <div className="flex  gap-[20px] items-start p-4 w-full bg-white">
        <p className="text-[28px] leading-[33px] font-semibold mt-2">{t(params.get('type') as string)+':'+params.get('name')}</p>
    </div>
     
      <div className="p-4">
        <div className="bg-white rounded-lg flex gap-10 p-[21px] mb-4"> 
            <div className="w-full max-w-[144px]">
                <h4 className="text-[40px] leading-[46px] font-semibold">{data?.data?.avg}</h4>  
                <p className="text-[14px] leading-[20px] font-normal py-4">На основании {data?.data?.total} отзывов</p>
                <Rate value={data?.data?.avg}/>
            </div> 
            <div className="w-full max-w-[600px]">
                <div className="flex items-center gap-2">
                    <p className="text-[16px] leading-[24px] font-normal">5</p>
                     <Progress  percent={(data?.data?.five /data?.data?.total ) * 100}/>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-[16px] leading-[24px] font-normal">4</p>
                     <Progress  percent={(data?.data?.four /data?.data?.total ) * 100}/>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-[16px] leading-[24px] font-normal">3</p>
                     <Progress  percent={(data?.data?.three /data?.data?.total ) * 100}/>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-[16px] leading-[24px] font-normal">2</p>
                     <Progress  percent={(data?.data?.two /data?.data?.total ) * 100}/>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-[16px] leading-[24px] font-normal">1</p>
                     <Progress  percent={(data?.data?.one /data?.data?.total ) * 100}/>
                </div>
            </div>   
        </div>
        <GlobalTitle
            api={'comments'} 
            isAction={false}
            url='reviews' 
            columns={columns}
            filter={  {
                item :param.id,
                type:params.get('type'),
                relations:'user',
                sortBy: 'DESC'
            }}
          />
      </div>
    </div>
  )
}
