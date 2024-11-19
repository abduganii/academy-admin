import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import {SearchOutlined} from "@ant-design/icons"
interface IPops {
    title: string,
    url?:string,
    setSearch?:any,
    search?:any
}
export default function TopBar({title,url,setSearch,search}:IPops) {
    const navigate = useNavigate()
  return (
    <div className="flex  gap-[20px] items-center p-4 w-full bg-white">
        <p className="text-[28px] leading-[33px] font-semibold">{title}</p>
        {setSearch && <Input prefix={<SearchOutlined />}  className="w-full max-w-[300px]" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="search"/>}
        {url && <Button className="ml-auto" type="primary" size="large" onClick={()=>navigate('/'+url+"/new")}>+ Добавить</Button>}
    </div>
  )
}
