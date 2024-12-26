import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import TopBar from "../../../components/top-bar";
import { Table } from "antd";

export default function IndexCountryPage() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
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
    
  ]
  const data = [
    {
        id:1,
        title:"modul",
    },
    {
        id:2,
        title:"info_country"
    },
  ]
 
  return (
    <div>
       <TopBar title={params.get('name')|| 'Название страны'}  />
      <div className="p-4">
      <Table
        className={'cursor-pointer'}
        columns={columns}
        dataSource={data}
        onRow={(record) => ({
          onClick: () => navigate(`/maps/${id}/${record?.title}`),
        })}  
        />
      </div>
    </div>
  )
}
