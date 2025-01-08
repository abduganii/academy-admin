import { useNavigate } from "react-router-dom";
import GlobalTitle from "../../../components/global-table";
import ColoredMap from "../../../components/multi-series-map";
import TopSerach from "./top-serach";
import { useQuery } from 'react-query'
import { GetAllData } from "../../../service/global";
import {
  HeatMapOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { useState } from "react";
import { useTranslation } from "react-i18next";
export default function IndexPage() {
  const [isMap,setIsMap] = useState<boolean>(true)
  const navigate = useNavigate()
  const {t}= useTranslation()
  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      width: 20,
    },
    {
      title: t('name'),
      dataIndex: 'name',
    },
    {
      title:  t('price'),
      dataIndex: 'price',
      render: (price: any) => <p>{price} {t('sum')}</p>,
    }
  ]
  const { isLoading, data } = useQuery(['maps'],() =>GetAllData('maps'));
  return (
    <div>
      <TopSerach />
      
      <div className=" bg-white m-4 rounded-md">
        <div className='flex items-center justify-end gap-[5px] w-full border-b border-[#E7E7E7] py-[13px] px-[20px]' >
          <span onClick={() => setIsMap(true)}
            className={`${isMap ? 'bg-[#2962FF]' : 'bg-[#BEC0C5]'}  cursor-pointer py-[6px] px-3 rounded-md`} >
            <HeatMapOutlined className={'text-white'} />
          </span>
          <span onClick={() => setIsMap(false)}
            className={`${!isMap ? 'bg-[#2962FF]' : 'bg-[#BEC0C5]'}  cursor-pointer py-[6px] px-3 rounded-md`} >
            <UnorderedListOutlined className={'text-white'} />
          </span>
        </div>
       
        {isLoading ? "" :
          <>
            {
              isMap ? <ColoredMap data={data?.data || []} /> :
              <GlobalTitle 
              api="maps"
              handleRowClick={(e:any)=>navigate(`/maps/${e?.id}?name=${e?.name}`)}
              isAction={false}
              url='maps'
              columns={columns}
              filter={{}}
              />   
            }
          </>
        }
      </div>
    </div>
  )
}
