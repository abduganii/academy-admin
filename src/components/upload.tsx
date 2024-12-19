import {LoadingOutlined, UploadOutlined} from "@ant-design/icons"
import { UploadFile } from "../service/upload";
import { toast } from "react-toastify";
import { useState } from "react";
interface iProps{
    label:string,
    className?:string,
    onUpload: any,
    acceptTypes:string;
    text:string;
    valueName?:any;
    errors?:any
}

export default function FileUpload({label,errors,text,valueName,acceptTypes, onUpload,className}:iProps) {
  const [loadingFile, setLoadingFile] = useState<boolean>(false);
  const [fileName, setfileName] = useState<string>(valueName||'');
  const hendleimg = async (e: any) => {
    setLoadingFile(true)
    if (e.target.files[0] && e.target.files[0]?.size < 5000000) {
      const file = e.target.files[0];
      const formData = new FormData()
        formData.append("file", file)
         await UploadFile(formData)
            .then((data) => {
              // data?.filename
              setfileName(data?.data?.data?.filename)
              onUpload(data?.data)
            })
            .catch((errr) => toast.error(errr.response.data.message))
            .finally(()=>setLoadingFile(false))
    } else {
      setLoadingFile(false)
      toast.error("The image size must be less than 5 MB.");
    }
  }; 
  return (
    <div className={`${className && className} w-full cursor-pointer`}>
    <p className='text-[#252C32] text-[13px] leading-[18px] font-normal'>{label}</p>
    <label className={`${errors ? 'border border-red-500':''} text-center w-full inline-block cursor-pointer  p-[21px] bg-[#F5F5F5] rounded-lg mt-[6px]`}>
        {loadingFile ? <LoadingOutlined />: <UploadOutlined  className="text-[18px]"/>}
        <p className='text-[#252C32] text-[13px] leading-[18px] font-normal'>{fileName.length? fileName: text}</p>
        <input   className="hidden" type="file"   accept={acceptTypes} onChange={(e)=>{
          hendleimg(e)
        }} />
    </label>
    {errors && <p className="p-0 m-0 text-[12px] font-normal text-red-500">{errors}</p>}
    </div>
  )
}
