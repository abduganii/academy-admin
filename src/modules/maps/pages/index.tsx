import { useNavigate } from "react-router-dom";
import GlobalTitle from "../../../components/global-table";
import TopSerach from "./top-serach";

export default function IndexPage() {
  const navigate = useNavigate()
  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      width: 20,
      },
     
    {
    title: 'Name',
    dataIndex: 'name',
    },
    {
      title: 'price',
      dataIndex: 'price',
      render: (price:any) => <p>{price} sum</p>,
    }
  ]
 
  return (
    <div>
      <TopSerach/>
      <div className="p-4">
        <GlobalTitle 
        api="maps"
        handleRowClick={(e:any)=>navigate(`/maps/${e?.id}`)}
        isAction={false}
        url='maps'
        columns={columns}
        filter={{}}
        />
      </div>
    </div>
  )
}
