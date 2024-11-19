import {UploadOutlined} from "@ant-design/icons"
interface iProps{
    label:string,
    className?:string,
    onUpload: any,
    text:string
}

export default function FileUpload({label,text, onUpload,className}:iProps) {
  return (
    <div className={`${className && className} w-full`}>
    <p className='text-[#252C32] text-[13px] leading-[18px] font-normal'>{label}</p>
    <label className='text-center w-full inline-block  p-[21px] bg-[#F5F5F5] rounded-lg mt-[6px]'>
        <UploadOutlined  className="text-[18px]"/>
        <p className='text-[#252C32] text-[13px] leading-[18px] font-normal'>{text}</p>
        <input  className="hidden" type="file" onChange={onUpload} />
    </label>
    </div>
  )
}
