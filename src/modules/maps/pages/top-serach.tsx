import { Select } from "antd";
import { useNavigate } from "react-router-dom";

export default function TopSerach() {
//      const debounce = <F extends (...args: any[]) => any>(
//     func: F,
//     delay: number
//   ): ((...args: Parameters<F>) => void) => {
//     let timerId: any;
//     return (...args: Parameters<F>) => {
//       clearTimeout(timerId);
//       timerId = setTimeout(() => {
//         func(...args);
//       }, delay);
//     };
//   };
    const navigate = useNavigate()
  return (
    <div className="flex  gap-[20px] items-center p-4 w-full bg-white">
        <p className="text-[28px] leading-[33px] font-semibold mt-2">Карта</p>
        <Select
            showSearch
            className="ml-auto w-full max-w-[475px]"
            placeholder="Select a person"
            optionFilterProp="label"
            // onChange={(e:any)=>console.log(e)}
            onSelect={(e)=>navigate(`/maps/new?name=${e}`)}
            // onSearch={(e:any)=>console.log(e)}
            options={[
            {
                value: 'uzbekistan',
                label: 'uzbekistan',
            },
            {
                value: 'russian',
                label: 'russian',
            },
            {
                value: 'tajikistan',
                label: 'tajikistan',
            },
            ]}
        />
      </div>
  )
}
