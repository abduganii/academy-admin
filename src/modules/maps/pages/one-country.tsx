import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import TopBar from "../../../components/top-bar";
import { Table } from "antd";
import { useTranslation } from "react-i18next";

export default function IndexCountryPage() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const {id} = useParams()
  const {t} = useTranslation()
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
        title:t("modul"),
        value:"modul"
    },
    {
        id:2,
        title:t("info_country"),
          value:"info_country"
    },
  ]
 
  return (
    <div>
       <TopBar title={params.get('name')|| 'name'}  />
      <div className="p-4">
      <Table
        className={'cursor-pointer'}
        columns={columns}
        dataSource={data}
        onRow={(record) => ({
          onClick: () => navigate(`/maps/${id}/${record?.value}`),
        })}  
        />
      </div>
    </div>
  )
}
