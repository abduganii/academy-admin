/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import {SearchOutlined} from "@ant-design/icons"
import { useTranslation } from "react-i18next";
interface IPops {
    title: string,
    openMadal?:any,
    url?:string,
    setSearch?:any,
    search?:any,
    params?:any
}
const debounce = <F extends (...args: any[]) => any>(
  func: F,
  delay: number
): ((...args: Parameters<F>) => void) => {
  let timerId: any;
  return (...args: Parameters<F>) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default function TopBar({title,url,params,setSearch,openMadal}:IPops) {
    const navigate = useNavigate()
    const { t } = useTranslation();
  return (
    <div className="flex  gap-[20px] items-center p-4 w-full bg-white">
        <p className="text-[28px] leading-[33px] font-semibold">{t(title)}</p>
        {setSearch && <Input prefix={<SearchOutlined />}  className="w-full max-w-[300px]"  onChange={debounce((e) => {
          setSearch(e.target.value)
        }, 700)} placeholder={t('search')}/>}
        {url && <Button className="ml-auto" type="primary" size="large" onClick={openMadal? openMadal: ()=>navigate('/'+url+"/new"+ `${params ? params:''}`)}>+ {t('add')}</Button>}
    </div>
  )
}

