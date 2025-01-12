import { Select} from "antd";
import { useTranslation } from "react-i18next";
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
    const {t} = useTranslation()
  return (
    <div className="flex  gap-[40px] items-start p-4 w-full bg-white">
        <p className="text-[28px]  leading-[33px] font-semibold mt-2">{t('maps')}</p>
       
        <Select
            showSearch
            className="ml-auto w-full max-w-[475px]"
            placeholder={t('select')}
            optionFilterProp="label"
            onSelect={(e)=>navigate(`/maps/new/modul?name=${e}`)}
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
                {
                    value: 'franch',
                    label: 'franch',
                },
                {
                    value: 'Kazak',
                    label: 'Kazak',
                },
            ]}
        />
      </div>
  )
}
