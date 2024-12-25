import { useNavigate, useParams } from "react-router-dom";
import TopBar from "../../../components/top-bar";
import { Table } from "antd";
import { GetByIdData } from "../../../service/global";
import { useQuery } from "react-query";

export default function IndexInfoPage() {
  const { id } = useParams();
  const { data,isLoading } = useQuery(["oneMaps",id], () =>GetByIdData("maps",id));
  
  const navigate = useNavigate()
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
    {
      title: 'count',
      dataIndex: 'value',
    }
  ]

 
  const keysToInclude = ['legislations', 'anti_corruptions', 'international_cooperations', 'indexes', 'national_cooperations'];

const result = keysToInclude.map((key,index) => ({
  id:index+1,
  title: key,
  value: data?.data?.totalData[key]
}));
 
  return (
    <div>
       <TopBar title="Информация о стране"  />
      <div className="p-4">
      <Table
        className={'cursor-pointer'}
        columns={columns}
        dataSource={result}
        loading={isLoading}
        onRow={(record) => ({
          onClick: () => navigate(`/maps/${id}/info_country/${record?.title}`),
        })} 
        />
      </div>
    </div>
  )
}
