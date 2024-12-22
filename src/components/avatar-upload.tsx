import { UserOutlined} from "@ant-design/icons"
import { UploadFile } from "../service/upload";
import { toast } from "react-toastify";
import { useState } from "react";
import { Avatar } from "antd";
interface iProps{
    onUpload: any,
    value?:any;
    errors?:any;
    className?:any
}

export default function AvatarUpload({className,errors, value, onUpload}:iProps) {
  const [loadingFile, setLoadingFile] = useState<boolean>(false);
  const [valueLoc, setValue] = useState<string>(value || '');
  console.log(loadingFile)
  const hendleimg = async (e: any) => {
    setLoadingFile(true)
    if (e.target.files[0] && e.target.files[0]?.size < 5000000) {
      const file = e.target.files[0];
      const formData = new FormData()
        formData.append("file", file)
         await UploadFile(formData)
            .then((data) => {
              setValue(data?.data?.data?.path)
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
    <div className={`${className && className} text-center w-full`}>
        <div className="m-auto w-[124px] h-[124px] relative">
            {
                valueLoc ?
                <img src={import.meta.env.VITE_API_BACKEND_URL+ valueLoc} width={124} height={124} className="w-[124px] object-cover aspect-square rounded-full" />
                :
                <Avatar
                size={124}
                className="w-[124px] h-[124px]"
                style={{
                    backgroundColor: '#87d068',
                }}
                icon={<UserOutlined size={60}/>}
                />
            }
            <label className="flex items-center cursor-pointer justify-center w-10 h-10 bg-white shadow-md absolute -bottom-1 -right-1 rounded-lg">
              <input   className="hidden" type="file"   accept={'image/*'} onChange={(e)=>{
                hendleimg(e)
              }} />
            </label>
        </div>
       
    {errors && <p className="p-0 m-0 text-[12px] font-normal text-red-500">{errors}</p>}
    </div>
  )
}
