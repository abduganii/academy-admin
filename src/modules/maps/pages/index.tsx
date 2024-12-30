// import { useNavigate } from "react-router-dom";
// import GlobalTitle from "../../../components/global-table";
import ColoredMap from "../../../components/multi-series-map";
import TopSerach from "./top-serach";
import { useQuery } from 'react-query'
import { GetAllData } from "../../../service/global";

export default function IndexPage() {
  // const navigate = useNavigate()
  // const columns = [
  //   {
  //     title: '№',
  //     dataIndex: 'id',
  //     width: 20,
  //   },
  //   {
  //     title: 'Name',
  //     dataIndex: 'name',
  //   },
  //   {
  //     title: 'price',
  //     dataIndex: 'price',
  //     render: (price: any) => <p>{price} sum</p>,
  //   }
  // ]
  const { isLoading, data } = useQuery(['maps'],() =>GetAllData('maps'));
 console.log(data?.data)
  return (
    <div>
      <TopSerach />
      <div className="p-4">
        {/* <GlobalTitle 
        api="maps"
        handleRowClick={(e:any)=>navigate(`/maps/${e?.id}?name=${e?.name}`)}
        isAction={false}
        url='maps'
        columns={columns}
        filter={{}}
        /> */}
        {isLoading ? "" : <ColoredMap data={data?.data||[]} />}
      </div>
    </div>
  )
}
